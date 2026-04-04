import { Instagram, Mail, ArrowUp } from 'lucide-react'

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
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/logo-icon-white.png?t=20250404" alt="Cups & Cultures" className="w-12 h-12" />
              <h3 className="font-serif text-cream-50 text-2xl md:text-3xl font-semibold">
                Cups & Cultures
              </h3>
            </div>
            <p className="text-cream-100/40 text-sm leading-relaxed mb-6">
              Tea. Culture. Connection.
              <br />
              A journey in every cup.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/cupsandculture.co"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-cream-50/20 rounded-full flex items-center justify-center text-cream-50/50 hover:border-ochre-400 hover:text-ochre-400 transition-all duration-500"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:hello@cupsandcultures.com"
                className="w-10 h-10 border border-cream-50/20 rounded-full flex items-center justify-center text-cream-50/50 hover:border-ochre-400 hover:text-ochre-400 transition-all duration-500"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-cream-50/60 text-xs uppercase tracking-[0.2em] mb-6">
              Explore
            </h4>
            <div className="space-y-3">
              {['Our Story', 'The Menu', 'Gallery', 'Events', 'Community'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-cream-100/40 hover:text-ochre-400 transition-colors duration-500 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream-50/60 text-xs uppercase tracking-[0.2em] mb-6">
              Get in Touch
            </h4>
            <p className="text-cream-100/40 text-sm leading-relaxed mb-4">
              Interested in hosting a tea experience or collaborating?
            </p>
            <a
              href="mailto:hello@cupsandcultures.com"
              className="text-ochre-400 text-sm hover:text-ochre-300 transition-colors duration-500"
            >
              hello@cupsandcultures.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-8 border-t border-cream-50/10">
          <p className="text-cream-100/30 text-xs">
            © {new Date().getFullYear()} Cups & Cultures. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 border border-cream-50/20 rounded-full flex items-center justify-center text-cream-50/50 hover:border-ochre-400 hover:text-ochre-400 hover:-translate-y-1 transition-all duration-500"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
