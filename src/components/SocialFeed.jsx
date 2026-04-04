import { useInView } from '../hooks/useInView'
import { Instagram } from 'lucide-react'

const posts = [
  { id: 1, color: 'from-terracotta-500 to-terracotta-700', caption: 'The art of pouring — Moroccan style.' },
  { id: 2, color: 'from-ochre-400 to-ochre-600', caption: 'First flush Darjeeling, golden in the cup.' },
  { id: 3, color: 'from-teal-500 to-teal-700', caption: 'Matcha meditation mornings.' },
  { id: 4, color: 'from-espresso-700 to-espresso-900', caption: 'Aged Pu-erh — patience in a pot.' },
  { id: 5, color: 'from-terracotta-600 to-ochre-700', caption: 'Heritage ikat patterns meet modern design.' },
  { id: 6, color: 'from-teal-600 to-espresso-800', caption: 'The mate circle — one gourd, many hands.' },
  { id: 7, color: 'from-ochre-500 to-terracotta-600', caption: 'Spice market textures, chai inspiration.' },
  { id: 8, color: 'from-espresso-600 to-teal-800', caption: 'Wabi-sabi ceramics for the modern table.' },
  { id: 9, color: 'from-terracotta-400 to-ochre-500', caption: 'Coming soon: The Inauguration.' },
]

export default function SocialFeed() {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView({ threshold: 0.05 })

  return (
    <section className="relative bg-cream-50 overflow-hidden paper-texture">
      <div className="ikat-border w-full" />

      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-[1200ms] ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="heading-editorial text-terracotta-500 mb-4 flex items-center justify-center gap-2">
            <Instagram size={16} />
            Follow the Journey
          </p>
          <h2 className="heading-display text-espresso-900 text-4xl md:text-5xl lg:text-6xl mb-6">
            @cups<span className="text-terracotta-500 italic">and</span>cultures.co
          </h2>
          <p className="text-espresso-700/70 text-lg leading-relaxed">
            Our visual diary — where every post tells a story of tea, place, and people.
          </p>
        </div>

        {/* 9-Post Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto"
        >
          {posts.map((post, i) => (
            <div
              key={post.id}
              className={`relative aspect-square rounded-sm overflow-hidden cursor-pointer group transition-all duration-700 ease-out ${
                gridInView
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Gradient placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${post.color}`} />
              <div className="absolute inset-0 geometric-pattern opacity-10" />

              {/* Post number */}
              <div className="absolute top-3 left-3">
                <span className="text-cream-50/30 font-serif text-3xl md:text-4xl font-light">
                  {post.id}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-espresso-900/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-4">
                <p className="text-cream-50 text-xs md:text-sm text-center leading-relaxed translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/cupsandculture.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-espresso-900/20 text-espresso-900 font-medium uppercase tracking-[0.15em] text-sm rounded-sm hover:border-terracotta-500 hover:text-terracotta-500 transition-all duration-500"
          >
            <Instagram size={16} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
