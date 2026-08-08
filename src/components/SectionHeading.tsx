type Props = {
  overline?: string
  title: string
  subtitle?: string
  align?: "center" | "left"
  light?: boolean
}

export function SectionHeading({
  overline,
  title,
  subtitle,
  align = "center",
  light = false,
}: Props) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left"
  return (
    <div className={`flex flex-col ${alignment} gap-4`}>
      {overline && (
        <span className="reveal flex items-center gap-3 font-sans text-xs uppercase tracking-luxe text-gold">
          <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
          {overline}
          {align === "center" && <span className="h-px w-8 bg-gold/60" aria-hidden="true" />}
        </span>
      )}
      <h2
        className={`reveal max-w-2xl text-balance font-serif text-4xl leading-tight sm:text-5xl ${
          light ? "text-ink" : "text-cream"
        }`}
        data-delay="1"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`reveal max-w-xl text-pretty font-sans text-base leading-relaxed ${
            light ? "text-cocoa" : "text-muted"
          }`}
          data-delay="2"
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
