import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import logoWhite from '/assets/logo-icon-white.png'

const navLinks = [
  { label: 'Our Story', section: 'our-story' },
  { label: 'The Menu', section: 'tasting-menu' },
  { label: 'Events', section: 'events' },
  { label: 'Connect', section: 'community' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = useCallback((sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileOpen(false)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-espresso-900/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 group">
          <img
            src={logoWhite}
            alt="Cups & Cultures"
            className="w-9 h-9 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="flex flex-col text-left">
            <span className="font-serif text-lg md:text-xl font-semibold text-cream-50 tracking-tight group-hover:text-ochre-400 transition-colors duration-500 leading-tight">
              Cups & Cultures
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-cream-100/40 font-sans leading-tight">
              Tea. Culture. Connection.
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.section)}
              className="text-xs font-medium uppercase tracking-[0.18em] text-cream-100/60 hover:text-ochre-400 transition-colors duration-500 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-ochre-400 hover:after:w-full after:transition-all after:duration-500"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-cream-50 hover:text-ochre-400 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${
          isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-4 bg-espresso-900/98 backdrop-blur-md space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.section)}
              className="block w-full text-left py-3 text-sm font-medium uppercase tracking-[0.15em] text-cream-100/60 hover:text-ochre-400 hover:pl-2 transition-all duration-500 border-b border-cream-50/10"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
