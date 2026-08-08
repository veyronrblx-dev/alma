import { useScrollReveal } from "../hooks/useScrollReveal"
import { PageHeader } from "../components/PageHeader"
import { SectionHeading } from "../components/SectionHeading"
import { ButtonLink } from "../components/Button"
import { Leaf, Award, HeartHandshake } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Produto Local",
    text: "Trabalhamos com produtores do Minho, respeitando as estações e a terra que nos alimenta.",
  },
  {
    icon: Award,
    title: "Excelência",
    text: "Duas estrelas Michelin refletem o rigor e a dedicação de toda a nossa equipa.",
  },
  {
    icon: HeartHandshake,
    title: "Hospitalidade",
    text: "Cada convidado é recebido como família. O serviço é atento, discreto e caloroso.",
  },
]

const timeline = [
  { year: "2007", text: "Abrimos portas numa casa centenária da Rua de Santa Maria." },
  { year: "2013", text: "Recebemos a primeira estrela Michelin, um marco na nossa história." },
  { year: "2019", text: "A segunda estrela consagra a visão do Chef Duarte Salazar." },
  { year: "2024", text: "Renovamos o espaço, mantendo a alma e elevando a experiência." },
]

export function AboutPage() {
  useScrollReveal()
  return (
    <>
      <PageHeader
        overline="A Nossa História"
        title="Sobre o Alma"
        subtitle="Quase duas décadas a celebrar a gastronomia portuguesa no coração de Guimarães."
        image="/images/chef.png"
      />

      {/* Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div className="reveal overflow-hidden rounded-2xl shadow-luxe">
            <img
              src="/images/interior.png"
              alt="Interior acolhedor do restaurante Alma Guimarães"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-6">
            <SectionHeading
              align="left"
              overline="Desde 2007"
              title="Uma casa com alma"
            />
            <p className="reveal text-pretty leading-relaxed text-muted" data-delay="2">
              O Alma nasceu de um sonho simples: mostrar ao mundo a profundidade e
              a beleza da cozinha portuguesa. Instalados numa casa centenária no
              coração histórico de Guimarães — o berço de Portugal — quisemos criar
              um lugar onde cada detalhe respirasse elegância e autenticidade.
            </p>
            <p className="reveal text-pretty leading-relaxed text-muted" data-delay="3">
              Ao longo dos anos, mantivemos intacta a nossa essência: o respeito
              pelo produto, a valorização de quem o produz e a vontade constante de
              surpreender. Cada prato é uma homenagem à terra e ao mar de Portugal.
            </p>
            <div className="reveal mt-2" data-delay="4">
              <ButtonLink to="/reservas" variant="solid">
                Reserve a Sua Experiência
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading overline="Os Nossos Valores" title="Aquilo em que acreditamos" />
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
                <h3 className="font-serif text-2xl text-cream">{v.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading overline="Percurso" title="Momentos que nos definem" />
          <ol className="mt-16 flex flex-col">
            {timeline.map((item, i) => (
              <li
                key={item.year}
                className="reveal relative flex gap-8 border-l border-gold/25 pb-12 pl-8 last:pb-0"
                data-delay={(i % 4) + 1}
              >
                <span className="absolute -left-2 top-1 h-4 w-4 rounded-full border-2 border-gold bg-charcoal" />
                <div className="flex flex-col gap-1">
                  <span className="font-serif text-3xl text-gold">{item.year}</span>
                  <p className="text-pretty leading-relaxed text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
