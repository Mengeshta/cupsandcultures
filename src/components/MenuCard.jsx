import { useState } from 'react'
import { Music, BookOpen, Flame, Clock, Thermometer, ChevronDown, ArrowUpRight } from 'lucide-react'
import FlavorProfile from './FlavorProfile'
import TeaDetailModal from './TeaDetailModal'

export default function MenuCard({ tea }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <div
      className={`bg-cream-50 border rounded-sm overflow-hidden group transition-all duration-700 ease-out ${
        isExpanded
          ? 'border-ochre-400/30 shadow-xl shadow-espresso-900/8'
          : 'border-espresso-100/15 hover:border-espresso-200/30 hover:shadow-lg hover:shadow-espresso-900/5'
      }`}
    >
      {/* Header — minimal, typography-focused */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-ochre-400">
            {tea.origin}
          </p>
          {tea.caffeine && (
            <span className={`font-sans text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-sm ${
              tea.caffeine === 'caffeinated'
                ? 'bg-terracotta-500/10 text-terracotta-500'
                : 'bg-teal-500/10 text-teal-600'
            }`}>
              {tea.caffeine === 'caffeinated' ? 'Caffeine' : 'No Caffeine'}
            </span>
          )}
        </div>
        <h4 className="font-serif text-espresso-900 text-2xl md:text-3xl font-medium mb-1">
          {tea.name}
        </h4>
        <p className="text-espresso-600/50 text-sm italic">
          {tea.type}
        </p>
      </div>

      <div className="px-6 pb-2">
        <div className="w-full h-px bg-espresso-100/15 mb-4" />
      </div>

      <div className="px-6 pb-6">
        {/* Brew info */}
        <div className="flex items-center gap-6 mb-6 text-sm text-espresso-700/50">
          <span className="flex items-center gap-2">
            <Thermometer size={14} className="text-terracotta-500" />
            {tea.brewTemp}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14} className="text-terracotta-500" />
            {tea.steepTime}
          </span>
        </div>

        {/* Flavor Profile Radar */}
        <FlavorProfile profile={tea.flavorProfile} />

        {/* Expand / Collapse trigger */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 w-full flex items-center justify-center gap-2 py-3 border border-terracotta-500/20 rounded-sm text-terracotta-500 hover:bg-terracotta-500 hover:text-cream-50 transition-all duration-700 group/btn"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium">
            {isExpanded ? 'Close' : 'Cultural Pairings'}
          </span>
          <ChevronDown
            size={14}
            className={`transition-transform duration-500 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Expanded cultural pairings */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isExpanded ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-5">
            {/* Ceremony */}
            <div className="flex gap-3">
              <Flame size={16} className="text-terracotta-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-[0.15em] font-semibold text-espresso-800 mb-1">
                  The Ceremony
                </p>
                <p className="text-espresso-700/60 text-sm leading-relaxed">
                  {tea.culturalPairing.ceremony}
                </p>
              </div>
            </div>

            {/* Music */}
            <div className="flex gap-3">
              <Music size={16} className="text-ochre-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-[0.15em] font-semibold text-espresso-800 mb-1">
                  Listen To
                </p>
                <p className="text-espresso-700/60 text-sm leading-relaxed">
                  {tea.culturalPairing.music}
                </p>
              </div>
            </div>

            {/* Literature */}
            <div className="flex gap-3">
              <BookOpen size={16} className="text-teal-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-[0.15em] font-semibold text-espresso-800 mb-1">
                  Read
                </p>
                <p className="text-espresso-700/60 text-sm leading-relaxed italic">
                  {tea.culturalPairing.literature}
                </p>
              </div>
            </div>
          </div>

          {/* View Full Detail button */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-6 w-full flex items-center justify-center gap-2 py-3 border border-ochre-400/20 rounded-sm text-ochre-500 hover:bg-ochre-400 hover:text-espresso-900 transition-all duration-700"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium">
              View Full Detail
            </span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>

      {/* Tea Detail Modal */}
      {showModal && (
        <TeaDetailModal tea={tea} onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}
