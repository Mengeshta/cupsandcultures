import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import MenuCard from './MenuCard'
import tastingData from '../data/TastingMenu.json'

export default function TastingMenu() {
  const [activeRegion, setActiveRegion] = useState(tastingData.regions[0].id)
  const [headerRef, headerInView] = useInView()
  const [contentRef, contentInView] = useInView({ threshold: 0.05 })

  const currentRegion = tastingData.regions.find((r) => r.id === activeRegion)

  return (
    <section id="tasting-menu" className="relative bg-espresso-900 overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-5" />

      <div className="relative section-padding max-w-7xl mx-auto">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-[1200ms] ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="heading-sans text-ochre-400 mb-4">The Digital Tasting Menu</p>
          <h2 className="heading-display text-cream-50 text-4xl md:text-5xl lg:text-6xl mb-6">
            A World in <span className="text-ochre-400 italic">Every Leaf</span>
          </h2>
          <p className="text-cream-100/50 text-lg leading-relaxed">
            Toggle between origins. Discover the flavor, the ritual, and the story
            behind each tea tradition.
          </p>
        </div>

        {/* Region Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tastingData.regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id)}
              className={`px-6 py-3 text-xs uppercase tracking-[0.15em] font-medium rounded-sm transition-all duration-500 ${
                activeRegion === region.id
                  ? 'bg-terracotta-500 text-cream-50 shadow-lg shadow-terracotta-500/20'
                  : 'border border-cream-50/20 text-cream-50/60 hover:border-ochre-400/50 hover:text-ochre-400'
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Region description */}
        <div
          ref={contentRef}
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
            contentInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="font-serif text-cream-50 text-2xl md:text-3xl mb-3 italic">
            {currentRegion.subtitle}
          </h3>
          <p className="text-cream-100/40 leading-relaxed">
            {currentRegion.description}
          </p>
        </div>

        {/* Tea Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {currentRegion.teas.map((tea, i) => (
            <div
              key={tea.id}
              className="transition-all duration-700 ease-out"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <MenuCard tea={tea} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
