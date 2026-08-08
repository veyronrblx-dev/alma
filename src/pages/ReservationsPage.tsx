import { useState, type FormEvent } from "react"
import { CheckCircle2, CalendarCheck } from "lucide-react"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { PageHeader } from "../components/PageHeader"
import { Button } from "../components/Button"
import { Field, inputBase } from "../components/Field"
import { restaurant } from "../data/content"

type Form = {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
  requests: string
}

const empty: Form = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  requests: "",
}

const times = [
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
]

export function ReservationsPage() {
  useScrollReveal()
  const [form, setForm] = useState<Form>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const today = new Date().toISOString().split("T")[0]

  const update = (key: keyof Form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const validate = () => {
    const next: Partial<Record<keyof Form, string>> = {}
    if (form.name.trim().length < 2) next.name = "Introduza o seu nome completo."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Introduza um email válido."
    if (form.phone.replace(/\D/g, "").length < 9)
      next.phone = "Introduza um número de telefone válido."
    if (!form.date) next.date = "Escolha uma data."
    else if (form.date < today) next.date = "A data não pode ser no passado."
    if (!form.time) next.time = "Escolha uma hora."
    const g = Number(form.guests)
    if (!g || g < 1 || g > 20) next.guests = "Entre 1 e 20 convidados."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        overline="Reservas"
        title="Reserve a Sua Mesa"
        subtitle="Garanta o seu lugar numa experiência gastronómica inesquecível no coração de Guimarães."
        image="/images/gallery-1.png"
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          {/* Form / confirmation */}
          <div className="reveal">
            {submitted ? (
              <div className="flex flex-col items-center gap-6 rounded-2xl border border-gold/25 bg-espresso/60 p-10 text-center shadow-luxe sm:p-14">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <CheckCircle2 size={40} />
                </span>
                <h2 className="font-serif text-4xl text-cream">Reserva Confirmada</h2>
                <p className="max-w-md text-pretty leading-relaxed text-muted">
                  Obrigado, <span className="text-gold">{form.name}</span>. A sua mesa
                  para <span className="text-gold">{form.guests}</span>{" "}
                  {Number(form.guests) === 1 ? "pessoa" : "pessoas"} está reservada para{" "}
                  <span className="text-gold">
                    {new Date(form.date).toLocaleDateString("pt-PT", {
                      day: "numeric",
                      month: "long",
                    })}
                  </span>{" "}
                  às <span className="text-gold">{form.time}</span>. Enviámos a
                  confirmação para <span className="text-gold">{form.email}</span>.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setForm(empty)
                    setSubmitted(false)
                  }}
                >
                  Nova Reserva
                </Button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                className="flex flex-col gap-6 rounded-2xl border border-gold/15 bg-espresso/40 p-7 shadow-luxe sm:p-10"
              >
                <div className="mb-1 flex items-center gap-3 text-gold">
                  <CalendarCheck size={20} />
                  <span className="font-sans text-xs uppercase tracking-wide-2">
                    Detalhes da Reserva
                  </span>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Nome" htmlFor="name" error={errors.name}>
                    <input
                      id="name"
                      className={inputBase}
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="O seu nome"
                      aria-invalid={!!errors.name}
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Email" htmlFor="email" error={errors.email}>
                    <input
                      id="email"
                      type="email"
                      className={inputBase}
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="email@exemplo.pt"
                      aria-invalid={!!errors.email}
                      autoComplete="email"
                    />
                  </Field>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Telefone" htmlFor="phone" error={errors.phone}>
                    <input
                      id="phone"
                      type="tel"
                      className={inputBase}
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+351 ..."
                      aria-invalid={!!errors.phone}
                      autoComplete="tel"
                    />
                  </Field>
                  <Field label="Nº de Convidados" htmlFor="guests" error={errors.guests}>
                    <select
                      id="guests"
                      className={inputBase}
                      value={form.guests}
                      onChange={(e) => update("guests", e.target.value)}
                      aria-invalid={!!errors.guests}
                    >
                      {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n} className="bg-espresso text-cream">
                          {n} {n === 1 ? "pessoa" : "pessoas"}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Data" htmlFor="date" error={errors.date}>
                    <input
                      id="date"
                      type="date"
                      min={today}
                      className={`${inputBase} [color-scheme:dark]`}
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                      aria-invalid={!!errors.date}
                    />
                  </Field>
                  <Field label="Hora" htmlFor="time" error={errors.time}>
                    <select
                      id="time"
                      className={inputBase}
                      value={form.time}
                      onChange={(e) => update("time", e.target.value)}
                      aria-invalid={!!errors.time}
                    >
                      <option value="" className="bg-espresso text-muted">
                        Selecione a hora
                      </option>
                      {times.map((t) => (
                        <option key={t} value={t} className="bg-espresso text-cream">
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Pedidos Especiais" htmlFor="requests">
                  <textarea
                    id="requests"
                    rows={4}
                    className={`${inputBase} resize-none`}
                    value={form.requests}
                    onChange={(e) => update("requests", e.target.value)}
                    placeholder="Alergias, celebração, preferências de mesa..."
                  />
                </Field>

                <Button type="submit" variant="solid" className="mt-2 w-full">
                  Confirmar Reserva
                </Button>
              </form>
            )}
          </div>

          {/* Side info */}
          <aside className="reveal flex flex-col gap-6" data-delay="2">
            <div className="rounded-2xl border border-gold/15 bg-espresso/40 p-7 shadow-luxe">
              <h3 className="mb-4 font-serif text-2xl text-cream">Boa saber</h3>
              <ul className="flex flex-col gap-4 text-sm leading-relaxed text-muted">
                <li>Aceitamos reservas até 60 dias de antecedência.</li>
                <li>Grupos com mais de 8 pessoas: contacte-nos diretamente.</li>
                <li>Código de vestuário: elegante casual.</li>
                <li>Informe-nos de qualquer restrição alimentar.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gold/15 bg-espresso/40 p-7 shadow-luxe">
              <h3 className="mb-4 font-serif text-2xl text-cream">Prefere ligar?</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                A nossa equipa terá todo o gosto em ajudar a planear a sua visita.
              </p>
              <a
                href={`tel:${restaurant.phoneHref}`}
                className="font-serif text-2xl text-gold transition-colors hover:text-gold-bright"
              >
                {restaurant.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
