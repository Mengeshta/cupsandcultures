import { useState, useEffect } from 'react'
import { Calendar, MapPin, Clock, ArrowRight, Users, ChevronDown, QrCode } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { getRsvpCount, submitToSheets, RSVP_CAP } from '../utils/googleSheets'

const schedule = [
  {
    time: '7:00 PM',
    title: 'Settle In',
    detail: 'Sink into the space. A warm welcome cup is already waiting — no agenda, no introductions. Just arrive as you are.',
    tea: null,
  },
  {
    time: '7:30 PM',
    title: 'First Pour — The Spark',
    detail: 'Bold masala chai in clay kulhads. The evening ignites with spice and warmth. This is the conversation starter — the pour that awakens.',
    tea: 'Masala Chai · India',
    playlist: 'Sitar ragas, Ravi Shankar',
  },
  {
    time: '8:15 PM',
    title: 'Second Pour — The Sweet',
    detail: 'Moroccan mint tea poured from silver teapots at height. Bright, refreshing, and impossibly fragrant — the heart of the evening.',
    tea: 'Moroccan Mint · Morocco',
    playlist: 'Gnawa & Andalusian classics',
  },
  {
    time: '8:50 PM',
    title: 'A Gentle Pause',
    detail: 'No schedule. No speaker. Just a quiet moment to stretch, wander the textiles, and let the evening breathe. Some of the best conversations happen right here.',
    tea: null,
  },
  {
    time: '9:10 PM',
    title: 'Third Pour — The Calm',
    detail: 'Herbal rosewater tisane arrives — caffeine-free, delicate, and calming. The evening settles into tranquility as the lights go low.',
    tea: 'Rosewater Tisane · North Africa',
    playlist: 'Andalusian oud, soft desert melodies',
  },
  {
    time: '9:40 PM',
    title: 'The Farewell',
    detail: 'No more pours. Just quiet conversation and a small parcel of the evening\'s teas to take home. You\'ll leave with a reason to come back.',
    tea: null,
  },
]

// Set your event date here (month is 0-indexed: 0=Jan, 5=Jun, etc.)
const EVENT_DATE = new Date(2026, 5, 20, 19, 0, 0) // June 20, 2026 at 7:00 PM

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return timeLeft
}

function getTimeLeft(target) {
  const now = new Date()
  const diff = target - now
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  }
}

export default function EventTeaser() {
  const [headerRef, headerInView] = useInView()
  const [formRef, formInView] = useInView()
  const [scheduleRef, scheduleInView] = useInView({ threshold: 0.05 })
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [spotsLeft, setSpotsLeft] = useState(RSVP_CAP)
  const [isFull, setIsFull] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)
  const countdown = useCountdown(EVENT_DATE)

  useEffect(() => {
    getRsvpCount().then(({ count, isFull: full }) => {
      setSpotsLeft(Math.max(0, RSVP_CAP - count))
      setIsFull(full)
    })
  }, [])

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    const type = isFull ? 'waitlist' : 'rsvp'
    await submitToSheets(type, formData)

    if (!isFull) {
      setSpotsLeft((prev) => Math.max(0, prev - 1))
      if (spotsLeft <= 1) setIsFull(true)
    }

    setSubmitted(true)
    setSubmitting(false)
  }

  return (
    <section id="events" className="relative bg-espresso-900 overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-5" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-ochre-400/10 rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-48 h-48 border border-terracotta-500/10 rounded-full pointer-events-none" />

      <div className="relative section-padding max-w-7xl mx-auto">
        {/* Countdown Timer */}
        {!countdown.expired && (
          <div className="text-center mb-16">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-ochre-400/60 mb-6">
              The evening begins in
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-6">
              {[
                { value: countdown.days, label: 'Days' },
                { value: countdown.hours, label: 'Hours' },
                { value: countdown.minutes, label: 'Min' },
                { value: countdown.seconds, label: 'Sec' },
              ].map((unit, i) => (
                <div key={unit.label} className="flex items-center gap-3 sm:gap-6">
                  <div className="flex flex-col items-center">
                    <span className="font-serif text-cream-50 text-4xl sm:text-5xl md:text-6xl font-light leading-none tabular-nums">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-cream-100/30 mt-2">
                      {unit.label}
                    </span>
                  </div>
                  {i < 3 && (
                    <span className="font-serif text-ochre-400/30 text-2xl sm:text-3xl md:text-4xl font-light -mt-4">:</span>
                  )}
                </div>
              ))}
            </div>
            <div className="w-16 h-px bg-ochre-400/20 mx-auto mt-8" />
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
          {/* Left — Event Details */}
          <div
            ref={headerRef}
            className={`transition-all duration-[1200ms] ease-out ${
              headerInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-ochre-400 mb-4">Next Gathering</p>
            <h2 className="font-serif text-cream-50 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
              The{' '}
              <span className="text-ochre-400 italic">Inauguration</span>
            </h2>

            <p className="font-sans text-cream-100/45 text-base leading-relaxed mb-10">
              Our first public tasting — an evening of three pours, living music, and the stories that bind us.
              Limited to {RSVP_CAP} guests.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 text-cream-100/60">
                <Calendar size={18} className="text-terracotta-500" />
                <span>Coming Soon — 2026</span>
              </div>
              <div className="flex items-center gap-4 text-cream-100/60">
                <Clock size={18} className="text-terracotta-500" />
                <span>7:00 PM — 10:00 PM</span>
              </div>
              <div className="flex items-center gap-4 text-cream-100/60">
                <MapPin size={18} className="text-terracotta-500" />
                <span>Location to be announced</span>
              </div>
              <div className="flex items-center gap-4 text-cream-100/60">
                <Users size={18} className="text-terracotta-500" />
                <span>
                  {isFull ? (
                    <span className="text-terracotta-500 font-medium">Sold out — waitlist open</span>
                  ) : (
                    <>{spotsLeft} of {RSVP_CAP} spots remaining</>
                  )}
                </span>
              </div>
            </div>

            {/* What to expect */}
            <div className="grid grid-cols-2 gap-4">
              {['Live Tea Ceremony', 'Cultural Storytelling', 'Tea-Infused Treats', 'Meaningful Conversation'].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-cream-100/40 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-ochre-400 rounded-full shrink-0" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right — RSVP / Waitlist Form */}
          <div
            ref={formRef}
            className={`transition-all duration-[1200ms] ease-out delay-300 ${
              formInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-espresso-800/50 border border-cream-50/10 rounded-sm p-8 md:p-10 backdrop-blur-sm">
              {/* Spots indicator */}
              {!submitted && (
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-cream-100/40 mb-2">
                    <span>{isFull ? 'Event is full' : `${spotsLeft} spots left`}</span>
                    <span>{RSVP_CAP - spotsLeft}/{RSVP_CAP}</span>
                  </div>
                  <div className="w-full h-1 bg-cream-50/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        isFull ? 'bg-terracotta-500' : 'bg-ochre-400'
                      }`}
                      style={{ width: `${((RSVP_CAP - spotsLeft) / RSVP_CAP) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              <h3 className="font-serif text-cream-50 text-2xl md:text-3xl mb-2">
                {isFull ? 'Join the Waitlist' : 'Reserve Your Seat'}
              </h3>
              <p className="text-cream-100/40 text-sm mb-8">
                {isFull
                  ? 'We\'ll notify you the moment a spot opens up.'
                  : 'Be among the first 40 to experience our inaugural evening.'}
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-cream-100/50 text-xs uppercase tracking-[0.15em] mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-cream-50/20 text-cream-50 py-3 px-1 focus:border-ochre-400 focus:outline-none transition-colors duration-500 placeholder:text-cream-100/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-cream-100/50 text-xs uppercase tracking-[0.15em] mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-cream-50/20 text-cream-50 py-3 px-1 focus:border-ochre-400 focus:outline-none transition-colors duration-500 placeholder:text-cream-100/20"
                      placeholder="your@email.com"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full mt-4 px-8 py-4 font-medium uppercase tracking-[0.15em] text-sm rounded-sm transition-all duration-500 flex items-center justify-center gap-2 group ${
                      isFull
                        ? 'bg-ochre-400 text-espresso-900 hover:bg-ochre-300'
                        : 'bg-terracotta-500 text-cream-50 hover:bg-terracotta-600'
                    } ${submitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    {submitting
                      ? 'Submitting…'
                      : isFull
                        ? 'Join the Waitlist'
                        : 'Request an Invitation'}
                    {!submitting && (
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform duration-500"
                      />
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className={`w-16 h-16 border-2 rounded-full flex items-center justify-center mx-auto mb-6 ${
                    isFull ? 'border-ochre-400' : 'border-terracotta-500'
                  }`}>
                    <span className={`text-2xl ${isFull ? 'text-ochre-400' : 'text-terracotta-500'}`}>✓</span>
                  </div>
                  <h4 className="font-serif text-cream-50 text-xl mb-2">
                    {isFull ? 'You\'re on the Waitlist' : 'You\'re on the List'}
                  </h4>
                  <p className="text-cream-100/40 text-sm">
                    {isFull
                      ? 'If a spot opens up, you\'ll be the first to know.'
                      : 'We\'ll be in touch soon with details.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ─── Evening Schedule ─── */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-ochre-400 mb-4">
              Your Evening
            </p>
            <h3 className="font-serif text-cream-50 text-2xl md:text-3xl font-medium leading-tight mb-4">
              Three Pours. <span className="text-ochre-400 italic">One Journey.</span>
            </h3>
            <p className="font-sans text-cream-100/40 text-sm leading-relaxed max-w-lg mx-auto">
              From spicy to sweet to herbal, each pour follows a deliberate rhythm.
              No rush. No rigid itinerary. Just tea, stories, and the people beside you.
            </p>
          </div>

          {/* Promise pillars */}
          <div className="grid sm:grid-cols-3 gap-6 mb-14">
            {[
              { line: 'bg-terracotta-500', text: 'No small talk required. Just sit, sip, and let the tea do the introductions.' },
              { line: 'bg-ochre-400', text: 'Every playlist is scannable from the teapot — music from the homeland of whatever you\'re drinking.' },
              { line: 'bg-teal-500', text: 'You\'ll leave with tea to take home, a quieter mind, and the feeling that the world just got a little smaller.' },
            ].map((item, i) => (
              <div key={i} className="text-center px-4">
                <div className={`w-8 h-px ${item.line} mx-auto mb-4 opacity-40`} />
                <p className="font-sans text-cream-100/35 text-xs leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Schedule accordion */}
          <div
            ref={scheduleRef}
            className="space-y-0 border-t border-cream-50/8"
          >
            {schedule.map((item, i) => (
              <div
                key={i}
                className={`border-b border-cream-50/8 transition-all duration-700 ease-out ${
                  scheduleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-6 py-5 md:py-6 text-left group"
                >
                  <span className="font-sans text-ochre-400/70 text-xs uppercase tracking-[0.15em] w-20 shrink-0">
                    {item.time}
                  </span>
                  <span className="font-serif text-cream-50 text-base md:text-lg font-medium flex-1 group-hover:text-ochre-400 transition-colors duration-500">
                    {item.title}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-cream-50/30 shrink-0 transition-transform duration-500 ${
                      openIndex === i ? 'rotate-180 text-ochre-400' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === i ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-[104px]">
                    <p className="font-sans text-cream-100/40 text-sm leading-relaxed mb-3">
                      {item.detail}
                    </p>
                    {item.tea && (
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs">
                        <span className="text-terracotta-500 font-medium">{item.tea}</span>
                        {item.playlist && (
                          <span className="text-cream-100/25 flex items-center gap-1.5">
                            <QrCode size={10} />
                            {item.playlist}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing note */}
          <div className="text-center mt-16">
            <div className="w-12 h-px bg-ochre-400/30 mx-auto mb-6" />
            <p className="font-serif text-cream-50/55 text-base md:text-lg italic leading-relaxed max-w-md mx-auto mb-2">
              You don't need a reason to come. Just a willingness to slow down.
            </p>
            <p className="font-sans text-cream-100/20 text-xs tracking-wide">
              Tea. Culture. Connection.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
