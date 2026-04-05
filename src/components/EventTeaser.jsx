import { useState } from 'react'
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export default function EventTeaser() {
  const [headerRef, headerInView] = useInView()
  const [formRef, formInView] = useInView()
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="events" className="relative bg-espresso-900 overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-5" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-ochre-400/10 rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-48 h-48 border border-terracotta-500/10 rounded-full pointer-events-none" />

      <div className="relative section-padding max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
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
              Join us for our first public tasting — an evening of North African
              mint tea, Gnawa music, and the stories that bind us. Limited to
              40 guests.
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

          {/* Right — RSVP Form */}
          <div
            ref={formRef}
            className={`transition-all duration-[1200ms] ease-out delay-300 ${
              formInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-espresso-800/50 border border-cream-50/10 rounded-sm p-8 md:p-10 backdrop-blur-sm">
              <h3 className="font-serif text-cream-50 text-2xl md:text-3xl mb-2">
                Reserve Your Seat
              </h3>
              <p className="text-cream-100/40 text-sm mb-8">
                Be the first to know when we open doors.
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
                    className="w-full mt-4 px-8 py-4 bg-terracotta-500 text-cream-50 font-medium uppercase tracking-[0.15em] text-sm rounded-sm hover:bg-terracotta-600 transition-all duration-500 flex items-center justify-center gap-2 group"
                  >
                    Request an Invitation
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-500"
                    />
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 border-2 border-ochre-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-ochre-400 text-2xl">✓</span>
                  </div>
                  <h4 className="font-serif text-cream-50 text-xl mb-2">
                    You're on the List
                  </h4>
                  <p className="text-cream-100/40 text-sm">
                    We'll be in touch soon with details.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
