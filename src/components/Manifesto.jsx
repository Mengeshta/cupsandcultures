import { useInView } from '../hooks/useInView'

const pillars = [
  {
    word: 'History',
    description:
      'Every cup holds centuries of human story. From ancient Chinese dynasties to East African trade routes to South American indigenous traditions — we trace how beverages shaped economies, empires, and everyday life.',
    accent: 'text-terracotta-500',
    line: 'bg-terracotta-500',
  },
  {
    word: 'Wellness',
    description:
      'Tea has been used as medicine for millennia. We explore the science behind the leaf — antioxidants, adaptogens, gut health, mental clarity — so every cup you drink is one you understand.',
    accent: 'text-ochre-400',
    line: 'bg-ochre-400',
  },
  {
    word: 'Culture',
    description:
      'How a nation prepares its cup tells you everything about its values. We study the art, music, philosophy, and social fabric woven into every brewing tradition across the globe.',
    accent: 'text-teal-600',
    line: 'bg-teal-600',
  },
]

export default function Manifesto() {
  const [headerRef, headerInView] = useInView()
  const [storyRef, storyInView] = useInView({ threshold: 0.1 })
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
            Cups & Cultures is an immersive experience built around one idea: that
            the history inside your cup is as rich as anything in a textbook — and
            far more worth sharing.
          </p>
        </div>

        {/* In-depth story */}
        <div
          ref={storyRef}
          className={`max-w-3xl mx-auto mb-20 md:mb-24 transition-all duration-[1200ms] ease-out ${
            storyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-6 text-center">
            <p className="font-sans text-espresso-700/50 text-sm md:text-base leading-relaxed">
              Tea didn't just quench thirst — it shaped civilizations. It funded dynasties in China, fueled colonial economies across three continents, and sparked revolutions from Boston to India. Understanding tea means understanding <em className="text-espresso-800 not-italic font-medium">world history</em> through a lens most people have never considered.
            </p>
            <p className="font-sans text-espresso-700/50 text-sm md:text-base leading-relaxed">
              Beyond its history, tea is one of the most studied plants on earth for its health benefits — from the L-theanine in green tea that sharpens focus, to the polyphenols in black tea linked to heart health, to the anti-inflammatory properties of rooibos and moringa that communities have relied on for generations. We believe you should <em className="text-espresso-800 not-italic font-medium">know what you're drinking</em> and why it matters.
            </p>
            <p className="font-sans text-espresso-700/50 text-sm md:text-base leading-relaxed">
              And then there's the cultural dimension. How a nation prepares its cup reveals its values — hospitality in Morocco, democracy in Argentina's mate circles, mindfulness in Japan. These aren't quaint traditions. They're living philosophies, passed down through centuries, that still have something to teach us.
            </p>
            <p className="font-sans text-espresso-700/50 text-sm md:text-base leading-relaxed">
              Cups & Cultures brings all of this together. We're an <em className="text-espresso-800 not-italic font-medium">educational experience</em> — part tasting, part history lesson, part wellness exploration — designed to leave you knowing more about the world than when you walked in.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 mt-10">
            <div className="w-8 h-px bg-terracotta-500/30" />
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-espresso-700/30">
              History · Wellness · Culture
            </span>
            <div className="w-8 h-px bg-terracotta-500/30" />
          </div>
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
