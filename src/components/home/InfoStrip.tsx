import { Clock, MapPin, Phone } from "lucide-react"
import { SectionHeading } from "../SectionHeading"
import { ButtonLink } from "../Button"
import { hours, restaurant } from "../../data/content"

export function InfoStrip() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: hours + contact */}
          <div className="flex flex-col gap-10">
            <SectionHeading
              align="left"
              overline="Visite-nos"
              title="Horário & Contactos"
              subtitle="Recomendamos reserva antecipada para garantir a sua mesa."
            />

            <div className="reveal rounded-2xl border border-gold/15 bg-espresso/50 p-7 shadow-luxe" data-delay="1">
              <div className="mb-5 flex items-center gap-3 text-gold">
                <Clock size={18} />
                <span className="font-sans text-xs uppercase tracking-wide-2">
                  Horário de Funcionamento
                </span>
              </div>
              <ul className="flex flex-col divide-y divide-gold/10">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between gap-4 py-3 text-sm"
                  >
                    <span className="text-cream">{h.day}</span>
                    <span className="text-right text-muted">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal flex flex-col gap-4 sm:flex-row" data-delay="2">
              <a
                href={`tel:${restaurant.phoneHref}`}
                className="flex flex-1 items-center gap-3 rounded-2xl border border-gold/15 bg-espresso/50 p-5 shadow-luxe transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
              >
                <Phone size={20} className="text-gold" />
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-wide-2 text-muted">Telefone</span>
                  <span className="text-sm text-cream">{restaurant.phone}</span>
                </span>
              </a>
              <a
                href={restaurant.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center gap-3 rounded-2xl border border-gold/15 bg-espresso/50 p-5 shadow-luxe transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
              >
                <MapPin size={20} className="text-gold" />
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-wide-2 text-muted">Morada</span>
                  <span className="text-sm text-cream">Rua de Santa Maria, Guimarães</span>
                </span>
              </a>
            </div>

            <div className="reveal" data-delay="3">
              <ButtonLink to="/reservas" variant="solid">
                Fazer Reserva
              </ButtonLink>
            </div>
          </div>

          {/* Right: map */}
          <div className="reveal overflow-hidden rounded-2xl border border-gold/15 shadow-luxe" data-delay="2">
            <iframe
              title="Mapa da localização do Alma Guimarães"
              src={restaurant.mapsEmbed}
              className="h-full min-h-[420px] w-full grayscale-[0.3]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
