import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ============================================
   Reusable Components
   ============================================ */

function Section({
  children,
  bg = 'dark',
  className = '',
}: {
  children: React.ReactNode
  bg?: 'dark' | 'deep' | 'gold' | 'surface'
  className?: string
}) {
  const bgMap = {
    dark: 'bg-[#141414]',
    deep: 'bg-[#0A0A0A]',
    gold: 'bg-[#FFC320]',
    surface: 'bg-[#1A1A1A]',
  }
  return (
    <section className={`${bgMap[bg]} px-6 lg:px-8 py-14 sm:py-20 ${className}`}>
      <div className="max-w-3xl mx-auto">{children}</div>
    </section>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFC320] mb-2">
      {children}
    </p>
  )
}

function SectionTitle({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <h2 className={`text-2xl sm:text-3xl font-extrabold ${dark ? 'text-black' : 'text-white'}`}>
      {children}
    </h2>
  )
}

function AccordionItem({
  title,
  icon,
  children,
  isOpen,
  onToggle,
}: {
  title: React.ReactNode
  icon: React.ReactNode
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border border-white/10 rounded-lg overflow-hidden bg-[#1A1A1A]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-white/5 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-[#FFC320]">{icon}</span>
          <span className="font-semibold text-white text-sm sm:text-base">{title}</span>
        </div>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronIcon className="w-5 h-5 text-white/40" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-white/60 leading-relaxed text-sm">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <CheckIcon className="w-4 h-4 text-[#FFC320] mt-0.5 shrink-0" />
      <span>{children}</span>
    </li>
  )
}

function CrossItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-white/40">
      <CloseIcon className="w-4 h-4 mt-0.5 shrink-0" />
      <span>{children}</span>
    </li>
  )
}

/* ============================================
   SVG Icons
   ============================================ */

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}


function PaletteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="6.5" cy="12" r="0.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  )
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function ImageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  )
}

function ServerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  )
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  )
}

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}

function BarChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  )
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

/* ============================================
   Add-on toggle component
   ============================================ */

function AddOnCard({
  title,
  price,
  icon,
  description,
  features,
  active,
  onToggle,
}: {
  title: string
  price: number
  icon: React.ReactNode
  description: string
  features: string[]
  active: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`relative rounded-lg p-5 border transition-all duration-300 cursor-pointer ${
        active
          ? 'bg-[#FFC320]/10 border-[#FFC320]/40'
          : 'bg-white/[0.02] border-white/10 hover:border-white/20'
      }`}
      onClick={onToggle}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${active ? 'bg-[#FFC320]/20' : 'bg-white/5'}`}>
            <span className="text-[#FFC320]">{icon}</span>
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">{title}</h3>
            <p className="text-white/50 text-xs mt-1 leading-relaxed">{description}</p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <div className="text-lg font-bold text-[#FFC320]">&euro;{price}</div>
          <div className="text-[10px] text-white/40">/mnd</div>
        </div>
      </div>

      {active && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-4 pt-4 border-t border-[#FFC320]/20"
        >
          <ul className="space-y-2 text-sm">
            {features.map((f) => (
              <CheckItem key={f}>{f}</CheckItem>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Toggle indicator */}
      <div className={`absolute top-5 right-5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
        active ? 'border-[#FFC320] bg-[#FFC320]' : 'border-white/20'
      }`}>
        {active && <CheckIcon className="w-3 h-3 text-black" />}
      </div>
    </div>
  )
}

/* ============================================
   Main Offerte Page
   ============================================ */

export default function OffertePage() {
  const [openItems, setOpenItems] = useState<string[]>([])
  const [addOns, setAddOns] = useState({
    webshop: false,
    supabase: false,
    posthog: false,
  })

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  const toggleAddOn = (key: keyof typeof addOns) => {
    setAddOns((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const basePrice = 149
  const addOnPrices = { webshop: 40, supabase: 25, posthog: 12 }
  const totalAddOns = Object.entries(addOns).reduce(
    (sum, [key, active]) => sum + (active ? addOnPrices[key as keyof typeof addOnPrices] : 0),
    0
  )
  const totalPrice = basePrice + totalAddOns

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans text-sm sm:text-base print:bg-white print:text-black">

      {/* ===== 1. BRIEFHOOFD & INTRO ===== */}
      <Section bg="deep">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#FFC320]">
                Blue Wire Media
              </h1>
              <p className="text-white/40 text-sm mt-1">Webdesign &amp; Development</p>
            </div>
            <div className="text-sm text-white/40 text-left sm:text-right">
              <p>27 februari 2026</p>
              <p className="mt-1">Kenmerk: BWM-2026-INH</p>
            </div>
          </div>

          <div className="h-px bg-[#FFC320]/20" />

          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Offerte Innovah Automotive
            </h2>
            <p className="text-white/60 text-sm mt-1">
              Professionele bedrijfswebsite &mdash; design concept &amp; abonnementsvoorstel
            </p>
          </div>

          <div className="text-sm text-white">
            <p className="font-semibold">Innovah Automotive</p>
            <p className="text-white/60 mt-1">T.a.v. Silvijn Simonis</p>
          </div>

          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>Beste Silvijn,</p>
            <p>
              Allereerst bedankt voor je interesse. Wat je hebt bekeken op{' '}
              <strong className="text-white">innovah-automotive.vercel.app</strong> is een{' '}
              <strong className="text-white">design concept</strong> dat wij via{' '}
              <em>rapid prototyping</em> hebben gebouwd. Dit is onze manier van werken: in plaats
              van eindeloos te vergaderen over wireframes en mockups, bouwen wij direct een werkend
              prototype dat je kunt zien, voelen en doorklikken.
            </p>
            <p>
              Het voordeel? Je hebt direct een realistisch beeld van het eindresultaat. Wat je nu
              ziet kan worden aangepast, uitgebreid en verfijnd &mdash; maar de basis staat er.
              We hopen dat het je aanspreekt.
            </p>
            <p>
              Mijn naam is <strong className="text-white">Bart Visser</strong>, oprichter van
              Blue Wire Media. Ik bouw moderne websites en webapplicaties op maat. Hieronder vind
              je mijn voorstel voor de samenwerking.
            </p>
          </div>
        </div>
      </Section>

      {/* ===== 2. WERKWIJZE: RAPID PROTOTYPING ===== */}
      <Section bg="surface">
        <div className="space-y-6">
          <div>
            <SectionLabel>Werkwijze</SectionLabel>
            <SectionTitle>Rapid Prototyping &mdash; direct resultaat</SectionTitle>
            <p className="text-white/60 mt-2">
              Geen weken wachten op een ontwerp. Wij bouwen direct een werkend prototype.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                num: '1',
                title: 'Concept',
                desc: 'Op basis van een kort gesprek en jullie input bouwen wij direct een werkend design concept.',
              },
              {
                num: '2',
                title: 'Feedback',
                desc: 'Je bekijkt het concept, geeft feedback, en wij passen aan. Snel en iteratief.',
              },
              {
                num: '3',
                title: 'Live',
                desc: 'Na goedkeuring gaat de site live met je eigen domein. Klaar om klanten te ontvangen.',
              },
            ].map((step) => (
              <div
                key={step.num}
                className="bg-[#0A0A0A] rounded-lg p-5 border border-[#FFC320]/10"
              >
                <div className="w-8 h-8 rounded-full bg-[#FFC320] text-black flex items-center justify-center font-bold text-sm mb-3">
                  {step.num}
                </div>
                <h3 className="font-bold text-white text-sm">{step.title}</h3>
                <p className="text-white/50 text-xs mt-1 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0A0A0A] rounded-lg p-5 border border-[#FFC320]/10 flex items-start gap-4">
            <ZapIcon className="w-5 h-5 text-[#FFC320] shrink-0 mt-0.5" />
            <p className="text-sm text-white/60 leading-relaxed">
              <strong className="text-white">Wat je nu ziet is dit design concept.</strong>{' '}
              De volledige website inclusief hero, diensten, werkplaats, over ons en contactformulier
              met e-mailafhandeling is al gebouwd en functioneel. Na akkoord koppelen we je eigen
              domein en zijn we live.
            </p>
          </div>
        </div>
      </Section>

      {/* ===== 3. WAT IS OPGELEVERD ===== */}
      <Section bg="deep">
        <div className="space-y-6">
          <div>
            <SectionLabel>Scope</SectionLabel>
            <SectionTitle>Wat is er gebouwd</SectionTitle>
            <p className="text-white/60 mt-2">
              Klik op een onderdeel voor meer details.
            </p>
          </div>

          <div className="space-y-3">
            <AccordionItem
              title="Custom Design & Development"
              icon={<PaletteIcon className="w-5 h-5" />}
              isOpen={openItems.includes('design')}
              onToggle={() => toggleItem('design')}
            >
              <ul className="space-y-2">
                <li>Professioneel, donker design met gouden accenten passend bij automotive</li>
                <li>Mobile-first responsive design (telefoon, tablet, desktop)</li>
                <li>Volledig op maat gebouwd &mdash; geen standaard template</li>
                <li>Subtiele scroll-animaties en hover-effecten (Framer Motion)</li>
                <li>Consistente huisstijl passend bij het merk Innovah Automotive</li>
              </ul>
            </AccordionItem>

            <AccordionItem
              title="Secties & Content"
              icon={<ImageIcon className="w-5 h-5" />}
              isOpen={openItems.includes('content')}
              onToggle={() => toggleItem('content')}
            >
              <ul className="space-y-2">
                <li>Hero sectie met achtergrondbeeld en CTA&apos;s</li>
                <li>Diensten: Auto Import, Auto Export, Reparatie &amp; Onderhoud</li>
                <li>&quot;Waarom Innovah&quot; sectie met USP&apos;s en statistieken</li>
                <li>Werkplaats overzicht met 6 service-categorieën</li>
                <li>Over Ons met bedrijfsinformatie en kernwaarden</li>
                <li>Contact met formulier, gegevens en persoonlijk blok (Silvijn)</li>
                <li>Footer met navigatie, contact en openingstijden</li>
              </ul>
            </AccordionItem>

            <AccordionItem
              title="Contactformulier & E-mail"
              icon={<MailIcon className="w-5 h-5" />}
              isOpen={openItems.includes('form')}
              onToggle={() => toggleItem('form')}
            >
              <ul className="space-y-2">
                <li>Volledig functioneel contactformulier met validatie</li>
                <li>Keuze onderwerp: Import, Export, Reparatie of Anders</li>
                <li>E-mailafhandeling via Mailgun naar administratie@innovahautomotive.com</li>
                <li>Professioneel opgemaakte e-mails in Innovah-huisstijl</li>
                <li>Reply-To ingesteld op het e-mailadres van de bezoeker</li>
              </ul>
            </AccordionItem>

            <AccordionItem
              title="SEO & Performance"
              icon={<SearchIcon className="w-5 h-5" />}
              isOpen={openItems.includes('seo')}
              onToggle={() => toggleItem('seo')}
            >
              <ul className="space-y-2">
                <li>Meta-tags, Open Graph en beschrijving geoptimaliseerd</li>
                <li>Semantische HTML voor zoekmachine-indexering</li>
                <li>Snelle laadtijden door Vite bundling en code splitting</li>
                <li>Beeldoptimalisatie en lazy loading</li>
                <li>Favicon in SVG-formaat</li>
              </ul>
            </AccordionItem>

            <AccordionItem
              title="Hosting & Infrastructuur"
              icon={<ServerIcon className="w-5 h-5" />}
              isOpen={openItems.includes('hosting')}
              onToggle={() => toggleItem('hosting')}
            >
              <ul className="space-y-2">
                <li>Vercel hosting met 99.99% uptime garantie</li>
                <li>Automatisch SSL-certificaat (HTTPS)</li>
                <li>Wereldwijd CDN voor snelle laadtijden</li>
                <li>Automatische deployments bij updates</li>
                <li>DNS-configuratie voor eigen domein</li>
              </ul>
            </AccordionItem>

            <AccordionItem
              title="Lancering & Oplevering"
              icon={<RocketIcon className="w-5 h-5" />}
              isOpen={openItems.includes('launch')}
              onToggle={() => toggleItem('launch')}
            >
              <ul className="space-y-2">
                <li>DNS-configuratie en koppeling eigen domein</li>
                <li>SSL-certificaat en HTTPS-afdwinging</li>
                <li>Contactformulier testen (e-mailontvangst bevestigen)</li>
                <li>Cross-browser en mobiel testen</li>
                <li>Go-live begeleiding</li>
              </ul>
            </AccordionItem>
          </div>
        </div>
      </Section>

      {/* ===== 4. WAAROM ABONNEMENT ===== */}
      <Section bg="surface">
        <div className="space-y-6">
          <div>
            <SectionLabel>Ons model</SectionLabel>
            <SectionTitle>Waarom een abonnement?</SectionTitle>
          </div>

          <div className="space-y-4 text-white/70 leading-relaxed text-sm">
            <p>
              We worden regelmatig gevraagd: <em>&quot;Kan ik niet gewoon eenmalig betalen?&quot;</em>{' '}
              Natuurlijk begrijpen we die gedachte. Maar onze ervaring &mdash; en die van onze
              klanten &mdash; leert ons dat een abonnementsvorm voor beide partijen prettiger werkt.
            </p>
            <p>
              <strong className="text-white">Onze klanten vroegen erom.</strong> Ze wilden geen
              grote investering vooraf, maar wel zekerheid dat hun website up-to-date blijft,
              snel is en goed werkt. Een abonnement maakt dat mogelijk.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Geen grote investering vooraf',
                desc: 'Je betaalt maandelijks een vast bedrag. Geen verrassingen, geen grote factuur bij oplevering.',
              },
              {
                title: 'Altijd up-to-date',
                desc: 'Wij zorgen voor updates, beveiligingspatches en hosting. De site blijft altijd optimaal draaien.',
              },
              {
                title: 'Doorlopende support',
                desc: 'Kleine aanpassingen, tekst wijzigen, een foto vervangen — het is inbegrepen. Geen extra facturen.',
              },
              {
                title: 'Flexibel uitbreidbaar',
                desc: 'Start met de basis en voeg later modules toe. Webshop nodig? Backend? Analytics? Schakel het bij.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-[#0A0A0A] rounded-lg p-5 border border-white/5">
                <h3 className="font-bold text-white text-sm">{card.title}</h3>
                <p className="text-white/50 text-xs mt-1 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== 5. PRIJSOVERZICHT ===== */}
      <Section bg="gold">
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 mb-2">
              Investering
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
              Eén abonnement, modulair opgebouwd
            </h2>
            <p className="text-black/60 mt-2 max-w-xl mx-auto">
              Start met de basis en voeg toe wat je nodig hebt. Alles excl. 21% BTW.
            </p>
          </div>

          {/* Base package */}
          <div className="bg-[#111111] rounded-lg p-5 sm:p-8 text-white">
            <div className="flex items-start justify-between">
              <div>
                <div className="inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-wide rounded-sm bg-[#FFC320] text-black mb-4">
                  Basispakket
                </div>
                <h3 className="text-xl font-extrabold">Website Abonnement</h3>
                <p className="text-xs text-white/50 mt-1">Hosting, development &amp; onderhoud</p>
              </div>
              <div className="text-right">
                <span className="text-[32px] font-extrabold tabular-nums text-[#FFC320]">
                  &euro;{basePrice}
                </span>
                <span className="text-white/40 ml-1">/mnd</span>
              </div>
            </div>

            <div className="h-px bg-white/10 my-5" />

            <div className="space-y-2 text-sm text-white/50">
              <div className="flex justify-between">
                <span>Vercel Pro hosting</span>
                <span>&euro;20/mnd</span>
              </div>
              <div className="flex justify-between">
                <span>Ontwikkeling (gespreid over 18 mnd)</span>
                <span>&euro;100/mnd</span>
              </div>
              <div className="flex justify-between">
                <span>Support &amp; onderhoud</span>
                <span>&euro;29/mnd</span>
              </div>
              <div className="h-px bg-white/10 my-2" />
              <div className="flex justify-between font-semibold text-white">
                <span>Basispakket</span>
                <span>&euro;{basePrice}/mnd</span>
              </div>
            </div>

            <div className="h-px bg-white/10 my-5" />

            <ul className="space-y-3 text-sm">
              {[
                'Volledige website zoals je nu ziet',
                'Vercel Pro hosting met 99.99% uptime',
                'SSL-certificaat & CDN inbegrepen',
                'Eigen domein koppeling',
                'Contactformulier met e-mailafhandeling',
                'Doorlopende support & kleine aanpassingen',
                '2 uur aanpassingen per maand inbegrepen',
                'Beveiligingsupdates & monitoring',
              ].map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>

            <p className="text-xs text-white/30 mt-5">
              Na 18 maanden: &euro;49/mnd (hosting + support). De ontwikkelingskosten zijn dan afbetaald.
            </p>
          </div>
        </div>
      </Section>

      {/* ===== 6. MODULAIRE ADD-ONS ===== */}
      <Section bg="deep">
        <div className="space-y-6">
          <div>
            <SectionLabel>Uitbreidingen</SectionLabel>
            <SectionTitle>Modulaire add-ons</SectionTitle>
            <p className="text-white/60 mt-2">
              Klik om een module toe te voegen aan je abonnement. Je kunt later altijd bijschakelen.
            </p>
          </div>

          <div className="space-y-4">
            <AddOnCard
              title="Webshop Integratie"
              price={40}
              icon={<CartIcon className="w-5 h-5" />}
              description="Verkoop producten, onderdelen of accessoires rechtstreeks via je website."
              features={[
                'Productcatalogus met categorieën en filters',
                'Winkelwagen en checkout flow',
                'Betaalintegratie (iDEAL, creditcard, Bancontact)',
                'Voorraadbeheer en ordermanagement',
                'Automatische orderbevestigings-emails',
                'BTW-berekening en factuurgegevens',
              ]}
              active={addOns.webshop}
              onToggle={() => toggleAddOn('webshop')}
            />

            <AddOnCard
              title="Supabase Backend"
              price={25}
              icon={<DatabaseIcon className="w-5 h-5" />}
              description="Een volledige database en backend voor geavanceerde functionaliteit."
              features={[
                'PostgreSQL database voor al je data',
                'Gebruikersaccounts & inlogsysteem (klantportaal)',
                'Dashboard voor het beheren van content, auto\'s of werkplaatsafspraken',
                'Realtime updates (bijv. status van een reparatie)',
                'Veilige opslag van klantgegevens (GDPR-compliant)',
                'API voor toekomstige integraties (bijv. mobiele app)',
              ]}
              active={addOns.supabase}
              onToggle={() => toggleAddOn('supabase')}
            />

            <AddOnCard
              title="PostHog Analytics"
              price={12}
              icon={<BarChartIcon className="w-5 h-5" />}
              description="Diepgaande inzichten in wat je bezoekers doen op je website."
              features={[
                'Bezoekersstatistieken & gedragsanalyse',
                'Heatmaps: waar klikken bezoekers?',
                'Sessie-opnames (zie exact wat klanten doen)',
                'Conversietracking (formulier-inzendingen, bellen-kliks)',
                'Privacyvriendelijk — geen cookies, GDPR-compliant',
                'Maandelijkse rapportage op maat',
              ]}
              active={addOns.posthog}
              onToggle={() => toggleAddOn('posthog')}
            />
          </div>

          {/* Running total */}
          <motion.div
            layout
            className="bg-[#1A1A1A] rounded-lg p-5 border border-[#FFC320]/20"
          >
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-white/50">
                <span>Basispakket</span>
                <span>&euro;{basePrice}/mnd</span>
              </div>
              {addOns.webshop && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-between text-white/50">
                  <span>+ Webshop Integratie</span>
                  <span>&euro;{addOnPrices.webshop}/mnd</span>
                </motion.div>
              )}
              {addOns.supabase && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-between text-white/50">
                  <span>+ Supabase Backend</span>
                  <span>&euro;{addOnPrices.supabase}/mnd</span>
                </motion.div>
              )}
              {addOns.posthog && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-between text-white/50">
                  <span>+ PostHog Analytics</span>
                  <span>&euro;{addOnPrices.posthog}/mnd</span>
                </motion.div>
              )}
              <div className="h-px bg-[#FFC320]/20 my-2" />
              <div className="flex justify-between font-extrabold text-white text-base">
                <span>Totaal per maand</span>
                <motion.span
                  key={totalPrice}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-[#FFC320]"
                >
                  &euro;{totalPrice}/mnd
                </motion.span>
              </div>
              <p className="text-[10px] text-white/30 mt-1">Excl. 21% BTW</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ===== 7. WAT IS INBEGREPEN / NIET INBEGREPEN ===== */}
      <Section bg="surface">
        <div className="space-y-6">
          <div>
            <SectionLabel>Transparantie</SectionLabel>
            <SectionTitle>Wat is wél en niet inbegrepen</SectionTitle>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#0A0A0A] rounded-lg p-5 border border-[#FFC320]/10">
              <h3 className="font-bold text-white text-sm mb-4 flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-[#FFC320]" />
                Inbegrepen
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  'Custom design & development',
                  'Hosting & SSL-certificaat',
                  'Contactformulier met e-mail',
                  'Responsive design (alle apparaten)',
                  'SEO basis-optimalisatie',
                  'Beveiligingsupdates',
                  'Support & kleine aanpassingen',
                  '2 uur werk per maand inbegrepen',
                  'Domein koppeling & DNS',
                ].map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>

            <div className="bg-[#0A0A0A] rounded-lg p-5 border border-white/5">
              <h3 className="font-bold text-white/60 text-sm mb-4 flex items-center gap-2">
                <CloseIcon className="w-4 h-4" />
                Niet inbegrepen
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  'Domeinnaam registratie (~€15/jaar)',
                  'Professionele fotografie',
                  'Copywriting & vertalingen',
                  'Google Ads / advertentiecampagnes',
                  'Social media beheer',
                  'Extra uren boven 2u/mnd (€75/u)',
                ].map((item) => (
                  <CrossItem key={item}>{item}</CrossItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== 8. OVEREENKOMST & VOORWAARDEN ===== */}
      <Section bg="deep">
        <div className="space-y-6">
          <div>
            <SectionLabel>Voorwaarden</SectionLabel>
            <SectionTitle>Overeenkomst</SectionTitle>
          </div>

          <div className="space-y-4">
            <div className="bg-[#1A1A1A] rounded-lg p-5 border border-white/10">
              <div className="flex items-start gap-4">
                <ShieldIcon className="w-6 h-6 text-[#FFC320] shrink-0 mt-0.5" />
                <div className="space-y-3 text-sm text-white/60 leading-relaxed">
                  <p>
                    <strong className="text-white">Minimale looptijd: 18 maanden.</strong>{' '}
                    Het abonnement kent een minimale looptijd van 18 maanden. Dit stelt ons in
                    staat om de ontwikkelingskosten te spreiden en jou een scherpe maandelijkse
                    prijs te bieden zonder grote investering vooraf.
                  </p>
                  <p>
                    Na 18 maanden is het abonnement{' '}
                    <strong className="text-white">maandelijks opzegbaar</strong> met 1 maand
                    opzegtermijn. Het maandbedrag daalt dan naar &euro;49/mnd (hosting + support),
                    aangezien de ontwikkelingskosten zijn afbetaald.
                  </p>
                  <p>
                    Bij be&euml;indiging ontvang je de volledige broncode. Er is geen vendor
                    lock-in &mdash; de website is en blijft van jou.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-5 border border-white/10">
              <h3 className="font-bold text-white text-sm mb-3">Service Level Agreement</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                {[
                  { label: 'Reactietijd', value: '< 24 uur op werkdagen' },
                  { label: 'Uptime garantie', value: '99.99%' },
                  { label: 'Inclusief aanpassingen', value: '2 uur per maand' },
                  { label: 'Extra werkzaamheden', value: '€75 per uur' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between bg-white/[0.02] rounded-lg px-4 py-3">
                    <span className="text-white/50">{item.label}</span>
                    <span className="text-white font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-5 border border-white/10">
              <h3 className="font-bold text-white text-sm mb-3">Eigendom &amp; rechten</h3>
              <ul className="space-y-2 text-sm text-white/60 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-[#FFC320] mt-0.5 shrink-0" />
                  <span>Broncode is altijd toegankelijk via Git gedurende de looptijd</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-[#FFC320] mt-0.5 shrink-0" />
                  <span>Volledig eigendom van de broncode na afloop van de minimale looptijd</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-[#FFC320] mt-0.5 shrink-0" />
                  <span>Content (teksten, afbeeldingen) is altijd jouw eigendom</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-[#FFC320] mt-0.5 shrink-0" />
                  <span>Geen vendor lock-in: je kunt altijd weg als je wilt</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== 9. AFSLUITING ===== */}
      <Section bg="surface">
        <div className="space-y-6">
          <div className="space-y-4 text-white/70 leading-relaxed text-sm">
            <p>Silvijn,</p>
            <p>
              Ik hoop dat het design concept je aanspreekt en dat dit voorstel duidelijk maakt
              hoe wij te werk gaan. Mijn doel is simpel: een website opleveren waar je trots op
              bent en die daadwerkelijk klanten oplevert voor Innovah Automotive.
            </p>
            <p>
              Heb je vragen, wil je iets aangepast zien, of wil je gewoon even sparren?
              Bel of mail me gerust. Ik denk graag mee.
            </p>
            <p className="text-white/50">
              Deze offerte is 30 dagen geldig vanaf bovenstaande datum.
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="font-extrabold text-white">Bart Visser</p>
              <p className="text-white/50 text-sm">Blue Wire Media</p>
            </div>
            <div className="space-y-2 text-sm">
              <a href="mailto:b.visser@bluewiremedia.nl" className="flex items-center gap-2 text-white/50 hover:text-[#FFC320] transition-colors">
                <MailIcon className="w-4 h-4" />
                b.visser@bluewiremedia.nl
              </a>
              <a href="tel:+31652814000" className="flex items-center gap-2 text-white/50 hover:text-[#FFC320] transition-colors">
                <PhoneIcon className="w-4 h-4" />
                06-52814XXX
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== FOOTER BAR ===== */}
      <div className="bg-[#0A0A0A] border-t border-white/5 px-6 py-6 text-center">
        <p className="text-[10px] text-white/20">
          &copy; {new Date().getFullYear()} Blue Wire Media &mdash; KvK 94435383 &mdash; BTW NL005137858B42
        </p>
      </div>
    </div>
  )
}
