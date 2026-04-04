import { useState } from 'react'
import { Music, BookOpen, Flame, Clock, Thermometer } from 'lucide-react'
import FlavorProfile from './FlavorProfile'

export default function MenuCard({ tea }) {
  const [showPairings, setShowPairings] = useState(false)

  return (
    <div className="bg-cream-50 border border-espresso-100/20 rounded-sm overflow-hidden group hover:shadow-xl hover:shadow-espresso-900/5 transition-all duration-700">
      {/* Header band */}
      <div className="bg-espresso-900 px-6 py-4 flex items-center justify-between">
        <div>
          <h4 className="font-serif text-cream-50 text-xl md:text-2xl font-medium">
            {tea.name}
          </h4>
          <p className="text-cream-100/50 text-xs uppercase tracking-[0.15em] mt-1">
            {tea.origin} · {tea.type}
          </p>
        </div>
      </div>

      <div className="p-6">
        {/* Brew info */}
        <div className="flex items-center gap-6 mb-6 text-sm text-espresso-700/60">
          <span className="flex items-center gap-1.5">
            <Thermometer size={14} className="text-terracotta-500" />
            {tea.brewTemp}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-terracotta-500" />
            {tea.steepTime}
          </span>
        </div>

        {/* Flavor Profile Radar */}
        <FlavorProfile profile={tea.flavorProfile} />

        {/* Cultural Pairings Toggle */}
        <button
          onClick={() => setShowPairings(!showPairings)}
          className="mt-6 w-full text-left px-4 py-3 border border-espresso-100/20 rounded-sm hover:border-terracotta-500/30 transition-all duration-500 flex items-center justify-between"
        >
          <span className="text-xs uppercase tracking-[0.15em] font-medium text-espresso-800">
            Cultural Pairings
          </span>
          <span
            className={`text-terracotta-500 transition-transform duration-500 ${
              showPairings ? 'rotate-180' : ''
            }`}
          >
            ▾
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            showPairings ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-4 text-sm">
            {/* Ritual */}
            <div className="flex gap-3">
              <Flame size={16} className="text-terracotta-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-espresso-900 mb-1">The Ritual</p>
                <p className="text-espresso-700/60 leading-relaxed">
                  {tea.culturalPairing.ritual}
                </p>
              </div>
            </div>

            {/* Music */}
            <div className="flex gap-3">
              <Music size={16} className="text-ochre-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-espresso-900 mb-1">Listen To</p>
                <p className="text-espresso-700/60 leading-relaxed">
                  {tea.culturalPairing.music}
                </p>
              </div>
            </div>

            {/* Literature */}
            <div className="flex gap-3">
              <BookOpen size={16} className="text-teal-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-espresso-900 mb-1">Read</p>
                <p className="text-espresso-700/60 leading-relaxed italic">
                  {tea.culturalPairing.literature}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
