type Props = {
  overline: string
  title: string
  subtitle?: string
  image: string
}

export function PageHeader({ overline, title, subtitle, image }: Props) {
  return (
    <section className="relative flex h-[52vh] min-h-[380px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="h-full w-full animate-ken-burns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-charcoal" />
      </div>
      <div className="relative z-10 flex flex-col items-center px-5 text-center">
        <span
          className="mb-4 font-sans text-xs uppercase tracking-luxe text-gold text-shadow-soft"
          style={{ animation: "fadeIn 0.9s ease 0.2s both" }}
        >
          {overline}
        </span>
        <h1
          className="max-w-3xl text-balance font-serif text-5xl leading-tight text-cream text-shadow-soft sm:text-6xl"
          style={{ animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.35s both" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-5 max-w-xl text-pretty font-sans leading-relaxed text-cream/80 text-shadow-soft"
            style={{ animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.55s both" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
