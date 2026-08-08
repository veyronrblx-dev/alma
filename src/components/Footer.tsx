import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react"
import { restaurant, navLinks, hours } from "../data/content"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-ink">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px gold-line opacity-60"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex flex-col leading-none">
            <span className="font-serif text-3xl text-cream">Alma</span>
            <span className="font-sans text-[0.6rem] uppercase tracking-luxe text-gold">
              Guimarães
            </span>
          </Link>
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted">
            Cozinha de autor no coração histórico de Guimarães. Uma celebração dos
            sabores de Portugal, reinventada com elegância.
          </p>
          <div className="mt-2 flex gap-3">
            <SocialIcon href={restaurant.social.instagram} label="Instagram">
              <Instagram size={18} />
            </SocialIcon>
            <SocialIcon href={restaurant.social.facebook} label="Facebook">
              <Facebook size={18} />
            </SocialIcon>
            <SocialIcon href={restaurant.social.twitter} label="Twitter">
              <Twitter size={18} />
            </SocialIcon>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-sans text-xs uppercase tracking-luxe text-gold">
            Navegação
          </h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-cream/75 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/reservas"
                className="text-sm text-cream/75 transition-colors hover:text-gold"
              >
                Reservas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-sans text-xs uppercase tracking-luxe text-gold">
            Contacto
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-cream/75">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
              <span>{restaurant.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
              <a
                href={`tel:${restaurant.phoneHref}`}
                className="transition-colors hover:text-gold"
              >
                {restaurant.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
              <a
                href={`mailto:${restaurant.email}`}
                className="transition-colors hover:text-gold"
              >
                {restaurant.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-sans text-xs uppercase tracking-luxe text-gold">
            Horário
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-cream/75">
            {hours.map((h) => (
              <li key={h.day} className="flex flex-col">
                <span className="text-cream">{h.day}</span>
                <span className="text-muted">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Alma Guimarães. Todos os direitos reservados.</p>
          <p className="tracking-wide-2 uppercase">Feito com alma em Portugal</p>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-cream/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10 hover:text-gold"
    >
      {children}
    </a>
  )
}
