import { Phone, Mail, MapPin } from 'lucide-react'
import { scrollToSection } from '../../lib/smooth-scroll'

const quickLinks = [
  { label: 'Diensten', id: 'diensten' },
  { label: 'Werkplaats', id: 'werkplaats' },
  { label: 'Over Ons', id: 'over-ons' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <div className="bg-dark px-3 py-1.5 rounded">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  INNOV<span className="text-gold">AH</span>
                </span>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Uw betrouwbare partner in import, export en reparatie van personenvoertuigen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Snel Naar</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted hover:text-gold transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+31615345206" className="flex items-center gap-2 text-sm text-muted hover:text-gold transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  06-15345206
                </a>
              </li>
              <li>
                <a href="mailto:administratie@innovahautomotive.com" className="flex items-center gap-2 text-sm text-muted hover:text-gold transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  administratie@innovahautomotive.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-muted">
                  <MapPin className="w-4 h-4 shrink-0" />
                  Nederland
                </span>
              </li>
            </ul>
          </div>

          {/* Openingstijden */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Openingstijden</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex justify-between">
                <span>Ma - Vr</span>
                <span className="text-white">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Zaterdag</span>
                <span className="text-white">Op afspraak</span>
              </li>
              <li className="flex justify-between">
                <span>Zondag</span>
                <span className="text-white">Gesloten</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Innovah Automotive. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6 text-xs text-muted">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Cookies</a>
            <a href="#" className="hover:text-gold transition-colors">Algemene Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
