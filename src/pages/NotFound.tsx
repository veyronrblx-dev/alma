import { Link } from "react-router-dom"

export function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-script text-6xl text-gold">Oops</span>
      <h1 className="mt-4 font-serif text-4xl text-cream md:text-5xl">Page Not Found</h1>
      <p className="mt-4 max-w-md leading-relaxed text-cream/60">
        The page you are looking for may have been moved or no longer exists.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 border border-gold px-8 py-3 text-xs uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-charcoal"
      >
        Return Home
      </Link>
    </section>
  )
}
