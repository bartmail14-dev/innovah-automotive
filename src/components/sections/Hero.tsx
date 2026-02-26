import { motion } from 'framer-motion'
import { ArrowRight, Shield, Globe, Wrench } from 'lucide-react'
import Button from '../ui/Button'
import { scrollToSection } from '../../lib/smooth-scroll'

const stats = [
  { value: '500+', label: "Auto's verhandeld" },
  { value: '100%', label: 'RDW geregistreerd' },
  { value: '5+', label: 'Jaar ervaring' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-dark to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,195,32,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,195,32,0.05)_0%,_transparent_50%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-sm text-muted">Import &middot; Export &middot; Reparatie</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white"
          >
            Uw Betrouwbare Partner in{' '}
            <span className="text-gold">Auto Import</span> &{' '}
            <span className="text-gold">Export</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted max-w-xl leading-relaxed"
          >
            Innovah Automotive is gespecialiseerd in de import en export van personenvoertuigen.
            Scherpe prijzen, volledige RDW-registratie en professionele service.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button size="lg" onClick={() => scrollToSection('diensten')}>
              Bekijk Onze Diensten
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="lg" onClick={() => scrollToSection('contact')} arrow>
              Neem Contact Op
            </Button>
          </motion.div>

          {/* Trust icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-6 text-sm text-muted"
          >
            <span className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-gold" />
              Europese import & export
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-gold" />
              Kwaliteitsgarantie
            </span>
            <span className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-gold" />
              Eigen werkplaats
            </span>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x divide-white/10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-0"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:py-8">
              <div className="text-3xl sm:text-4xl font-extrabold text-gold">{stat.value}</div>
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
