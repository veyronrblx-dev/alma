import { useCallback, useEffect, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { PageHeader } from "../components/PageHeader"
import { galleryImages } from "../data/content"

export function GalleryPage() {
  const [index, setIndex] = useState<number | null>(null)
  useScrollReveal()

  const close = useCallback(() => setIndex(null), [])
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length)),
    [],
  )
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % galleryImages.length)),
    [],
  )

  useEffect(() => {
    if (index === null) return
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [index, close, prev, next])

  return (
    <>
      <PageHeader
        overline="Galeria"
        title="Uma Experiência Visual"
        subtitle="Cada imagem conta a história do Alma — dos bastidores da cozinha à magia do serviço."
        image="/images/interior.png"
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {galleryImages.map((img, i) => (
              <button
                key={img.src + i}
                type="button"
                onClick={() => setIndex(i)}
                className="reveal group relative block w-full overflow-hidden rounded-2xl shadow-luxe transition-all duration-500 hover:shadow-gold-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                data-delay={(i % 5) + 1}
                aria-label={`Ampliar imagem: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-ink/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 translate-y-3 font-sans text-xs uppercase tracking-wide-2 text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Ver
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {index !== null && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 backdrop-blur-sm"
          style={{ animation: "fadeIn 0.3s ease both" }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de imagens"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-cream transition-colors hover:bg-gold/15"
            aria-label="Fechar"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 text-cream transition-colors hover:bg-gold/15 sm:left-8"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <figure
            className="mx-auto max-h-[82vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[index].src}
              alt={galleryImages[index].alt}
              className="mx-auto max-h-[74vh] w-auto rounded-2xl object-contain shadow-luxe"
              style={{ animation: "fadeUp 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
            />
            <figcaption className="mt-4 text-center text-sm text-cream/80">
              {galleryImages[index].alt}
              <span className="ml-3 text-gold">
                {index + 1} / {galleryImages.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 text-cream transition-colors hover:bg-gold/15 sm:right-8"
            aria-label="Imagem seguinte"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  )
}
