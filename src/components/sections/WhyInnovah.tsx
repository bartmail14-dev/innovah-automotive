import { motion } from 'framer-motion'
import { Check, Users, TrendingDown, FileCheck, Headphones } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { scrollToSection } from '../../lib/smooth-scroll'

const usps = [
  {
    icon: TrendingDown,
    title: 'Scherpe Importprijzen',
    description: 'Door ons uitgebreide Europese netwerk bieden wij voertuigen aan tegen zeer concurrerende prijzen.',
  },
  {
    icon: FileCheck,
    title: 'Volledige RDW-Registratie',
    description: 'Wij handelen de complete registratie af, inclusief BPM-berekening en kentekencard.',
  },
  {
    icon: Check,
    title: 'Kwaliteitsgarantie',
    description: 'Elk voertuig wordt uitgebreid geïnspecteerd en APK-gekeurd voordat het aan u wordt geleverd.',
  },
  {
    icon: Headphones,
    title: 'Persoonlijke Begeleiding',
    description: 'Eén vast aanspreekpunt dat u door het hele proces begeleidt, van selectie tot levering.',
  },
  {
    icon: Users,
    title: 'Transparant & Eerlijk',
    description: 'Geen verborgen kosten. U weet vooraf precies waar u aan toe bent, inclusief alle bijkomende kosten.',
  },
]

export default function WhyInnovah() {
  return (
    <section id="waarom" className="relative py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text content */}
          <div>
            <SectionHeading
              label="Waarom Innovah"
              title="Waarom Klanten voor Ons Kiezen"
              light
            />

            <div className="mt-10 space-y-6">
              {usps.map((usp, index) => (
                <motion.div
                  key={usp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <usp.icon className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">{usp.title}</h3>
                    <p className="text-sm text-dark/60 mt-1 leading-relaxed">{usp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10"
            >
              <Button variant="outline" onClick={() => scrollToSection('contact')} arrow>
                Vraag Vrijblijvend Advies
              </Button>
            </motion.div>
          </div>

          {/* Right: Image card with overlay stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/hero-tunnel.jpg"
                alt="Auto in tunnel met dynamische lichtsporen"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
                  Onze Belofte
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Zorgeloos uw Droomauto Rijden
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Bij Innovah Automotive geloven we dat het kopen van een auto een plezierige ervaring
                  moet zijn. Daarom nemen wij u alles uit handen.
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10">
                    <div className="text-xl font-extrabold text-gold">500+</div>
                    <div className="text-[10px] text-white/50 mt-0.5">Tevreden klanten</div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10">
                    <div className="text-xl font-extrabold text-gold">EU</div>
                    <div className="text-[10px] text-white/50 mt-0.5">Europees netwerk</div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10">
                    <div className="text-xl font-extrabold text-gold">48u</div>
                    <div className="text-[10px] text-white/50 mt-0.5">Snelle levering</div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10">
                    <div className="text-xl font-extrabold text-gold">0</div>
                    <div className="text-[10px] text-white/50 mt-0.5">Verborgen kosten</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative offset */}
            <div className="absolute -z-10 top-4 -right-4 w-full h-full bg-gold/10 rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
