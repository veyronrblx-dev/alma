import { ButtonLink } from "../Button"
import { stats } from "../../data/content"
import { useCountUp } from "../../hooks/useCountUp"

export function Intro() {
  return (
    <section id="intro" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="reveal overflow-hidden rounded-2xl shadow-luxe">
            <img
              src="/images/interior.png"
              alt="Sala de jantar elegante do Alma Guimarães ao anoitecer"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="reveal glass absolute -bottom-8 -right-4 hidden max-w-[220px] rounded-2xl p-6 shadow-luxe sm:block" data-delay="2">
            <p className="font-serif text-lg leading-snug text-cream">
              &ldquo;A alma de um povo vive na sua mesa.&rdquo;
            </p>
            <p className="mt-3 text-xs uppercase tracking-wide-2 text-gold">
              Chef Duarte Salazar
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="reveal flex items-center gap-3 font-sans text-xs uppercase tracking-luxe text-gold">
            <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
            A Nossa Essência
          </span>
          <h2 className="reveal max-w-lg text-balance font-serif text-4xl leading-tight text-cream sm:text-5xl" data-delay="1">
            Alta gastronomia no berço de Portugal
          </h2>
          <p className="reveal max-w-xl text-pretty leading-relaxed text-muted" data-delay="2">
            No coração histórico de Guimarães, o Alma celebra a riqueza dos
            produtos portugueses através de uma cozinha contemporânea e ousada.
            Trabalhamos com produtores locais, respeitamos as estações e
            transformamos cada refeição numa experiência cinematográfica.
          </p>
          <p className="reveal max-w-xl text-pretty leading-relaxed text-muted" data-delay="3">
            Duas estrelas Michelin e quase duas décadas de dedicação fazem do
            Alma um destino para quem procura mais do que uma refeição — procura
            uma memória.
          </p>

          <div className="reveal mt-4" data-delay="4">
            <ButtonLink to="/sobre" variant="outline">
              A Nossa História
            </ButtonLink>
          </div>

          <div className="reveal mt-8 grid grid-cols-2 gap-8 border-t border-gold/15 pt-8 sm:grid-cols-4" data-delay="5">
            {stats.map((s) => (
              <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { value: current, ref } = useCountUp(value)
  return (
    <div className="flex flex-col gap-1">
      <span ref={ref} className="font-serif text-4xl text-gold">
        {current}
        {suffix}
      </span>
      <span className="text-xs uppercase tracking-wide-2 text-muted">{label}</span>
    </div>
  )
}
