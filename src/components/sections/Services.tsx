import { motion } from 'framer-motion'
import { Download, Upload, Wrench, ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const services = [
  {
    icon: Download,
    title: 'Auto Import',
    description:
      'Wij importeren personenvoertuigen uit heel Europa tegen scherpe prijzen. Inclusief volledige RDW-registratie, BPM-afhandeling en APK-keuring.',
    features: ['Europese import', 'BPM-afhandeling', 'RDW-registratie', 'APK-keuring'],
  },
  {
    icon: Upload,
    title: 'Auto Export',
    description:
      'Heeft u een voertuig dat u wilt exporteren? Wij verzorgen het volledige exportproces, van uitschrijving tot transport naar de bestemming.',
    features: ['Uitschrijving RDW', 'Transportregeling', 'Exportdocumentatie', 'Europese bestemmingen'],
  },
  {
    icon: Wrench,
    title: 'Reparatie & Onderhoud',
    description:
      'Onze professionele werkplaats verzorgt alle reparaties en onderhoudsbeurten. Van kleine servicebeurten tot uitgebreide technische reparaties.',
    features: ['APK-keuringen', 'Groot onderhoud', 'Diagnose & reparatie', 'Schadeherstel'],
  },
]

export default function Services() {
  return (
    <section id="diensten" className="py-24 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Wat wij doen"
          title="Onze Diensten"
          description="Van import tot reparatie — Innovah Automotive biedt een compleet pakket aan diensten voor uw voertuig."
          center
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-surface-dark border border-white/5 rounded-2xl p-8 hover:border-gold/30 transition-all duration-300"
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-7 h-7 text-gold" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  const el = document.getElementById('contact')
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold-hover transition-colors cursor-pointer"
              >
                Meer informatie
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
