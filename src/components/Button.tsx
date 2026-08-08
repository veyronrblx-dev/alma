import { Link } from "react-router-dom"
import type { ReactNode } from "react"

type Variant = "solid" | "outline"

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-sans text-sm tracking-wide-2 uppercase transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"

const variants: Record<Variant, string> = {
  solid:
    "bg-gold text-ink shadow-luxe hover:shadow-gold-glow hover:-translate-y-0.5 hover:bg-gold-bright",
  outline:
    "border border-gold/50 text-cream hover:border-gold hover:-translate-y-0.5 hover:bg-gold/10 hover:shadow-gold-glow",
}

type CommonProps = {
  children: ReactNode
  variant?: Variant
  className?: string
}

export function ButtonLink({
  to,
  children,
  variant = "solid",
  className = "",
  external = false,
}: CommonProps & { to: string; external?: boolean }) {
  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}

export function Button({
  children,
  variant = "solid",
  className = "",
  type = "button",
  disabled,
  onClick,
}: CommonProps & {
  type?: "button" | "submit"
  disabled?: boolean
  onClick?: () => void
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {children}
    </button>
  )
}
