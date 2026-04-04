import { useInView } from '../hooks/useInView'
import { Flame, Music, BookOpen, Thermometer, Clock } from 'lucide-react'

const courses = [
  {
    course: 'First Pour',
    title: 'Moroccan Mint — "The Welcome"',
    origin: 'Morocco',
    tea: 'Gunpowder Green with Fresh Spearmint',
    description:
      'Your evening begins the way it has for centuries across the Maghreb — with a glass of mint tea poured from height. Gentle as life, this first glass opens the senses and invites you in.',
    temp: '80°C',
    time: '3 min',
    pairing: 'Almond-honey pastilla bites, dried fig & walnut crisps',
    ritual:
      'Poured from a silver teapot held high above the glass — the cascade aerates the tea and builds a light foam, a sign of a skilled host.',
    music: 'Live Gnawa percussion — hypnotic, grounding rhythms',
    color: 'from-teal-600/90 to-teal-800/90',
  },
  {
    course: 'Second Pour',
    title: 'Masala Chai — "The Conversation"',
    origin: 'India',
    tea: 'Assam CTC with Cardamom, Ginger, Cinnamon & Clove',
    description:
      'As the room warms and connections form, the second course arrives — bold, spiced, and deeply aromatic. Served in small clay kulhads that you crack open yourself.',
    temp: '100°C',
    time: 'Simmered 6 min',
    pairing: 'Cardamom shortbread, saffron-pistachio bark, spiced cashews',
    ritual:
      'Strained through a fine mesh in a dramatic, frothy pull from pot to cup. The kulhad (clay cup) adds a mineral earthiness to every sip.',
    music: 'Sitar raga — Raga Yaman, the evening melody of homecoming',
    color: 'from-terracotta-500/90 to-terracotta-800/90',
  },
  {
    course: 'Third Pour',
    title: 'Ceremonial Matcha — "The Stillness"',
    origin: 'Japan',
    tea: 'Uji Ceremonial Grade Matcha',
    description:
      'The energy shifts. Lights dim. A single bowl is whisked before you in silence. This is the contemplative heart of the evening — a moment to be fully present.',
    temp: '70°C',
    time: 'Whisk 20 sec',
    pairing: 'Mochi with black sesame, yuzu curd tartlet',
    ritual:
      'Prepared using chasen (bamboo whisk) and chawan (tea bowl). Each guest receives their bowl with a bow — an act of mutual respect.',
    music: 'Shakuhachi bamboo flute — a single, breathlike melody',
    color: 'from-espresso-700/90 to-espresso-900/90',
  },
  {
    course: 'Final Pour',
    title: 'Saharan Tuareg — "The Departure"',
    origin: 'Niger / Mali',
    tea: 'Strong Gunpowder Green with Heavy Sugar',
    description:
      'The final glass. In Tuareg tradition, the third pour is "bitter as death" — a reminder that all beautiful things end, making them more precious. Tonight, we sweeten the farewell.',
    temp: '85°C',
    time: '5 min',
    pairing: 'Dates stuffed with orange blossom cream, dark chocolate with sea salt',
    ritual:
      'Brewed over a small charcoal brazier at the table. The tea is poured back and forth between two glasses to aerate and cool — a desert ritual of patience.',
    music: 'Tinariwen — desert blues guitar fading into the night',
    color: 'from-ochre-500/90 to-ochre-800/90',
  },
]

export default function InaugurationMenu() {
  const [headerRef, headerInView] = useInView()

  return (
    <section id="event-menu" className="relative bg-cream-50 overflow-hidden paper-texture">
      <div className="ikat-border w-full" />

      <div className="section-padding max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-[1200ms] ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="heading-editorial text-terracotta-500 mb-4">The Inauguration</p>
          <h2 className="heading-display text-espresso-900 text-4xl md:text-5xl lg:text-6xl mb-6">
            A Curated <span className="text-terracotta-500 italic">Tasting Menu</span>
          </h2>
          <p className="text-espresso-700/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Four pours. Four cultures. One evening. Each course is a complete sensory
            experience — tea, food, music, and story, moving from welcome to farewell.
          </p>
        </div>

        {/* Course Cards */}
        <div className="space-y-10">
          {courses.map((course, i) => (
            <CourseCard key={i} course={course} index={i} />
          ))}
        </div>

        {/* Closing note */}
        <div className="text-center mt-20 max-w-2xl mx-auto">
          <div className="w-16 h-px bg-ochre-400 mx-auto mb-8" />
          <p className="font-serif text-espresso-900 text-xl md:text-2xl italic leading-relaxed mb-4">
            "The first cup is for the stranger. The second, for the friend.
            The third, for the one who will return."
          </p>
          <p className="text-espresso-700/50 text-sm">— Maghreb proverb</p>
        </div>
      </div>

      <div className="ikat-border w-full" />
    </section>
  )
}

function CourseCard({ course, index }) {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-5 gap-0 rounded-sm overflow-hidden shadow-lg shadow-espresso-900/5 transition-all duration-[1000ms] ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Color band with course number */}
      <div
        className={`relative bg-gradient-to-br ${course.color} p-8 md:p-10 flex flex-col justify-between md:col-span-2 ${
          isEven ? '' : 'md:order-2'
        }`}
      >
        <div>
          <span className="text-cream-50/30 font-serif text-6xl md:text-7xl font-light leading-none">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="text-cream-50/60 text-xs uppercase tracking-[0.2em] mt-2 mb-4">
            {course.course} — {course.origin}
          </p>
          <h3 className="font-serif text-cream-50 text-2xl md:text-3xl font-medium leading-snug">
            {course.title}
          </h3>
        </div>

        <div className="mt-8 space-y-3">
          <div className="flex items-center gap-2 text-cream-50/50 text-sm">
            <Thermometer size={14} />
            <span>{course.temp}</span>
            <span className="mx-2 text-cream-50/20">|</span>
            <Clock size={14} />
            <span>{course.time}</span>
          </div>
          <p className="text-cream-50/40 text-xs uppercase tracking-[0.1em]">
            {course.tea}
          </p>
        </div>
      </div>

      {/* Content side */}
      <div
        className={`bg-cream-50 border border-espresso-100/10 p-8 md:p-10 md:col-span-3 ${
          isEven ? '' : 'md:order-1'
        }`}
      >
        <p className="text-espresso-700/70 leading-relaxed mb-8">
          {course.description}
        </p>

        {/* Food Pairing */}
        <div className="mb-6 pb-6 border-b border-espresso-100/15">
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-espresso-800 mb-2">
            Paired With
          </p>
          <p className="text-espresso-700/60 text-sm leading-relaxed italic">
            {course.pairing}
          </p>
        </div>

        {/* Ritual */}
        <div className="flex gap-3 mb-5">
          <Flame size={16} className="text-terracotta-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs uppercase tracking-[0.15em] font-medium text-espresso-800 mb-1">
              The Ritual
            </p>
            <p className="text-espresso-700/60 text-sm leading-relaxed">
              {course.ritual}
            </p>
          </div>
        </div>

        {/* Music */}
        <div className="flex gap-3">
          <Music size={16} className="text-ochre-400 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs uppercase tracking-[0.15em] font-medium text-espresso-800 mb-1">
              Soundscape
            </p>
            <p className="text-espresso-700/60 text-sm leading-relaxed">
              {course.music}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
