import { useInView } from '../hooks/useInView'

const pillars = [
  {
    word: 'Tea',
    subtitle: 'The Leaf',
    description:
      'We source the world\'s most storied leaves — from misty Darjeeling hills to the red earth of Yunnan. Each cup is a living artifact of place, climate, and centuries of craft.',
    detail: 'High-altitude gardens. Hand-picked first flushes. Ancient Pu-erh trees rooted in volcanic soil. Every leaf tells the story of the land it grew from.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24">
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
        <path d="M30 55 C30 42, 70 42, 70 55 C70 65, 30 65, 30 55Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M70 50 C77 50, 82 54, 82 58 C82 62, 77 66, 70 66" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M45 42 C45 35, 42 28, 45 22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <path d="M55 42 C55 35, 52 28, 55 22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
    gradient: 'from-terracotta-500/8 to-transparent',
  },
  {
    word: 'Culture',
    subtitle: 'The Story',
    description:
      'Every tea carries a civilization\'s worth of ritual, art, and philosophy. We unravel those stories — one steep at a time.',
    detail: 'From the silver teapots of the Maghreb to the bamboo whisks of Kyoto. From gaucho mate circles on the pampas to chaiwallah carts on Mumbai corners.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24">
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
        <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="50" y1="28" x2="50" y2="72" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <line x1="28" y1="50" x2="72" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    gradient: 'from-ochre-400/8 to-transparent',
  },
  {
    word: 'Connection',
    subtitle: 'The Gathering',
    description:
      'Tea has always been shared. We create spaces — physical and digital — where strangers become friends over a warm cup.',
    detail: 'No hierarchy, no head of the table. Just people gathered in a circle, sharing a cup. By the end of the evening, the stranger beside you has a name, a story, a smile.',
    icon: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24">
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
        <circle cx="38" cy="42" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="62" cy="42" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M33 58 C33 52, 43 52, 43 58" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M57 58 C57 52, 67 52, 67 58" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M43 44 L57 44" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
      </svg>
    ),
    gradient: 'from-teal-500/8 to-transparent',
  },
]

export default function Manifesto() {
  const [headerRef, headerInView] = useInView()

  return (
    <section id="manifesto" className="relative bg-cream-50 overflow-hidden paper-texture">
      {/* Top ikat border */}
      <div className="ikat-border w-full" />

      <div className="section-padding max-w-7xl mx-auto">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-24 md:mb-32 transition-all duration-[1200ms] ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="heading-editorial text-terracotta-500 mb-4">Our Manifesto</p>
          <h2 className="heading-display text-espresso-900 text-4xl md:text-5xl lg:text-6xl mb-8">
            More Than a Beverage.
            <br />
            <span className="text-terracotta-500 italic">A Living Tradition.</span>
          </h2>
          <p className="text-espresso-700/60 text-lg leading-relaxed max-w-2xl mx-auto">
            For thousands of years, tea has been the thread that weaves communities
            together — across deserts, mountains, and oceans. Cups & Cultures
            exists to honor that thread.
          </p>
        </div>

        {/* Three pillars — editorial alternating layout */}
        <div className="space-y-24 md:space-y-32">
          {pillars.map((pillar, i) => (
            <PillarBlock key={pillar.word} pillar={pillar} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom ikat border */}
      <div className="ikat-border w-full" />
    </section>
  )
}

function PillarBlock({ pillar, index }) {
  const [ref, isInView] = useInView({ threshold: 0.15 })
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center transition-all duration-[1200ms] ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Icon side */}
      <div className={`flex justify-center ${isEven ? '' : 'md:order-2'}`}>
        <div className={`relative p-12 md:p-16 bg-gradient-to-br ${pillar.gradient} rounded-full`}>
          <div className="text-terracotta-500">
            {pillar.icon}
          </div>
          {/* Decorative ring */}
          <div className="absolute inset-0 border border-espresso-200/20 rounded-full" />
        </div>
      </div>

      {/* Content side */}
      <div className={`${isEven ? '' : 'md:order-1'}`}>
        <p className="heading-editorial text-ochre-400 mb-3">
          {String(index + 1).padStart(2, '0')} — {pillar.subtitle}
        </p>
        <h3 className="heading-display text-espresso-900 text-4xl md:text-5xl mb-6 italic">
          {pillar.word}
        </h3>
        <div className="w-16 h-px bg-ochre-400 mb-6" />
        <p className="text-espresso-700/70 leading-relaxed text-base md:text-lg mb-4">
          {pillar.description}
        </p>
        <p className="text-espresso-600/50 leading-relaxed text-sm italic">
          {pillar.detail}
        </p>
      </div>
    </div>
  )
}
