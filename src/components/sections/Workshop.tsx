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
    <section id="werkplaats" className="relative py-24 bg-black overflow-hidden">
      {/* Background accent image */}
      <div className="absolute inset-0">
        <img
          src="/images/detail-droplets.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src="/images/workshop-lift.jpg"
              alt="Professionele werkplaats met auto op brug"
              className="w-full aspect-[4/3] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
            {/* Badge overlay */}
            <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3">
              <div className="text-gold font-extrabold text-lg">Volledig uitgerust</div>
              <div className="text-white/60 text-xs">Moderne apparatuur voor alle merken</div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <SectionHeading
              label="Werkplaats"
              title="Professionele Werkplaats"
            />
            <p className="mt-4 text-muted leading-relaxed">
              Onze werkplaats is uitgerust met de nieuwste apparatuur voor alle typen
              personenvoertuigen. Van routine onderhoud tot complexe reparaties.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {workshopServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group flex items-start gap-3 bg-white/[0.03] border border-white/5 rounded-xl p-4 hover:bg-white/[0.06] hover:border-gold/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <service.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-0.5">{service.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
