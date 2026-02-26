import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'
import { ArrowUpRight } from 'lucide-react'

type Variant = 'primary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  arrow?: boolean
  children: React.ReactNode
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type Props = ButtonProps | AnchorProps

const variants: Record<Variant, string> = {
  primary:
    'bg-gold text-black hover:bg-gold-hover active:bg-gold-dark font-semibold',
  ghost:
    'border border-white/30 text-white hover:border-gold hover:text-gold bg-transparent',
  outline:
    'border border-gold text-gold hover:bg-gold hover:text-black bg-transparent font-semibold',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({ variant = 'primary', size = 'md', arrow, children, ...props }: Props) {
  const classes = `inline-flex items-center gap-2 rounded-lg transition-all duration-200 cursor-pointer ${variants[variant]} ${sizes[size]}`

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
        {arrow && <ArrowUpRight className="w-4 h-4" />}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {arrow && <ArrowUpRight className="w-4 h-4" />}
    </button>
  )
}
