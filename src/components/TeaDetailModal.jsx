import { useEffect } from 'react'
import { X, Thermometer, Clock, Flame, Music, BookOpen, MapPin } from 'lucide-react'
import FlavorProfile from './FlavorProfile'

const regionColors = {
  'Morocco': 'from-terracotta-500 to-terracotta-700',
  'Niger / Mali': 'from-ochre-500 to-ochre-700',
  'Ethiopia': 'from-amber-700 to-amber-900',
  'Kenya': 'from-teal-600 to-teal-800',
  'Rwanda': 'from-rose-600 to-rose-800',
  'Senegal': 'from-ochre-500 to-ochre-700',
  'Ghana': 'from-terracotta-600 to-terracotta-800',
  'Nigeria': 'from-emerald-700 to-emerald-900',
  'Cameroon': 'from-teal-700 to-teal-900',
  'DRC': 'from-amber-700 to-amber-900',
  'Gabon': 'from-emerald-600 to-emerald-800',
  'South Africa': 'from-terracotta-500 to-terracotta-700',
  'Zimbabwe': 'from-ochre-600 to-ochre-800',
  'Botswana': 'from-amber-600 to-amber-800',
  'Kyoto, Japan': 'from-teal-600 to-teal-800',
  'Alishan, Taiwan': 'from-emerald-600 to-emerald-800',
  'Misiones, Argentina': 'from-emerald-700 to-emerald-900',
  'Rio Grande do Sul, Brazil': 'from-teal-700 to-teal-900',
  'Argentina': 'from-ochre-500 to-ochre-700',
  'India': 'from-terracotta-500 to-terracotta-700',
  'Darjeeling, India': 'from-amber-600 to-amber-800',
  'Kashmir, India': 'from-rose-600 to-rose-800',
}

const brewingSteps = {
  'caffeinated': [
    'Start with fresh, filtered water',
    'Heat water to the recommended temperature',
    'Warm your vessel by rinsing with hot water',
    'Add tea leaves — about 2g per 6oz cup',
    'Pour water and steep for the recommended time',
    'Strain and serve immediately',
  ],
  'non-caffeinated': [
    'Start with fresh, filtered water',
    'Bring water to the recommended temperature',
    'Warm your cup or pot with a quick rinse',
    'Add a generous portion of herbs — about 2–3g per 6oz cup',
    'Pour water and let steep — herbal teas benefit from longer steeping',
    'Strain, sweeten if desired, and enjoy',
  ],
}

export default function TeaDetailModal({ tea, onClose }) {
  const colorGradient = regionColors[tea.origin] || 'from-espresso-700 to-espresso-900'

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const flavorEntries = Object.entries(tea.flavorProfile).sort((a, b) => b[1] - a[1])
  const dominantFlavors = flavorEntries.slice(0, 2).map(([key]) => key)
  const steps = brewingSteps[tea.caffeine] || brewingSteps['caffeinated']

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-espresso-900/80 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div
        className="relative bg-cream-50 rounded-sm shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header band */}
        <div className={`relative bg-gradient-to-br ${colorGradient} px-8 py-10 md:px-12 md:py-14`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-cream-50/10 hover:bg-cream-50/20 text-cream-50 transition-all duration-300"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-2 text-cream-50/60 text-xs uppercase tracking-[0.2em] mb-3">
            <MapPin size={12} />
            <span>{tea.origin}</span>
          </div>

          <h2 className="font-serif text-cream-50 text-3xl md:text-4xl font-medium leading-tight mb-2">
            {tea.name}
          </h2>
          <p className="text-cream-50/50 text-sm italic">{tea.type}</p>

          <div className="flex items-center gap-6 mt-6 text-cream-50/60 text-sm">
            <span className="flex items-center gap-2">
              <Thermometer size={14} />
              {tea.brewTemp}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              {tea.steepTime}
            </span>
            <span className={`px-2 py-0.5 rounded-sm text-[10px] uppercase tracking-[0.15em] ${
              tea.caffeine === 'caffeinated'
                ? 'bg-cream-50/15 text-cream-50/70'
                : 'bg-cream-50/15 text-cream-50/70'
            }`}>
              {tea.caffeine === 'caffeinated' ? 'Caffeinated' : 'Caffeine-Free'}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-10 md:px-12 space-y-10">

          {/* Flavor Profile — Large */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-500 mb-6">
              Flavor Profile
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full max-w-[260px]">
                <FlavorProfile profile={tea.flavorProfile} />
              </div>
              <div className="flex-1 space-y-3">
                <p className="text-espresso-700/60 text-sm leading-relaxed">
                  Dominant notes of <strong className="text-espresso-800">{dominantFlavors[0]}</strong> and <strong className="text-espresso-800">{dominantFlavors[1]}</strong>.
                </p>
                {flavorEntries.map(([key, value]) => (
                  <div key={key} className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-espresso-700/50 w-24 shrink-0 text-right">
                      {key}
                    </span>
                    <div className="flex-1 h-1.5 bg-espresso-100/15 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-terracotta-500/70 rounded-full transition-all duration-700"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-espresso-700/40 w-6">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-espresso-100/15" />

          {/* The Ceremony */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Flame size={18} className="text-terracotta-500" />
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-500">
                The Ceremony
              </h3>
            </div>
            <p className="text-espresso-700/65 text-base leading-relaxed pl-8">
              {tea.culturalPairing.ceremony}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-espresso-100/15" />

          {/* Brewing Guide */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-500 mb-6">
              How to Brew
            </h3>
            <div className="grid gap-4">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="font-serif text-2xl font-light text-terracotta-500/30 leading-none mt-0.5 w-8 text-right shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-espresso-700/60 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pl-12 flex items-center gap-6 text-sm text-espresso-700/50 bg-espresso-50/50 rounded-sm px-6 py-4">
              <span className="flex items-center gap-2">
                <Thermometer size={14} className="text-terracotta-500" />
                <strong className="text-espresso-800">{tea.brewTemp}</strong>
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-terracotta-500" />
                <strong className="text-espresso-800">{tea.steepTime}</strong>
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-espresso-100/15" />

          {/* Cultural Pairings */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Music */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Music size={16} className="text-ochre-400" />
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-ochre-500">
                  Listen To
                </h3>
              </div>
              <p className="text-espresso-700/60 text-sm leading-relaxed pl-7">
                {tea.culturalPairing.music}
              </p>
            </div>

            {/* Literature */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <BookOpen size={16} className="text-teal-600" />
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
                  Read
                </h3>
              </div>
              <p className="text-espresso-700/60 text-sm leading-relaxed italic pl-7">
                {tea.culturalPairing.literature}
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-4 pb-2">
            <div className="w-12 h-px bg-ochre-400/40 mx-auto mb-6" />
            <p className="font-serif text-espresso-700/40 text-sm italic mb-4">
              Experience this tea at our next event
            </p>
            <a
              href="#events"
              onClick={onClose}
              className="inline-block px-8 py-3 bg-terracotta-500 text-cream-50 font-sans font-medium uppercase tracking-[0.18em] text-xs rounded-sm hover:bg-terracotta-600 transition-all duration-500"
            >
              Reserve Your Seat
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
