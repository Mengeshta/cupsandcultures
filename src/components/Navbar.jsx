import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logoDark from '/assets/logo-icon-dark.png'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Our Story', href: '#manifesto' },
  { label: 'The Menu', href: '#tasting-menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Events', href: '#events' },
  { label: 'Community', href: '#community' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-cream-50/85 backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src={logoDark}
            alt="Cups & Cultures"
            className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-500 group-hover:scale-105"
          />
          <span className="font-serif text-xl md:text-2xl font-semibold text-espresso-900 tracking-tight group-hover:text-terracotta-500 transition-colors duration-500">
            Cups & Cultures
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-[0.15em] text-espresso-800 hover:text-terracotta-500 transition-colors duration-500 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-ochre-400 hover:after:w-full after:transition-all after:duration-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-espresso-900 hover:text-terracotta-500 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${
          isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-4 bg-cream-50/98 backdrop-blur-md space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="block py-3 text-sm font-medium uppercase tracking-[0.15em] text-espresso-800 hover:text-terracotta-500 hover:pl-2 transition-all duration-500 border-b border-espresso-100/30"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
