import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollToSection } from '../../lib/smooth-scroll'
import Button from '../ui/Button'

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'Diensten', id: 'diensten' },
  { label: 'Waarom Innovah', id: 'waarom' },
  { label: 'Werkplaats', id: 'werkplaats' },
  { label: 'Over Ons', id: 'over-ons' },
  { label: 'Contact', id: 'contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (id: string) => {
    scrollToSection(id)
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handleNav('hero')} className="flex items-center gap-1 cursor-pointer">
            <div className="bg-dark px-3 py-1.5 rounded">
              <span className="text-xl font-extrabold tracking-tight text-white">
                INNOV<span className="text-gold">AH</span>
              </span>
            </div>
            <span className="text-[10px] font-medium tracking-[0.3em] text-muted uppercase ml-1 hidden sm:block">
              Automotive
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-sm font-medium text-white/80 hover:text-gold transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+31615345206" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              06-15345206
            </a>
            <Button size="sm" onClick={() => handleNav('contact')}>
              Neem Contact Op
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 cursor-pointer"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/98 border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="block w-full text-left text-lg font-medium text-white/80 hover:text-gold transition-colors py-2 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a href="tel:+31615345206" className="flex items-center gap-2 text-muted hover:text-white transition-colors mb-4">
                  <Phone className="w-4 h-4" />
                  06-15345206
                </a>
                <Button size="md" onClick={() => handleNav('contact')} className="w-full justify-center">
                  Neem Contact Op
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
