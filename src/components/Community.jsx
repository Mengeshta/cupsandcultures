import { useInView } from '../hooks/useInView'
import { Users, Mic2, Palette, Globe, Heart, Sparkles } from 'lucide-react'

const experiences = [
  {
    icon: <Users size={28} />,
    title: 'The Circle',
    description:
      'Every event begins with a circle. No hierarchy, no head of the table \u2014 just people gathered around a shared cup. You might sit next to a painter, a teacher, a traveler. By the end of the night, you\'ll know their story.',
    accent: 'text-teal-500',
    border: 'border-teal-500/20 hover:border-teal-500/40',
  },
  {
    icon: <Globe size={28} />,
    title: 'Cultural Storytelling',
    description:
      'Each tea is introduced with a story \u2014 where it\'s grown, who harvests it, the centuries of ritual behind it. We bring in historians, cultural ambassadors, and community elders to share firsthand narratives you won\'t find in a textbook.',
    accent: 'text-terracotta-500',
    border: 'border-terracotta-500/20 hover:border-terracotta-500/40',
  },
  {
    icon: <Mic2 size={28} />,
    title: 'Live Music & Sound',
    description:
      'Music is the invisible bridge between cultures. At every gathering, live musicians perform pieces tied to the tea being served \u2014 Gnawa drums for Moroccan mint, shakuhachi flute for matcha, sitar ragas for masala chai.',
    accent: 'text-ochre-400',
    border: 'border-ochre-400/20 hover:border-ochre-400/40',
  },
  {
    icon: <Palette size={28} />,
    title: 'Art & Visual Culture',
    description:
      'The space is dressed with art \u2014 textiles, ceramics, calligraphy, and photography from the regions we feature. Local artists exhibit alongside the teas, creating a gallery you can walk through between pours.',
    accent: 'text-terracotta-500',
    border: 'border-terracotta-500/20 hover:border-terracotta-500/40',
  },
  {
    icon: <Heart size={28} />,
    title: 'Slow Hospitality',
    description:
      'There\'s no rush. No schedule on the wall. We pour slowly, speak intentionally, and let conversations breathe. In a world that moves too fast, Cups & Cultures is your permission to pause.',
    accent: 'text-teal-500',
    border: 'border-teal-500/20 hover:border-teal-500/40',
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Take Something Home',
    description:
      'Every guest leaves with a small parcel \u2014 a sample of the evening\'s teas, a hand-printed card with the stories shared, and a recipe to recreate the ritual at home. The experience doesn\'t end at the door.',
    accent: 'text-ochre-400',
    border: 'border-ochre-400/20 hover:border-ochre-400/40',
  },
]

const testimonialPreviews = [
  {
    quote: 'I came for the tea. I stayed for the people. I left with a piece of every culture in the room.',
    attribution: '— What we hope you\'ll say',
  },
]

export default function Community() {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView({ threshold: 0.05 })
  const [closingRef, closingInView] = useInView()

  return (
    <section id="community" className="relative bg-espresso-900 overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-5" />

      {/* Decorative circles */}
      <div className="absolute top-40 left-10 w-72 h-72 border border-ochre-400/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-32 right-16 w-56 h-56 border border-teal-500/5 rounded-full pointer-events-none" />

      <div className="relative section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-[1200ms] ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="heading-sans text-ochre-400 mb-4">The Experience</p>
          <h2 className="heading-display text-cream-50 text-4xl md:text-5xl lg:text-6xl mb-6">
            What Happens When{' '}
            <span className="text-ochre-400 italic">You Show Up</span>
          </h2>
          <p className="text-cream-100/50 text-lg leading-relaxed max-w-2xl mx-auto">
            A Cups & Cultures gathering is not a lecture or a tasting class. It is a living room
            that spans continents &mdash; where tea is the excuse and connection is the point.
          </p>
        </div>

        {/* Experience Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className={`bg-espresso-800/40 backdrop-blur-sm border ${exp.border} rounded-sm p-8 transition-all duration-700 ease-out hover:bg-espresso-800/60 group ${
                gridInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`${exp.accent} mb-5 group-hover:scale-110 transition-transform duration-500 inline-block`}>
                {exp.icon}
              </div>
              <h3 className="font-serif text-cream-50 text-xl md:text-2xl font-medium mb-3">
                {exp.title}
              </h3>
              <p className="text-cream-100/40 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* The evening flow */}
        <div
          ref={closingRef}
          className={`max-w-4xl mx-auto transition-all duration-[1200ms] ease-out ${
            closingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Timeline */}
          <div className="text-center mb-12">
            <p className="heading-sans text-ochre-400 mb-4">An Evening's Flow</p>
            <h3 className="heading-display text-cream-50 text-2xl md:text-3xl mb-8">
              From Stranger to <span className="text-ochre-400 italic">Friend</span>
            </h3>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-ochre-400/30 via-terracotta-500/30 to-teal-500/30" />

            {[
              { time: '7:00 PM', label: 'Doors Open', detail: 'Welcome tea & mingling. Meet the evening\'s hosts and fellow explorers.' },
              { time: '7:30 PM', label: 'First Pour — The Welcome', detail: 'Moroccan mint tea, the opening story, and the Gnawa drums begin.' },
              { time: '8:15 PM', label: 'Second Pour — The Conversation', detail: 'Masala chai is served. Tables mix. Stories are exchanged.' },
              { time: '8:50 PM', label: 'Art Walk', detail: 'A guided pause to explore the evening\'s art exhibition and textiles.' },
              { time: '9:10 PM', label: 'Third Pour — The Stillness', detail: 'Lights dim. Matcha ceremony in silence. Shakuhachi flute.' },
              { time: '9:40 PM', label: 'Final Pour — The Departure', detail: 'Saharan Tuareg tea brewed tableside. Closing words and parting gifts.' },
            ].map((step, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-6 md:gap-0 mb-10 last:mb-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-ochre-400 rounded-full mt-1.5 z-10" />

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="text-ochre-400 text-xs uppercase tracking-[0.15em] font-medium">
                    {step.time}
                  </span>
                  <h4 className="font-serif text-cream-50 text-lg md:text-xl font-medium mt-1 mb-2">
                    {step.label}
                  </h4>
                  <p className="text-cream-100/40 text-sm leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="text-center mt-20">
            <div className="w-16 h-px bg-ochre-400/40 mx-auto mb-8" />
            {testimonialPreviews.map((t, i) => (
              <div key={i}>
                <p className="font-serif text-cream-50/80 text-xl md:text-2xl italic leading-relaxed mb-4 max-w-2xl mx-auto">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-cream-100/30 text-sm">{t.attribution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
