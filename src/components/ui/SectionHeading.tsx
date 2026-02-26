import { motion } from 'framer-motion'

interface Props {
  label?: string
  title: string
  description?: string
  light?: boolean
  center?: boolean
}

export default function SectionHeading({ label, title, description, light, center }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={center ? 'text-center' : ''}
    >
      {label && (
        <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-2 block">
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight ${light ? 'text-dark' : 'text-white'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-dark/70' : 'text-muted'}`}>
          {description}
        </p>
      )}
      <div className={`w-16 h-1 bg-gold mt-6 rounded-full ${center ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}
