import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import MenuCard from './MenuCard'
import tastingData from '../data/TastingMenu.json'

export default function TastingMenu() {
  const [activeRegion, setActiveRegion] = useState(tastingData.regions[0].id)
  const [activeCaffeine, setActiveCaffeine] = useState('all')
  const [headerRef, headerInView] = useInView()
  const [contentRef, contentInView] = useInView({ threshold: 0.05 })

  const currentRegion = tastingData.regions.find((r) => r.id === activeRegion)
  const filteredTeas = activeCaffeine === 'all'
    ? currentRegion.teas
    : currentRegion.teas.filter((t) => t.caffeine === activeCaffeine)

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
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-ochre-400 mb-4">The Menu</p>
          <h2 className="font-serif text-cream-50 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
            A World in <span className="text-ochre-400 italic">Every Leaf</span>
          </h2>
          <p className="font-sans text-cream-100/45 text-base leading-relaxed">
            Explore origins. Discover the flavor, the ceremony, and the story
            behind each tea tradition.
          </p>
          <p className="font-sans text-ochre-400/60 text-sm mt-3">
            Our first event follows a three-course journey: spicy → sweet → herbal
          </p>
        </div>

        {/* Caffeine toggle */}
        <div className="flex justify-center gap-2 mb-6">
          {[
            { id: 'all', label: 'All Teas' },
            { id: 'caffeinated', label: 'Caffeinated' },
            { id: 'non-caffeinated', label: 'Non-Caffeinated' },
          ].map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveCaffeine(opt.id)}
              className={`px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-medium rounded-sm transition-all duration-500 ${
                activeCaffeine === opt.id
                  ? 'bg-ochre-400 text-espresso-900'
                  : 'border border-cream-50/15 text-cream-50/40 hover:border-ochre-400/40 hover:text-ochre-400'
              }`}
            >
              {opt.label}
            </button>
          ))}
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
          <p className="font-sans text-cream-100/40 leading-relaxed text-sm">
            {currentRegion.description}
          </p>
        </div>

        {/* Tea Cards */}
        {filteredTeas.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredTeas.map((tea, i) => (
              <div
                key={tea.id}
                className="transition-all duration-700 ease-out"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <MenuCard tea={tea} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="font-sans text-cream-100/30 text-sm">
              No {activeCaffeine === 'non-caffeinated' ? 'non-caffeinated' : 'caffeinated'} teas in this region yet.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
