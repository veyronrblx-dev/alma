import { useEffect, useState } from "react"

export function Loader() {
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    const t1 = setTimeout(() => setDone(true), 1900)
    const t2 = setTimeout(() => {
      setHidden(true)
      document.body.style.overflow = ""
    }, 2600)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      document.body.style.overflow = ""
    }
  }, [])

  if (hidden) return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink transition-opacity duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <span className="font-sans text-[0.7rem] uppercase tracking-luxe text-gold">
          Guimarães · Portugal
        </span>
        <h1 className="overflow-hidden font-serif text-4xl text-cream sm:text-6xl">
          <span
            className="block"
            style={{ animation: "fadeUp 1.1s cubic-bezier(0.16,1,0.3,1) forwards" }}
          >
            Alma Guimarães
          </span>
        </h1>
        <div className="relative h-px w-48 overflow-hidden bg-cocoa">
          <span
            className="absolute inset-y-0 left-0 bg-gold"
            style={{ animation: "loaderBar 1.7s cubic-bezier(0.16,1,0.3,1) forwards" }}
          />
        </div>
      </div>
      <style>{`
        @keyframes loaderBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  )
}
