import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { SectionHeading } from "../SectionHeading"
import { galleryImages } from "../../data/content"

export function GalleryPreview() {
  const preview = galleryImages.slice(0, 6)
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-6">
          <SectionHeading
            overline="Galeria"
            title="Momentos que se saboreiam com os olhos"
          />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {preview.map((img, i) => (
            <Link
              key={img.src}
              to="/galeria"
              className={`reveal group relative overflow-hidden rounded-xl shadow-luxe ${
                i === 0 ? "col-span-2 row-span-2 sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
              data-delay={(i % 5) + 1}
              aria-label="Abrir galeria"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Link>
          ))}
        </div>

        <div className="reveal mt-14 flex justify-center">
          <Link
            to="/galeria"
            className="group inline-flex items-center gap-2 font-sans text-sm uppercase tracking-wide-2 text-gold transition-colors hover:text-gold-bright"
          >
            Ver Galeria Completa
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
