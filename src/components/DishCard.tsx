type Props = {
  name: string
  description: string
  price: string
  image: string
  tag?: string
  delay?: number
}

export function DishCard({ name, description, price, image, tag, delay = 0 }: Props) {
  return (
    <article
      className="reveal group flex flex-col overflow-hidden rounded-2xl border border-gold/10 bg-espresso/60 shadow-luxe transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-gold-glow"
      data-delay={delay}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
        {tag && (
          <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[0.65rem] uppercase tracking-wide-2 text-gold backdrop-blur-sm">
            {tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-2xl text-cream transition-colors group-hover:text-gold-bright">
            {name}
          </h3>
          <span className="shrink-0 font-serif text-xl text-gold">€{price}</span>
        </div>
        <p className="text-pretty text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </article>
  )
}
