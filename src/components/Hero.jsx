import { useInView } from '../hooks/useInView'
import logoIcon from '/assets/logo-icon-new.png'

export default function Hero() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden paper-texture"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-espresso-900 via-espresso-800 to-terracotta-900" />
      <div className="absolute inset-0 geometric-pattern opacity-10" />

      {/* Subtle grain overlay for paper texture feel */}
      <div className="absolute inset-0 grain-overlay" />

      {/* Ambient light shapes — slow & gentle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ochre-400/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-terracotta-500/6 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }} />
      </div>

      {/* Decorative mandala rings — slow spin */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-ochre-400/8 rounded-full animate-slow-spin pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px] border border-terracotta-500/6 rounded-full animate-slow-spin pointer-events-none" style={{ animationDirection: 'reverse' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Mandala logo — 1.2s reveal */}
        <div
          className={`${
            isInView ? 'animate-mandala-reveal' : 'opacity-0'
          }`}
        >
          <img
            src={logoIcon}
            alt="Cups & Cultures emblem"
            className="w-28 h-28 md:w-40 md:h-40 mx-auto mb-8 drop-shadow-2xl"
          />
        </div>

        {/* Slogan — the brand's anchor */}
        <h1
          className={`font-serif text-cream-50 text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-6 ${
            isInView ? 'animate-text-slide-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.6s' }}
        >
          Tea. <span className="text-ochre-400 italic">Culture.</span> Connection.
        </h1>

        {/* Thin divider */}
        <div
          className={`w-16 h-px bg-ochre-400/50 mx-auto mb-6 ${
            isInView ? 'animate-editorial-fade' : 'opacity-0'
          }`}
          style={{ animationDelay: '1.0s' }}
        />

        {/* Subheading */}
        <p
          className={`font-sans text-cream-100/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 ${
            isInView ? 'animate-editorial-fade' : 'opacity-0'
          }`}
          style={{ animationDelay: '1.1s' }}
        >
          We bring the world's most storied tea traditions to your cup —
          blending history, art, music, and the slow art of connection.
        </p>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
            isInView ? 'animate-editorial-fade' : 'opacity-0'
          }`}
          style={{ animationDelay: '1.5s' }}
        >
          <a
            href="#events"
            className="px-8 py-3.5 bg-terracotta-500 text-cream-50 font-sans font-medium uppercase tracking-[0.18em] text-xs rounded-sm hover:bg-terracotta-600 transition-all duration-700 hover:shadow-lg hover:shadow-terracotta-500/20"
          >
            Reserve Your Seat
          </a>
          <a
            href="#tasting-menu"
            className="px-8 py-3.5 border border-cream-50/20 text-cream-50/80 font-sans font-medium uppercase tracking-[0.18em] text-xs rounded-sm hover:border-ochre-400 hover:text-ochre-400 transition-all duration-700"
          >
            Explore the Menu
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 ${
          isInView ? 'animate-editorial-fade' : 'opacity-0'
        }`}
        style={{ animationDelay: '2.2s' }}
      >
        <span className="text-cream-50/40 text-xs uppercase tracking-[0.25em] font-sans">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cream-50/30 to-transparent" />
      </div>
    </section>
  )
}
