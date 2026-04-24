import { useState } from 'react'
import { ChevronDown, Info } from 'lucide-react'

const dimensions = [
  {
    label: 'Earth',
    color: '#3D2B1F',
    description: 'Grounding mineral tones — wet stone, forest floor, toasted grain, roasted nuts.',
  },
  {
    label: 'Spice',
    color: '#A0522D',
    description: 'Warming aromatics — cardamom, cinnamon, ginger, clove, black pepper.',
  },
  {
    label: 'Floral',
    color: '#DAA520',
    description: 'Perfumed blossom notes — rose, jasmine, orange blossom, chamomile, lavender.',
  },
  {
    label: 'Sweet',
    color: '#35817b',
    description: 'Natural sweetness without sugar — honey, malt, caramel, vanilla, stone fruit.',
  },
  {
    label: 'Bitter',
    color: '#6f3720',
    description: 'Astringent and tannic complexity — dark cacao, oak, citrus pith, leafy greens.',
  },
  {
    label: 'Body',
    color: '#9a6d4e',
    description: 'Mouthfeel and weight — from light and watery to rich and coating on the palate.',
  },
]

export default function FlavorGlossary() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="max-w-3xl mx-auto mb-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-cream-50/15 hover:border-ochre-400/40 rounded-sm text-cream-50/50 hover:text-ochre-400 transition-all duration-500 group"
      >
        <Info size={13} />
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium">
          {isOpen ? 'Hide' : 'About'} the Flavor Chart
        </span>
        <ChevronDown
          size={13}
          className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid md:grid-cols-2 gap-3 p-5 bg-espresso-900/40 border border-cream-50/10 rounded-sm">
          {dimensions.map((dim) => (
            <div key={dim.label} className="flex gap-3">
              <span
                className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                style={{ backgroundColor: dim.color }}
              />
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-ochre-400 mb-1">
                  {dim.label}
                </p>
                <p className="font-sans text-cream-100/50 text-xs leading-relaxed">
                  {dim.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
