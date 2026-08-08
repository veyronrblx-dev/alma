import { useState, type FormEvent } from "react"
import { PageHeader } from "../components/PageHeader"
import { SectionHeading } from "../components/SectionHeading"
import { Button } from "../components/Button"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { restaurant } from "../data/content"

export function ContactPage() {
  useScrollReveal()

  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHeader
        overline="Get in Touch"
        title="Contact Us"
        subtitle="Questions, private events, or press enquiries — we would love to hear from you."
        image="/images/interior.png"
      />

      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">

          <div className="reveal">
            <SectionHeading
              overline="Details"
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

                <a
                  href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
                  className="mt-2 block text-cream/70 hover:text-gold"
                >
                  {restaurant.phone}
                </a>

                <a
                  href={`mailto:${restaurant.email}`}
                  className="block text-cream/70 hover:text-gold"
                >
                  {restaurant.email}
                </a>
              </div>

            </div>
          </div>

          <div className="reveal">

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
                  className="mt-8 text-xs uppercase tracking-[0.25em] text-gold hover:underline"
                >
                  Send another message
                </button>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-sm border border-cream/10 bg-espresso/30 p-8 md:p-10"
              >

                <div className="grid gap-5">

                  <input
                    required
                    placeholder="Full Name"
                    className="w-full border border-cream/10 bg-transparent p-4 text-cream outline-none focus:border-gold"
                  />

                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full border border-cream/10 bg-transparent p-4 text-cream outline-none focus:border-gold"
                  />

                  <input
                    required
                    placeholder="Subject"
                    className="w-full border border-cream/10 bg-transparent p-4 text-cream outline-none focus:border-gold"
                  />

                  <textarea
                    required
                    minLength={10}
                    rows={6}
                    placeholder="Message"
                    className="w-full resize-none border border-cream/10 bg-transparent p-4 text-cream outline-none focus:border-gold"
                  />

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
