import { ButtonLink } from "../Button"

export function ChefSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 flex flex-col gap-6 lg:order-1">
          <span className="reveal flex items-center gap-3 font-sans text-xs uppercase tracking-luxe text-gold">
            <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
            O Chef
          </span>
          <h2 className="reveal max-w-lg text-balance font-serif text-4xl leading-tight text-cream sm:text-5xl" data-delay="1">
            Duarte Salazar
          </h2>
          <p className="reveal max-w-xl text-pretty leading-relaxed text-muted" data-delay="2">
            Formado nas cozinhas mais respeitadas da Europa, o Chef Duarte
            regressou às suas raízes minhotas com uma missão: elevar a cozinha
            portuguesa ao patamar da alta gastronomia mundial, sem nunca perder
            a sua alma.
          </p>
          <p className="reveal max-w-xl text-pretty leading-relaxed text-muted" data-delay="3">
            A sua filosofia é simples — respeitar o produto, honrar a tradição e
            surpreender com técnica. Cada menu é uma narrativa pessoal, escrita
            com os sabores da terra e do mar.
          </p>

          <blockquote className="reveal mt-2 border-l-2 border-gold/50 pl-6" data-delay="4">
            <p className="font-serif text-2xl italic leading-snug text-cream">
              &ldquo;Cozinhar é a forma mais honesta de contar quem somos.&rdquo;
            </p>
          </blockquote>

          <div className="reveal mt-4" data-delay="5">
            <ButtonLink to="/reservas" variant="solid">
              Viva a Experiência
            </ButtonLink>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="reveal relative overflow-hidden rounded-2xl shadow-luxe" data-delay="1">
            <img
              src="/images/chef.png"
              alt="Chef executivo Duarte Salazar a finalizar um prato na cozinha"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
