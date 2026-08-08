import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { navLinks } from "../data/content"
import { ButtonLink } from "./Button"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "glass py-3 shadow-luxe"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          className="flex flex-col leading-none transition-opacity hover:opacity-80"
          aria-label="Alma Guimarães — início"
        >
          <span className="font-serif text-2xl tracking-wide text-cream">Alma</span>
          <span className="font-sans text-[0.6rem] uppercase tracking-luxe text-gold">
            Guimarães
          </span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `group relative font-sans text-xs uppercase tracking-wide-2 transition-colors duration-300 ${
                    isActive ? "text-gold" : "text-cream/80 hover:text-cream"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ButtonLink to="/reservas" className="px-6 py-2.5 text-xs">
            Reservar Mesa
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-cream transition-colors hover:bg-gold/10 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pb-6 pt-4 sm:px-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3.5 font-serif text-2xl transition-colors ${
                    isActive ? "text-gold" : "text-cream hover:bg-gold/10"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-3 px-1">
            <ButtonLink to="/reservas" className="w-full">
              Reservar Mesa
            </ButtonLink>
          </li>
        </ul>
      </div>
    </header>
  )
}
