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
    pairing: 'Mint tea–glazed almond pastilla, spearmint shortbread, green tea–infused honey drizzle on fig crisps',
    ceremony:
      'Poured from a silver teapot held high above the glass — the cascade aerates the tea and builds a light foam, a sign of a skilled host.',
    music: 'Gnawa percussion & Andalusian melodies — scan the teapot to listen',
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
    pairing: 'Chai-spiced shortbread, masala tea–infused pistachio bark, cardamom-tea caramels',
    ceremony:
      'Strained through a fine mesh in a dramatic, frothy pull from pot to cup. The kulhad (clay cup) adds a mineral earthiness to every sip.',
    music: 'Sitar ragas, Raga Yaman — scan the teapot to listen',
    color: 'from-terracotta-500/90 to-terracotta-800/90',
  },
  {
    course: 'Third Pour',
    title: 'Hojicha — "The Stillness"',
    origin: 'Kyoto, Japan',
    tea: 'Roasted Green Tea — warm, nutty, naturally low caffeine',
    description:
      'The energy shifts. The room softens. Hojicha arrives warm and toasty — roasted over charcoal, it is the evening tea of Japan. A cup of calm before the farewell.',
    temp: '90°C',
    time: '1–2 min',
    pairing: 'Hojicha–infused sesame brittle, roasted rice tea cookies, yuzu-tea curd tartlet',
    ceremony:
      'Roasted in porcelain pots over charcoal. The deep amber color and gentle aroma signal the quietest part of the evening.',
    music: 'Shakuhachi flute, ambient Zen — scan the teapot to listen',
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
    pairing: 'Gunpowder tea–infused dates with orange blossom cream, green tea dark chocolate truffles with sea salt',
    ceremony:
      'Brewed over a small charcoal brazier at the table. The tea is poured back and forth between two glasses to aerate and cool — a desert ceremony of patience.',
    music: 'Tinariwen, desert blues — scan the teapot to listen',
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
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-500 mb-4">Our First Event</p>
          <h2 className="font-serif text-espresso-900 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
            The Inauguration <span className="text-terracotta-500 italic">Tasting Menu</span>
          </h2>
          <p className="font-sans text-espresso-700/55 text-base leading-relaxed max-w-2xl mx-auto">
            This is what awaits you at our very first gathering — four pours drawn
            from the teas we offer, each paired with tea-infused treats and a
            curated playlist you can scan right from the teapot.
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

        {/* Ceremony */}
        <div className="flex gap-3 mb-5">
          <Flame size={16} className="text-terracotta-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs uppercase tracking-[0.15em] font-medium text-espresso-800 mb-1">
              The Ceremony
            </p>
            <p className="text-espresso-700/60 text-sm leading-relaxed">
              {course.ceremony}
            </p>
          </div>
        </div>

        {/* Music */}
        <div className="flex gap-3">
          <Music size={16} className="text-ochre-400 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs uppercase tracking-[0.15em] font-medium text-espresso-800 mb-1">
              Playlist
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
