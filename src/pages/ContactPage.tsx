import { useState, type FormEvent } from "react"
import { PageHeader } from "../components/PageHeader"
import { SectionHeading } from "../components/SectionHeading"
import { Field } from "../components/Field"
import { Button } from "../components/Button"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { restaurant } from "../data/content"

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const empty: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

export function ContactPage() {
  const [form, setForm] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [sent, setSent] = useState(false)

  const infoReveal = useScrollReveal()
  const formReveal = useScrollReveal()

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  function validate() {
    const next: Partial<FormState> = {}

    if (!form.name.trim()) {
      next.name = "Please enter your name"
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address"
    }

    if (!form.subject.trim()) {
      next.subject = "Please add a subject"
    }

    if (form.message.trim().length < 10) {
      next.message = "Message must be at least 10 characters"
    }

    setErrors(next)

    return Object.keys(next).length === 0
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!validate()) return

    setSent(true)
    setForm(empty)
  }

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Questions, private events, or press enquiries — we would love to hear from you."
        image="/images/interior.png"
      />

      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">

          <div
            ref={infoReveal.ref}
            className={`reveal ${
              infoReveal.isVisible ? "reveal-visible" : ""
            }`}
          >
            <SectionHeading
              eyebrow="Details"
              title="Visit or Reach Out"
              align="left"
            />

            <div className="mt-8 space-y-8">

              <div>
                <h3 className="font-serif text-xl text-gold">
                  Address
                </h3>

                <p className="mt-2 leading-relaxed text-cream/70">
                  {restaurant.address}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-gold">
                  Reservations &amp; Enquiries
                </h3>

                <p className="mt-2 text-cream/70">
                  <a
                    href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-gold"
                  >
                    {restaurant.phone}
                  </a>
                </p>

                <p className="text-cream/70">
                  <a
                    href={`mailto:${restaurant.email}`}
                    className="transition-colors hover:text-gold"
                  >
                    {restaurant.email}
                  </a>
                </p>
              </div>

            </div>
          </div>

          <div
            ref={formReveal.ref}
            className={`reveal ${
              formReveal.isVisible ? "reveal-visible" : ""
            }`}
          >
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-sm border border-gold/25 bg-espresso/40 p-12 text-center">

                <span className="font-script text-4xl text-gold">
                  Thank you
                </span>

                <p className="mt-4 max-w-sm leading-relaxed text-cream/70">
                  Your message has been received. Our team will respond within
                  24 hours.
                </p>

                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-xs uppercase tracking-[0.25em] text-gold underline-offset-4 hover:underline"
                >
                  Send another message
                </button>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-sm border border-cream/10 bg-espresso/30 p-8 md:p-10"
              >

                <div className="grid gap-5">

                  <Field
                    label="Full Name"
                    value={form.name}
                    onChange={(v) => update("name", v)}
                    error={errors.name}
                    required
                  />

                  <Field
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(v) => update("email", v)}
                    error={errors.email}
                    required
                  />

                  <Field
                    label="Subject"
                    value={form.subject}
                    onChange={(v) => update("subject", v)}
                    error={errors.subject}
                    required
                  />

                  <div>
                    <label className="mb-2 block text-sm text-cream/80">
                      Message
                    </label>

                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        update("message", e.target.value)
                      }
                      required
                      rows={6}
                      className="w-full resize-none rounded-sm border border-cream/10 bg-transparent px-4 py-3 text-cream outline-none transition-colors focus:border-gold"
                    />

                    {errors.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                </div>

                <Button
                  type="submit"
                  className="mt-8 w-full justify-center"
                >
                  Send Message
                </Button>

              </form>
            )}
          </div>

        </div>
      </section>
    </>
  )
}
