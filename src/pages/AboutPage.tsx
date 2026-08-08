import { useScrollReveal } from "../hooks/useScrollReveal"
import { PageHeader } from "../components/PageHeader"
import { SectionHeading } from "../components/SectionHeading"
import { ButtonLink } from "../components/Button"
import { Utensils, Heart, Wine } from "lucide-react"

const values = [
  {
    icon: Utensils,
    title: "Gastronomia",
    text: "Uma proposta gastronómica em Guimarães, com atenção à qualidade dos ingredientes e à apresentação dos pratos.",
  },
  {
    icon: Heart,
    title: "Experiência",
    text: "Um espaço pensado para proporcionar uma experiência agradável, desde o ambiente até ao serviço à mesa.",
  },
  {
    icon: Wine,
    title: "À Mesa",
    text: "Uma seleção de pratos e vinhos para desfrutar com calma, seja num almoço, jantar ou numa ocasião especial.",
  },
]

const timeline = [
  {
    year: "Guimarães",
    text: "O Alma Restaurante está situado na Rua João de Melo, no centro de Guimarães.",
  },
  {
    year: "Gastronomia",
    text: "O restaurante apresenta uma cozinha de inspiração mediterrânica e portuguesa.",
  },
  {
    year: "Experiência",
    text: "A proposta combina gastronomia, ambiente e serviço num espaço acolhedor.",
  },
  {
    year: "Hoje",
    text: "O Alma continua a receber clientes em Guimarães com uma proposta gastronómica contemporânea.",
  },
]

export function AboutPage() {
  useScrollReveal()

  return (
    <>
      <PageHeader
        overline="Sobre o Alma"
        title="Alma Guimarães"
        subtitle="Onde a alma encontra o sabor."
        image="/images/chef.png"
      />

      {/* Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div className="reveal overflow-hidden rounded-2xl shadow-luxe">
            <img
              src="/images/interior.png"
              alt="Interior do Alma Restaurante Guimarães"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-6">
            <SectionHeading
              align="left"
              overline="Alma Guimarães"
              title="Onde a alma encontra o sabor"
            />

            <p className="reveal text-pretty leading-relaxed text-muted" data-delay="2">
              O Alma Restaurante está localizado na Rua João de Melo, em Guimarães,
              e apresenta uma proposta gastronómica com inspiração mediterrânica e
              portuguesa.
            </p>

            <p className="reveal text-pretty leading-relaxed text-muted" data-delay="3">
              A experiência combina gastronomia, ambiente e serviço, num espaço
              pensado para desfrutar da refeição com tranquilidade.
            </p>

            <div className="reveal mt-2" data-delay="4">
              <ButtonLink to="/reservas" variant="solid">
                Reserve a Sua Mesa
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            overline="O Alma"
            title="Uma experiência à mesa"
          />

          <div className="mt-16 grid gap-7 md:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="reveal group flex flex-col items-center gap-5 rounded-2xl border border-gold/10 bg-espresso/50 p-9 text-center shadow-luxe transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 hover:shadow-gold-glow"
                data-delay={i + 1}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                  <v.icon size={26} />
                </span>

                <h3 className="font-serif text-2xl text-cream">
                  {v.title}
                </h3>

                <p className="text-pretty text-sm leading-relaxed text-muted">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading
            overline="O Restaurante"
            title="Alma Guimarães"
          />

          <ol className="mt-16 flex flex-col">
            {timeline.map((item, i) => (
              <li
                key={item.year}
                className="reveal relative flex gap-8 border-l border-gold/25 pb-12 pl-8 last:pb-0"
                data-delay={(i % 4) + 1}
              >
                <span className="absolute -left-2 top-1 h-4 w-4 rounded-full border-2 border-gold bg-charcoal" />

                <div className="flex flex-col gap-1">
                  <span className="font-serif text-3xl text-gold">
                    {item.year}
                  </span>

                  <p className="text-pretty leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
