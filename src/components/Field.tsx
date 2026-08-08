import type { ReactNode } from "react"

const inputBase =
  "w-full rounded-xl border border-gold/20 bg-espresso/60 px-4 py-3.5 font-sans text-sm text-cream placeholder:text-muted/70 shadow-sm transition-all duration-300 focus:border-gold focus:bg-espresso focus:outline-none focus:ring-2 focus:ring-gold/30 aria-[invalid=true]:border-red-400/70 aria-[invalid=true]:ring-red-400/20"

type WrapProps = {
  label: string
  htmlFor: string
  error?: string
  children: ReactNode
}

export function Field({ label, htmlFor, error, children }: WrapProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="font-sans text-xs uppercase tracking-wide-2 text-cream/80"
      >
        {label}
      </label>
      {children}
      {error && (
        <span className="text-xs text-red-300" role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

export { inputBase }
