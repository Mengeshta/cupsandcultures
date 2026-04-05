import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { ChevronDown, QrCode } from 'lucide-react'

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

export default function Community() {
  const [headerRef, headerInView] = useInView()
  const [promiseRef, promiseInView] = useInView()
  const [scheduleRef, scheduleInView] = useInView({ threshold: 0.05 })
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="community" className="relative bg-espresso-900 overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-3" />

      <div className="relative section-padding max-w-4xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-10 transition-all duration-[1200ms] ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-ochre-400 mb-4">
            Your Evening
          </p>
          <h2 className="font-serif text-cream-50 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
            Three Pours. <span className="text-ochre-400 italic">One Journey.</span>
          </h2>
          <p className="font-sans text-cream-100/40 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            From spicy to sweet to herbal, each pour follows a deliberate rhythm.
            No rush. No rigid itinerary. Just tea, stories, and the people
            beside you.
          </p>
        </div>

        {/* The promise — CMO copy block */}
        <div
          ref={promiseRef}
          className={`grid sm:grid-cols-3 gap-6 mb-14 transition-all duration-[1200ms] ease-out ${
            promiseInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { accent: 'text-terracotta-500', line: 'bg-terracotta-500', text: 'No small talk required. Just sit, sip, and let the tea do the introductions.' },
            { accent: 'text-ochre-400', line: 'bg-ochre-400', text: 'Every playlist is scannable from the teapot — music from the homeland of whatever you\'re drinking.' },
            { accent: 'text-teal-500', line: 'bg-teal-500', text: 'You\'ll leave with tea to take home, a quieter mind, and the feeling that the world just got a little smaller.' },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center px-4"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
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
    </section>
  )
}
