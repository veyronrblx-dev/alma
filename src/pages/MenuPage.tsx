import { useState } from "react"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { PageHeader } from "../components/PageHeader"
import { DishCard } from "../components/DishCard"
import { ButtonLink } from "../components/Button"
import { menu, featuredDishes } from "../data/content"

const dishImages: Record<string, string> = {
  "Vieira & Couve-flor": "/images/dish-1.png",
  "Ostras & Caviar": "/images/dish-3.png",
  "Wagyu & Trufa Negra": "/images/dish-2.png",
  "Chocolate & Ouro": "/images/dish-4.png",
}

export function MenuPage() {
  const [active, setActive] = useState(menu[0].category)
  const current = menu.find((c) => c.category === active)!
  useScrollReveal([active])

  return (
    <>
      <PageHeader
        overline="Cozinha de Autor"
        title="O Nosso Menu"
        subtitle="Uma viagem sazonal pelos sabores de Portugal, reinterpretados com técnica e paixão."
        image="/images/dish-2.png"
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {/* Category tabs */}
          <div className="mb-14 flex flex-wrap justify-center gap-3">
            {menu.map((cat) => (
              <button
                key={cat.category}
                type="button"
                onClick={() => setActive(cat.category)}
                className={`rounded-full border px-6 py-2.5 font-sans text-xs uppercase tracking-wide-2 transition-all duration-300 ${
                  active === cat.category
                    ? "border-gold bg-gold text-ink shadow-gold-glow"
                    : "border-gold/25 text-cream/80 hover:border-gold/60 hover:text-cream"
                }`}
                aria-pressed={active === cat.category}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Menu list */}
          <div className="mx-auto flex max-w-3xl flex-col gap-2">
            {current.items.map((item, i) => (
              <div
                key={item.name}
                className="reveal group flex items-start justify-between gap-6 rounded-2xl border border-transparent px-5 py-6 transition-all duration-400 hover:border-gold/20 hover:bg-espresso/50"
                data-delay={(i % 5) + 1}
              >
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-2xl text-cream transition-colors group-hover:text-gold-bright">
                    {item.name}
                  </h3>
                  <p className="max-w-md text-pretty text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-1">
                  <span
                    className="hidden h-px w-10 bg-gold/25 sm:block"
                    aria-hidden="true"
                  />
                  <span className="shrink-0 font-serif text-2xl text-gold">
                    €{item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature dishes with images */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-14 text-center">
            <span className="mb-4 flex items-center justify-center gap-3 font-sans text-xs uppercase tracking-luxe text-gold">
              <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
              Recomendações
              <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
            </span>
            <h2 className="font-serif text-4xl text-cream sm:text-5xl">
              Pratos de Assinatura
            </h2>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDishes.map((dish, i) => (
              <DishCard
                key={dish.name}
                {...dish}
                image={dishImages[dish.name] ?? dish.image}
                delay={(i % 4) + 1}
              />
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <ButtonLink to="/reservas" variant="solid">
              Reservar a Sua Mesa
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
