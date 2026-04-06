import { useInView } from '../hooks/useInView'

const stats = [
  {
    number: '5,000+',
    label: 'Years of Ceremony',
    detail: 'Tea has been shared across civilizations since ancient China, long before borders existed.',
    accent: 'text-terracotta-500',
    line: 'bg-terracotta-500',
  },
  {
    number: '3B',
    label: 'Cups Every Day',
    detail: 'Three billion cups consumed daily — tea is the most shared beverage on earth after water.',
    accent: 'text-ochre-400',
    line: 'bg-ochre-400',
  },
  {
    number: '60+',
    label: 'Countries Grow Tea',
    detail: 'From Kenya\'s highlands to Japan\'s misty valleys, tea grows on every inhabited continent.',
    accent: 'text-teal-600',
    line: 'bg-teal-600',
  },
]

const traditions = [
  { region: 'Morocco', ritual: 'Three glasses poured from height — life, love, death.' },
  { region: 'Japan', ritual: 'Chanoyu — every movement is a meditation.' },
  { region: 'India', ritual: 'Chai simmered in clay pots on every street corner.' },
  { region: 'Argentina', ritual: 'One gourd, one circle — mate is never drunk alone.' },
  { region: 'Senegal', ritual: 'Attaaya — three rounds for mother, father, and self.' },
  { region: 'China', ritual: 'Gongfu — small pots, many steeps, infinite patience.' },
]

export default function WhyTea() {
  const [headerRef, headerInView] = useInView()
  const [statsRef, statsInView] = useInView({ threshold: 0.1 })
  const [tradRef, tradInView] = useInView({ threshold: 0.1 })

  return (
    <section className="relative bg-espresso-900 overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-5" />

      {/* Subtle ambient shapes */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-ochre-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-terracotta-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative section-padding max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-[1200ms] ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-ochre-400 mb-4">
            Why Tea
          </p>
          <h2 className="font-serif text-cream-50 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
            The World's Most <span className="text-ochre-400 italic">Shared</span> Ritual
          </h2>
          <p className="font-sans text-cream-100/40 text-base leading-relaxed">
            Before coffee shops, before cocktail bars, before social media — there was tea.
            A leaf, hot water, and the person sitting across from you. That's all it ever took.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid md:grid-cols-3 gap-12 md:gap-16 mb-24"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-[1000ms] ease-out ${
                statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className={`font-serif text-5xl md:text-6xl lg:text-7xl font-light ${stat.accent} leading-none`}>
                {stat.number}
              </span>
              <div className={`w-8 h-px ${stat.line} mx-auto mt-4 mb-3 opacity-40`} />
              <h3 className="font-sans text-cream-50 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                {stat.label}
              </h3>
              <p className="font-sans text-cream-100/35 text-sm leading-relaxed max-w-xs mx-auto">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Traditions grid */}
        <div
          ref={tradRef}
          className={`transition-all duration-[1200ms] ease-out ${
            tradInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-500/60 mb-3">
              One Leaf, Many Ceremonies
            </p>
            <h3 className="font-serif text-cream-50 text-2xl md:text-3xl font-medium italic">
              Every culture found its own way to share it.
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {traditions.map((t, i) => (
              <div
                key={t.region}
                className={`border border-cream-50/8 rounded-sm px-6 py-5 hover:border-ochre-400/20 transition-all duration-700 ${
                  tradInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-ochre-400/70 mb-2">
                  {t.region}
                </p>
                <p className="font-sans text-cream-100/40 text-sm leading-relaxed italic">
                  {t.ritual}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing line */}
        <div className="text-center mt-20">
          <div className="w-12 h-px bg-ochre-400/20 mx-auto mb-6" />
          <p className="font-serif text-cream-50/40 text-base md:text-lg italic max-w-md mx-auto">
            We didn't invent tea. We just remembered why it matters.
          </p>
        </div>
      </div>
    </section>
  )
}
