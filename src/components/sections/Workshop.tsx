import { motion } from 'framer-motion'
import { Gauge, Settings, Search, ShieldCheck, Droplets, Disc } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const workshopServices = [
  {
    icon: ShieldCheck,
    title: 'APK-Keuring',
    description: 'Officieel erkend APK-keurstation. Snel en betrouwbaar.',
  },
  {
    icon: Settings,
    title: 'Groot Onderhoud',
    description: 'Distributieriem, koppeling, remmen — wij verzorgen alle grote beurten.',
  },
  {
    icon: Search,
    title: 'Diagnose',
    description: 'Geavanceerde uitleesapparatuur voor het opsporen van storingen.',
  },
  {
    icon: Gauge,
    title: 'Motormanagement',
    description: 'Specialistische kennis van motormanagement en elektronica.',
  },
  {
    icon: Droplets,
    title: 'Airco Service',
    description: 'Airco bijvullen, reinigen en controleren op lekkages.',
  },
  {
    icon: Disc,
    title: 'Banden & Wielen',
    description: 'Banden wisselen, uitlijnen en balanceren.',
  },
]

export default function Workshop() {
  return (
    <section id="werkplaats" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Werkplaats"
          title="Professionele Werkplaats"
          description="Onze werkplaats is uitgerust met de nieuwste apparatuur voor alle typen personenvoertuigen. Van routine onderhoud tot complexe reparaties."
          center
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshopServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-white/[0.03] border border-white/5 rounded-xl p-6 hover:bg-white/[0.06] hover:border-gold/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border border-gold/20 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-bold text-white">Afspraak maken voor de werkplaats?</h3>
            <p className="text-sm text-muted mt-1">Bel ons of stuur een bericht via het contactformulier.</p>
          </div>
          <a
            href="tel:+31615345206"
            className="inline-flex items-center gap-2 bg-gold text-black font-semibold px-6 py-3 rounded-lg hover:bg-gold-hover transition-colors shrink-0"
          >
            Bel 06-15345206
          </a>
        </motion.div>
      </div>
    </section>
  )
}
