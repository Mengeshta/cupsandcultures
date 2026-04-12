import { Instagram, Mail, ArrowUp } from 'lucide-react'
import logoIcon from '/assets/logo-icon-new.png'

const footerLinks = [
  { label: 'Our Story', section: 'our-story' },
  { label: 'The Menu', section: 'tasting-menu' },
  { label: 'Events', section: 'events' },
  { label: 'Connect', section: 'connect' },
]

const scrollTo = (sectionId) => {
  const el = document.getElementById(sectionId)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-espresso-900">
      <div className="ikat-border w-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={logoIcon} alt="Cups & Cultures" className="w-10 h-10" />
              <h3 className="font-serif text-cream-50 text-xl font-semibold tracking-tight">
                Cups & Cultures
              </h3>
            </div>
            <p className="font-sans text-cream-100/35 text-xs uppercase tracking-[0.2em] mb-5">
              Tea. Culture. Connection.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/cupsandcultures.co"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-cream-50/15 rounded-full flex items-center justify-center text-cream-50/40 hover:border-ochre-400 hover:text-ochre-400 transition-all duration-500"
              >
                <Instagram size={14} />
              </a>
              <a
                href="mailto:info@cupsandcultures.co"
                className="w-9 h-9 border border-cream-50/15 rounded-full flex items-center justify-center text-cream-50/40 hover:border-ochre-400 hover:text-ochre-400 transition-all duration-500"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-cream-50/50 text-xs uppercase tracking-[0.2em] mb-6">
              Explore
            </h4>
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.section)}
                  className="block font-sans text-cream-100/35 hover:text-ochre-400 transition-colors duration-500 text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-cream-50/50 text-xs uppercase tracking-[0.2em] mb-6">
              Get in Touch
            </h4>
            <p className="font-sans text-cream-100/35 text-sm leading-relaxed mb-4">
              Interested in hosting a tea experience or collaborating?
            </p>
            <a
              href="mailto:info@cupsandcultures.co"
              className="text-ochre-400 text-sm hover:text-ochre-300 transition-colors duration-500"
            >
              info@cupsandcultures.co
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-8 border-t border-cream-50/8">
          <p className="font-sans text-cream-100/25 text-xs">
            © {new Date().getFullYear()} Cups & Cultures. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 border border-cream-50/15 rounded-full flex items-center justify-center text-cream-50/40 hover:border-ochre-400 hover:text-ochre-400 hover:-translate-y-1 transition-all duration-500"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
