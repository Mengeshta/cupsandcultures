import { useInView } from '../hooks/useInView'
import { Instagram } from 'lucide-react'

export default function SocialFeed() {
  const [ref, inView] = useInView()

  return (
    <section className="relative bg-cream-50 overflow-hidden">
      <div className="ikat-border w-full" />

      <div className="px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-3xl mx-auto">
        <div
          ref={ref}
          className={`text-center transition-all duration-[1200ms] ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-14 h-14 border border-espresso-200/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Instagram size={22} className="text-terracotta-500" />
          </div>

          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-500 mb-3">
            Follow the Journey
          </p>

          <h2 className="font-serif text-espresso-900 text-2xl md:text-3xl font-medium mb-4">
            @cupsandcultures.co
          </h2>

          <p className="font-sans text-espresso-700/45 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Stories of tea, place, and people — one cup at a time.
          </p>

          <a
            href="https://instagram.com/cupsandcultures.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-espresso-900/15 text-espresso-900 font-sans font-medium uppercase tracking-[0.18em] text-xs rounded-sm hover:border-terracotta-500 hover:text-terracotta-500 transition-all duration-500"
          >
            <Instagram size={14} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
