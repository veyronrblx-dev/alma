import { Quote, Star } from "lucide-react"
import { SectionHeading } from "../SectionHeading"
import { reviews } from "../../data/content"

export function Reviews() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px gold-line opacity-50"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          overline="Testemunhos"
          title="Aquilo que dizem sobre nós"
          subtitle="O reconhecimento de críticos e convidados é o nosso maior orgulho."
        />

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {reviews.map((review, i) => (
            <article
              key={review.author}
              className="reveal group flex flex-col gap-6 rounded-2xl border border-gold/10 bg-espresso/50 p-8 shadow-luxe transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 hover:shadow-gold-glow"
              data-delay={i + 1}
            >
              <Quote className="text-gold/60" size={32} />
              <p className="text-pretty font-serif text-lg italic leading-relaxed text-cream/90">
                {review.quote}
              </p>
              <div className="mt-auto flex flex-col gap-3">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={15} fill="currentColor" />
                  ))}
                </div>
                <div>
                  <p className="font-sans text-sm text-cream">{review.author}</p>
                  <p className="text-xs uppercase tracking-wide-2 text-gold">
                    {review.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
