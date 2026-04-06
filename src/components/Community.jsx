import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { Mail, ArrowRight, Instagram } from 'lucide-react'
import { submitToSheets } from '../utils/googleSheets'

export default function Community() {
  const [ref, inView] = useInView()
  const [formRef, formInView] = useInView()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    await submitToSheets('newsletter', { email })
    setSubmitted(true)
    setSubmitting(false)
  }

  return (
    <section id="connect" className="relative bg-cream-50 overflow-hidden">
      <div className="ikat-border w-full" />

      <div className="relative section-padding max-w-4xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-[1200ms] ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-500 mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-espresso-900 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
            The Learning <span className="text-terracotta-500 italic">Continues</span>
          </h2>
          <p className="font-sans text-espresso-700/50 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Our events end, but the exploration doesn't have to. We send deep dives on the history behind what you're drinking, the science of how it heals, and the cultures that shaped it — so every cup you pour at home carries a little more meaning.
          </p>
        </div>

        {/* Newsletter signup */}
        <div
          ref={formRef}
          className={`max-w-xl mx-auto mb-20 transition-all duration-[1200ms] ease-out delay-200 ${
            formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-espresso-900 border border-espresso-800 rounded-sm p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-ochre-400/30 rounded-full flex items-center justify-center">
                <Mail size={16} className="text-ochre-400" />
              </div>
              <div>
                <h3 className="font-serif text-cream-50 text-lg font-medium">
                  The Cups & Cultures Letter
                </h3>
                <p className="text-cream-100/40 text-xs">
                  History, wellness, and culture in your inbox — once or twice a month
                </p>
              </div>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent border-b border-cream-50/20 text-cream-50 py-3 px-1 focus:border-ochre-400 focus:outline-none transition-colors duration-500 placeholder:text-cream-100/20 text-sm"
                    placeholder="your@email.com"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`px-6 py-3 bg-terracotta-500 text-cream-50 font-medium uppercase tracking-[0.15em] text-xs rounded-sm hover:bg-terracotta-600 transition-all duration-500 flex items-center gap-2 group shrink-0 ${
                      submitting ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                  >
                    {submitting ? 'Joining…' : 'Subscribe'}
                    {!submitting && (
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform duration-500"
                      />
                    )}
                  </button>
                </div>
                <p className="text-cream-100/25 text-[10px] tracking-wide">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="w-12 h-12 border-2 border-ochre-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-ochre-400 text-xl">✓</span>
                </div>
                <h4 className="font-serif text-cream-50 text-lg mb-1">
                  You're in.
                </h4>
                <p className="text-cream-100/40 text-sm">
                  Your first letter is on its way — start with the story of how tea changed the world.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* What you'll get */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {[
            {
              accent: 'border-terracotta-500',
              title: 'History Deep Dives',
              text: 'How tea toppled empires, funded revolutions, and traveled the Silk Road — stories you won\'t find on a label.',
            },
            {
              accent: 'border-ochre-400',
              title: 'Wellness & Science',
              text: 'The research behind the leaf — antioxidants, adaptogens, gut health — explained clearly so you know what every cup is doing for you.',
            },
            {
              accent: 'border-teal-500',
              title: 'Cultural Exploration',
              text: 'Music, philosophy, and the social traditions behind every brewing culture — from Japanese mindfulness to Argentine democracy.',
            },
          ].map((item, i) => (
            <div key={i} className="text-center px-4">
              <div className={`w-10 h-10 border ${item.accent} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <span className="font-serif text-espresso-900 text-sm font-medium">{i + 1}</span>
              </div>
              <h4 className="font-serif text-espresso-900 text-base font-medium mb-2">
                {item.title}
              </h4>
              <p className="font-sans text-espresso-700/45 text-xs leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Social CTA */}
        <div className="text-center">
          <div className="w-12 h-px bg-terracotta-500/30 mx-auto mb-6" />
          <p className="font-sans text-espresso-700/40 text-xs uppercase tracking-[0.2em] mb-4">
            Explore With Us
          </p>
          <a
            href="https://instagram.com/cupsandcultures.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-espresso-900/15 text-espresso-900 font-sans font-medium uppercase tracking-[0.18em] text-xs rounded-sm hover:border-terracotta-500 hover:text-terracotta-500 transition-all duration-500"
          >
            <Instagram size={14} />
            @cupsandcultures.co
          </a>
        </div>
      </div>
    </section>
  )
}
