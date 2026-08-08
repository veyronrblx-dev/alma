import { SectionHeading } from "../SectionHeading"
import { DishCard } from "../DishCard"
import { ButtonLink } from "../Button"
import { featuredDishes } from "../../data/content"

export function FeaturedDishes() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          overline="Assinatura do Chef"
          title="Pratos que definem uma temporada"
          subtitle="Uma seleção das nossas criações mais celebradas, preparadas com os melhores ingredientes de cada estação."
        />

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDishes.map((dish, i) => (
            <DishCard key={dish.name} {...dish} delay={(i % 4) + 1} />
          ))}
        </div>

        <div className="reveal mt-14 flex justify-center">
          <ButtonLink to="/menu" variant="outline">
            Ver Menu Completo
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
