import { useInView } from '../hooks/useInView'

const pillars = [
  {
    word: 'Tea',
    description:
      'We source the world\'s most storied leaves — from misty Darjeeling hills to the red earth of Yunnan. Each cup is a living artifact.',
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto mb-6">
        <circle cx="40" cy="40" r="38" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M25 45 C25 35, 55 35, 55 45 C55 52, 25 52, 25 45Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M55 41 C60 41, 63 44, 63 47 C63 50, 60 53, 55 53" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M37 35 C37 30, 35 25, 37 20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <path d="M43 35 C43 30, 41 25, 43 20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
  {
    word: 'Culture',
    description:
      'Every tea carries a civilization\'s worth of ritual, art, and philosophy. We unravel those stories — one steep at a time.',
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto mb-6">
        <circle cx="40" cy="40" r="38" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="40" y1="20" x2="40" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="20" y1="40" x2="60" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    word: 'Connection',
    description:
      'Tea has always been shared. We create spaces — physical and digital — where strangers become friends over a warm cup.',
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto mb-6">
        <circle cx="40" cy="40" r="38" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="30" cy="36" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="36" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M26 50 C26 44, 34 44, 34 50" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M46 50 C46 44, 54 44, 54 50" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M34 38 L46 38" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
      </svg>
    ),
  },
]

export default function Manifesto() {
  const [headerRef, headerInView] = useInView()
  const [pillarsRef, pillarsInView] = useInView({ threshold: 0.05 })

  return (
    <section id="manifesto" className="relative bg-cream-50 overflow-hidden">
      {/* Top ikat border */}
      <div className="ikat-border w-full" />

      <div className="section-padding max-w-7xl mx-auto">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 md:mb-28 transition-all duration-[1200ms] ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="heading-sans text-terracotta-500 mb-4">Our Manifesto</p>
          <h2 className="heading-display text-espresso-900 text-4xl md:text-5xl lg:text-6xl mb-8">
            More Than a Beverage.
            <br />
            <span className="text-terracotta-500 italic">A Living Tradition.</span>
          </h2>
          <p className="text-espresso-700/70 text-lg leading-relaxed">
            For thousands of years, tea has been the thread that weaves communities
            together — across deserts, mountains, and oceans. Cups & Cultures
            exists to honor that thread.
          </p>
        </div>

        {/* Three pillars */}
        <div
          ref={pillarsRef}
          className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-16"
        >
          {pillars.map((pillar, i) => (
            <div
              key={pillar.word}
              className={`text-center group transition-all duration-[1000ms] ease-out ${
                pillarsInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="text-terracotta-500 group-hover:text-ochre-400 transition-colors duration-700">
                {pillar.icon}
              </div>
              <h3 className="heading-display text-espresso-900 text-3xl md:text-4xl mb-4 italic">
                {pillar.word}
              </h3>
              <div className="w-12 h-px bg-ochre-400 mx-auto mb-6" />
              <p className="text-espresso-700/70 leading-relaxed text-sm md:text-base">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom ikat border */}
      <div className="ikat-border w-full" />
    </section>
  )
}
