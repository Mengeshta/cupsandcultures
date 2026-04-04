import { useInView } from '../hooks/useInView'

export default function Hero() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-espresso-900 via-espresso-800 to-terracotta-900" />
      <div className="absolute inset-0 geometric-pattern opacity-20" />

      {/* Animated steam / ambient shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ochre-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-terracotta-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-teal-500/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Decorative circle — nods to the logo's mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-ochre-400/10 rounded-full animate-slow-spin pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px] border border-terracotta-500/10 rounded-full animate-slow-spin pointer-events-none" style={{ animationDirection: 'reverse' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Logo */}
        <div
          className={`transition-all duration-[1600ms] ease-out ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <img
            src="/assets/logo-icon-dark.png"
            alt="Cups & Cultures emblem"
            className="w-32 h-32 md:w-44 md:h-44 mx-auto mb-8 drop-shadow-2xl"
          />
        </div>

        {/* Tagline */}
        <div
          className={`transition-all duration-[1200ms] ease-out delay-150 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="heading-sans text-ochre-400 mb-6 md:mb-8">
            A Journey in Every Cup
          </p>
        </div>

        {/* Main heading */}
        <h1
          className={`heading-display text-cream-50 text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8 transition-all duration-[1400ms] ease-out delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          Tea.{' '}
          <span className="text-ochre-400 italic">Culture.</span>
          <br />
          Connection.
        </h1>

        {/* Subheading */}
        <p
          className={`font-sans text-cream-100/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 transition-all duration-[1400ms] ease-out delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          We bring the world's most storied tea traditions to your cup — blending
          history, art, music, and the slow art of connection.
        </p>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-[1400ms] ease-out delay-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#tasting-menu"
            className="px-8 py-4 bg-terracotta-500 text-cream-50 font-medium uppercase tracking-[0.15em] text-sm rounded-sm hover:bg-terracotta-600 transition-all duration-500 hover:shadow-lg hover:shadow-terracotta-500/20"
          >
            Explore the Menu
          </a>
          <a
            href="#events"
            className="px-8 py-4 border border-cream-50/30 text-cream-50 font-medium uppercase tracking-[0.15em] text-sm rounded-sm hover:border-ochre-400 hover:text-ochre-400 transition-all duration-500"
          >
            Upcoming Events
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-cream-50/60 text-xs uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cream-50/40 to-transparent" />
      </div>
    </section>
  )
}
