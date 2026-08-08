import { ChevronDown } from "lucide-react"
import { ButtonLink } from "../Button"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Prato de alta gastronomia servido no Alma Guimarães"
          className="h-full w-full animate-ken-burns object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-ink/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-5 text-center">
        <span
          className="mb-6 font-sans text-xs uppercase tracking-luxe text-gold text-shadow-soft"
          style={{ animation: "fadeIn 1s ease 0.3s both" }}
        >
          Guimarães · Portugal · Est. 2007
        </span>
        <h1 className="max-w-4xl text-balance font-serif text-5xl leading-[1.05] text-cream text-shadow-soft sm:text-7xl lg:text-8xl">
          <span
            className="block"
            style={{ animation: "fadeUp 1.1s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}
          >
            Alma Guimarães
          </span>
        </h1>
        <p
          className="mt-6 max-w-xl text-pretty font-sans text-base font-light leading-relaxed text-cream/85 text-shadow-soft sm:text-lg"
          style={{ animation: "fadeUp 1.1s cubic-bezier(0.16,1,0.3,1) 0.8s both" }}
        >
          Uma jornada gastronómica onde a tradição portuguesa encontra a arte da
          cozinha de autor. Cada prato, uma memória.
        </p>
        <div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animation: "fadeUp 1.1s cubic-bezier(0.16,1,0.3,1) 1.05s both" }}
        >
          <ButtonLink to="/menu" variant="solid">
            Ver Menu
          </ButtonLink>
          <ButtonLink to="/reservas" variant="outline">
            Reservar Mesa
          </ButtonLink>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#intro"
        aria-label="Descer para conteúdo"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/70 transition-colors hover:text-gold"
        style={{ animation: "fadeIn 1s ease 1.4s both" }}
      >
        <span className="text-[0.6rem] uppercase tracking-luxe">Descubra</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-cream/40 p-1">
          <span
            className="h-1.5 w-1.5 rounded-full bg-gold"
            style={{ animation: "scrollDot 1.6s ease-in-out infinite" }}
          />
        </span>
        <ChevronDown size={16} className="animate-float" />
      </a>
    </section>
  )
}
