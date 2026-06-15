import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ReservationWizard } from "@/components/reservation/reservation-wizard"

export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-secondary/40">
      <Navigation />

      <section
        className="relative overflow-hidden border-b border-border bg-white pt-16"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Reserveren
          </p>
          <h1 className="mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Reserveer je tafel
          </h1>
          <p className="mx-auto max-w-lg text-sm text-muted-foreground sm:text-base">
            Kies datum, tijd en aantal personen. We openen dagelijks van 14:00 tot 00:00 uur in
            Apeldoorn.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="rounded-3xl border border-border bg-white p-5 shadow-xl shadow-black/5 sm:p-8 md:p-10">
          <ReservationWizard />
        </div>
      </section>

      <Footer />
    </main>
  )
}
