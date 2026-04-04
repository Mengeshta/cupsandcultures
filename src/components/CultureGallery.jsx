import { useInView } from '../hooks/useInView'

const galleryItems = [
  {
    id: 1,
    title: 'Moroccan Tea Ceremony',
    category: 'Ritual',
    color: 'from-terracotta-500/80 to-espresso-900/90',
    span: 'md:col-span-2 md:row-span-2',
    description: 'Silver teapots pour from great heights — a symbol of hospitality across the Maghreb.',
  },
  {
    id: 2,
    title: 'Yunnan Tea Fields',
    category: 'Origin',
    color: 'from-teal-600/80 to-espresso-900/90',
    span: '',
    description: 'Ancient Pu-erh trees rooted in red earth.',
  },
  {
    id: 3,
    title: 'Wabi-Sabi Ceramics',
    category: 'Art',
    color: 'from-ochre-400/80 to-espresso-900/90',
    span: '',
    description: 'Imperfection as beauty — the philosophy of Japanese tea ware.',
  },
  {
    id: 4,
    title: 'Darjeeling Sunrise',
    category: 'Origin',
    color: 'from-ochre-400/70 to-terracotta-700/90',
    span: '',
    description: 'First flush leaves unfurling in Himalayan mist.',
  },
  {
    id: 5,
    title: 'Mate Circle',
    category: 'Ritual',
    color: 'from-teal-700/80 to-espresso-900/90',
    span: 'md:col-span-2',
    description: 'One gourd, one bombilla, many hands — the Argentine ritual of equality.',
  },
  {
    id: 6,
    title: 'Ikat Textiles',
    category: 'Art',
    color: 'from-terracotta-600/80 to-ochre-700/90',
    span: '',
    description: 'Woven heritage patterns that inspired our visual identity.',
  },
]

export default function CultureGallery() {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView({ threshold: 0.05 })

  return (
    <section id="gallery" className="relative bg-cream-50 overflow-hidden">
      <div className="ikat-border w-full" />

      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-[1200ms] ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="heading-sans text-terracotta-500 mb-4">Visual Mood Board</p>
          <h2 className="heading-display text-espresso-900 text-4xl md:text-5xl lg:text-6xl mb-6">
            The <span className="text-terracotta-500 italic">Color</span> of Culture
          </h2>
          <p className="text-espresso-700/70 text-lg leading-relaxed">
            A curated editorial gallery — blending product, place, and tradition.
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
              className={`relative rounded-sm overflow-hidden cursor-pointer group ${item.span} transition-all duration-700 ease-out ${
                gridInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Background gradient (placeholder for real images) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />

              {/* Geometric texture overlay */}
              <div className="absolute inset-0 geometric-pattern opacity-10" />

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-cream-50/20 rounded-full group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-espresso-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700">
                <span className="text-ochre-400 text-xs uppercase tracking-[0.2em] mb-2">
                  {item.category}
                </span>
                <h3 className="font-serif text-cream-50 text-xl md:text-2xl font-medium mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  {item.title}
                </h3>
                <p className="text-cream-100/60 text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                  {item.description}
                </p>
              </div>

              {/* Always visible label */}
              <div className="absolute top-4 left-4">
                <span className="text-cream-50/70 text-xs uppercase tracking-[0.2em] font-medium">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ikat-border w-full" />
    </section>
  )
}
