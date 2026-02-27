import { motion } from 'framer-motion'
import { Award, Handshake, Car } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="over-ons" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/car-garage.jpg"
                alt="Premium auto in sfeervolle garage"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Badge overlay */}
            <div className="absolute -bottom-6 -right-6 bg-gold text-black rounded-xl px-6 py-4 shadow-xl">
              <div className="text-2xl font-extrabold">5+</div>
              <div className="text-xs font-semibold">Jaar Ervaring</div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionHeading
              label="Over Ons"
              title="Innovah Automotive"
              light
            />

            <div className="mt-8 space-y-4 text-dark/70 leading-relaxed">
              <p>
                Innovah Automotive is een jong en ambitieus bedrijf gespecialiseerd in de import en export
                van personenvoertuigen. Met een sterke passie voor auto's en oog voor kwaliteit, helpen
                wij particulieren en bedrijven aan hun ideale voertuig.
              </p>
              <p>
                Dankzij ons uitgebreide netwerk in Europa kunnen wij voertuigen aanbieden tegen scherpe
                prijzen. Elk voertuig wordt door ons team uitgebreid gecontroleerd en voorzien van alle
                benodigde documentatie voor registratie in Nederland.
              </p>
              <p>
                Naast onze handelsactiviteiten beschikken wij over een volledig uitgeruste werkplaats waar
                ons team van ervaren monteurs alle soorten reparaties en onderhoudsbeurten uitvoert.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Award, label: 'Kwaliteit' },
                { icon: Handshake, label: 'Betrouwbaar' },
                { icon: Car, label: 'Passie' },
              ].map((value) => (
                <div
                  key={value.label}
                  className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm"
                >
                  <value.icon className="w-5 h-5 text-gold-dark" />
                  <span className="text-sm font-semibold text-dark">{value.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
