import { useState, useEffect, useCallback } from 'react'
import { useInView } from '../hooks/useInView'
import { X } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    title: 'Moroccan Tea Ceremony',
    category: 'Ritual',
    color: 'from-terracotta-500/80 to-espresso-900/90',
    span: 'md:col-span-2 md:row-span-2',
    description: 'Silver teapots pour from great heights — a symbol of hospitality across the Maghreb.',
    story: 'In Morocco, tea is not simply poured — it is performed. The host lifts the teapot high above ornate glasses, sending a thin stream of Gunpowder green with fresh spearmint cascading down. This ritual, repeated three times, carries a proverb: "The first glass is gentle as life, the second strong as love, the third bitter as death." Refusing a glass is an affront. Accepting one is entering a bond.',
  },
  {
    id: 2,
    title: 'Yunnan Tea Fields',
    category: 'Origin',
    color: 'from-teal-600/80 to-espresso-900/90',
    span: '',
    description: 'Ancient Pu-erh trees rooted in red earth.',
    story: 'In Yunnan province, tea trees over a thousand years old still produce leaves. Pu-erh tea is fermented and aged like fine wine — some cakes sell for more than their weight in gold. The Bulang, Hani, and Dai peoples who tend these ancient forests consider the trees sacred ancestors.',
  },
  {
    id: 3,
    title: 'Wabi-Sabi Ceramics',
    category: 'Art',
    color: 'from-ochre-400/80 to-espresso-900/90',
    span: '',
    description: 'Imperfection as beauty — the philosophy of Japanese tea ware.',
    story: 'Wabi-sabi, the Japanese philosophy of finding beauty in imperfection, is embodied in every hand-thrown chawan (tea bowl). The asymmetry, the rough glaze, the crack repaired with gold (kintsugi) — each flaw is a story. In tea ceremony, the host rotates the bowl so the most beautiful "imperfection" faces the guest.',
  },
  {
    id: 4,
    title: 'Darjeeling Sunrise',
    category: 'Origin',
    color: 'from-ochre-400/70 to-terracotta-700/90',
    span: '',
    description: 'First flush leaves unfurling in Himalayan mist.',
    story: 'At 2,000 meters in the Himalayan foothills, Darjeeling\'s first flush arrives each spring like a whisper. The leaves, barely unfurled, produce a tea so delicate it\'s called the "Champagne of Teas." Workers harvest by hand at dawn, when mountain mist still clings to the bushes, and the muscatel aroma fills the air.',
  },
  {
    id: 5,
    title: 'Mate Circle',
    category: 'Ritual',
    color: 'from-teal-700/80 to-espresso-900/90',
    span: 'md:col-span-2',
    description: 'One gourd, one bombilla, many hands — the Argentine ritual of equality.',
    story: 'In Argentina and Uruguay, mate is never drunk alone. A single gourd and bombilla (metal straw) is passed around a circle — always to the left, always refilled by the cebador (server). To say "gracias" means you\'re done. The ritual requires no words, only presence. Presidents, gauchos, and students share the same circle.',
  },
  {
    id: 6,
    title: 'Ikat Textiles',
    category: 'Art',
    color: 'from-terracotta-600/80 to-ochre-700/90',
    span: '',
    description: 'Woven heritage patterns that inspired our visual identity.',
    story: 'Ikat is a dyeing technique where patterns are created by tying and dyeing yarn before weaving. Found from Central Asia to Indonesia to West Africa, ikat patterns carry cultural DNA — each region\'s motifs tell stories of fertility, protection, and identity. The characteristic "bleed" at pattern edges gives ikat its organic warmth.',
  },
]

export default function CultureGallery() {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView({ threshold: 0.05 })
  const [lightboxItem, setLightboxItem] = useState(null)

  const closeLightbox = useCallback(() => setLightboxItem(null), [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
    }
    if (lightboxItem) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [lightboxItem, closeLightbox])

  return (
    <section id="gallery" className="relative bg-cream-50 overflow-hidden paper-texture">
      <div className="ikat-border w-full" />

      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-[1200ms] ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="heading-editorial text-terracotta-500 mb-4">Visual Mood Board</p>
          <h2 className="heading-display text-espresso-900 text-4xl md:text-5xl lg:text-6xl mb-6">
            The <span className="text-terracotta-500 italic">Color</span> of Culture
          </h2>
          <p className="text-espresso-700/60 text-lg leading-relaxed">
            A curated editorial gallery — blending product, place, and tradition.
            <br />
            <span className="text-espresso-600/40 text-sm italic">Click any piece to discover its story.</span>
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[220px]"
        >
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className={`relative rounded-sm overflow-hidden cursor-pointer group ${item.span} transition-all duration-700 ease-out ${
                gridInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />

              {/* Geometric texture overlay */}
              <div className="absolute inset-0 geometric-pattern opacity-10" />

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-cream-50/20 rounded-full group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />

              {/* Content overlay — slow reveal */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-espresso-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-800">
                <span className="text-ochre-400 text-xs uppercase tracking-[0.25em] mb-2">
                  {item.category}
                </span>
                <h3 className="font-serif text-cream-50 text-xl md:text-2xl font-medium mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-800">
                  {item.title}
                </h3>
                <p className="text-cream-100/50 text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-800 delay-100">
                  {item.description}
                </p>
              </div>

              {/* Always visible label */}
              <div className="absolute top-4 left-4">
                <span className="text-cream-50/60 text-xs uppercase tracking-[0.25em] font-medium">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ikat-border w-full" />

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={closeLightbox}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-espresso-900/85 backdrop-blur-sm animate-editorial-fade" />

          {/* Content */}
          <div
            className="relative max-w-3xl w-full bg-cream-50 rounded-sm overflow-hidden shadow-2xl animate-text-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Color header */}
            <div className={`relative h-48 md:h-56 bg-gradient-to-br ${lightboxItem.color}`}>
              <div className="absolute inset-0 geometric-pattern opacity-10" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 bg-gradient-to-t from-espresso-900/60 to-transparent">
                <span className="text-ochre-400 text-xs uppercase tracking-[0.25em] mb-2">
                  {lightboxItem.category}
                </span>
                <h3 className="font-serif text-cream-50 text-3xl md:text-4xl font-medium">
                  {lightboxItem.title}
                </h3>
              </div>

              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-espresso-900/30 text-cream-50/70 hover:text-cream-50 hover:bg-espresso-900/60 transition-all duration-500"
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>
            </div>

            {/* Story body */}
            <div className="p-8 md:p-10">
              <p className="text-espresso-700/70 text-base md:text-lg leading-relaxed mb-6">
                {lightboxItem.story}
              </p>
              <div className="w-16 h-px bg-ochre-400/40" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
