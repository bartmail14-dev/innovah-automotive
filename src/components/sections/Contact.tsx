import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

interface FormData {
  naam: string
  email: string
  telefoon: string
  onderwerp: string
  bericht: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    naam: '',
    email: '',
    telefoon: '',
    onderwerp: 'Import',
    bericht: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ naam: '', email: '', telefoon: '', onderwerp: 'Import', bericht: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (status !== 'idle' && status !== 'loading') setStatus('idle')
  }

  const inputClasses =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition-colors'

  return (
    <section id="contact" className="py-24 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Neem Contact Op"
          description="Heeft u vragen over import, export of onze werkplaats? Wij helpen u graag verder."
          center
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="naam" className="block text-sm font-medium text-white/70 mb-2">
                    Naam *
                  </label>
                  <input
                    id="naam"
                    type="text"
                    required
                    value={form.naam}
                    onChange={(e) => handleChange('naam', e.target.value)}
                    placeholder="Uw naam"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    E-mail *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="uw@email.nl"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="telefoon" className="block text-sm font-medium text-white/70 mb-2">
                    Telefoonnummer
                  </label>
                  <input
                    id="telefoon"
                    type="tel"
                    value={form.telefoon}
                    onChange={(e) => handleChange('telefoon', e.target.value)}
                    placeholder="06-12345678"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="onderwerp" className="block text-sm font-medium text-white/70 mb-2">
                    Onderwerp
                  </label>
                  <select
                    id="onderwerp"
                    value={form.onderwerp}
                    onChange={(e) => handleChange('onderwerp', e.target.value)}
                    className={inputClasses}
                  >
                    <option value="Import">Auto Import</option>
                    <option value="Export">Auto Export</option>
                    <option value="Reparatie">Reparatie & Onderhoud</option>
                    <option value="Anders">Anders</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="bericht" className="block text-sm font-medium text-white/70 mb-2">
                  Bericht *
                </label>
                <textarea
                  id="bericht"
                  required
                  rows={5}
                  value={form.bericht}
                  onChange={(e) => handleChange('bericht', e.target.value)}
                  placeholder="Vertel ons waarmee we u kunnen helpen..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-black font-semibold px-8 py-3 rounded-lg hover:bg-gold-hover active:bg-gold-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Versturen...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Verstuur Bericht
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3"
                >
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm">Bedankt! Uw bericht is verstuurd. We nemen zo snel mogelijk contact met u op.</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm">Er ging iets mis. Probeer het opnieuw of bel ons direct.</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-surface-dark border border-white/5 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-6">Contactgegevens</h3>

              <div className="space-y-5">
                <a
                  href="tel:+31615345206"
                  className="flex items-center gap-4 text-muted hover:text-gold transition-colors group"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-muted">Telefoon</div>
                    <div className="text-sm font-semibold text-white">06-15345206</div>
                  </div>
                </a>

                <a
                  href="mailto:administratie@innovahautomotive.com"
                  className="flex items-center gap-4 text-muted hover:text-gold transition-colors group"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-muted">E-mail</div>
                    <div className="text-sm font-semibold text-white break-all">administratie@innovahautomotive.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-muted">Locatie</div>
                    <div className="text-sm font-semibold text-white">Nederland</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-muted">Openingstijden</div>
                    <div className="text-sm font-semibold text-white">Ma-Vr: 09:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal touch */}
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-2">Silvijn Simonis</h3>
              <p className="text-sm text-muted">Eigenaar & Contactpersoon</p>
              <p className="text-sm text-white/70 mt-4 leading-relaxed">
                "Heeft u vragen of wilt u vrijblijvend advies? Neem gerust contact op.
                Ik help u persoonlijk verder."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
