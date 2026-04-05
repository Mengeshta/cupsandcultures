import { useInView } from '../hooks/useInView'

const pillars = [
  {
    word: 'Tea',
    description:
      'We source the world\'s most storied leaves — from misty Darjeeling hills to the red earth of Yunnan. Each cup carries the character of the land it grew from.',
    accent: 'text-terracotta-500',
    line: 'bg-terracotta-500',
  },
  {
    word: 'Culture',
    description:
      'Every tea carries a civilization\'s worth of ceremony, art, and philosophy. We bring those stories to the table — one step at a time.',
    accent: 'text-ochre-400',
    line: 'bg-ochre-400',
  },
  {
    word: 'Connection',
    description:
      'Tea has always been shared. We create spaces where strangers become friends over a warm cup — no hierarchy, just people.',
    accent: 'text-teal-600',
    line: 'bg-teal-600',
  },
]

export default function Manifesto() {
  const [headerRef, headerInView] = useInView()
  const [pillarsRef, pillarsInView] = useInView({ threshold: 0.1 })

  return (
    <section id="our-story" className="relative bg-cream-50 overflow-hidden">
      <div className="ikat-border w-full" />

      <div className="section-padding max-w-5xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 md:mb-20 transition-all duration-[1200ms] ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-500 mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-espresso-900 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
            More Than a Beverage
          </h2>
          <p className="font-sans text-espresso-700/50 text-base md:text-lg leading-relaxed">
            For thousands of years, tea has been the thread that weaves communities
            together — across deserts, mountains, and oceans.
            We exist to honor that thread.
          </p>
        </div>

        {/* Three pillars — clean, typographic */}
        <div
          ref={pillarsRef}
          className="grid md:grid-cols-3 gap-10 md:gap-12"
        >
          {pillars.map((pillar, i) => (
            <div
              key={pillar.word}
              className={`text-center transition-all duration-[1000ms] ease-out ${
                pillarsInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Number */}
              <span className={`font-serif text-6xl md:text-7xl font-light ${pillar.accent} opacity-20 leading-none`}>
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Word */}
              <h3 className="font-serif text-espresso-900 text-2xl md:text-3xl font-medium italic mt-2 mb-4">
                {pillar.word}
              </h3>

              {/* Divider */}
              <div className={`w-10 h-px ${pillar.line} mx-auto mb-4 opacity-40`} />

              {/* Description */}
              <p className="font-sans text-espresso-700/55 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="ikat-border w-full" />
    </section>
  )
}
