import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ReservationWizard } from "@/components/reservation/reservation-wizard"

export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        eyebrow="Reserveren"
        title="Reserveer je tafel"
        subtitle="Kies datum, tijd en aantal personen. We openen dagelijks van 14:00 tot 00:00 uur."
      />

      <section className="container-site -mt-8 relative z-10 pb-16 md:pb-24">
        <div className="rounded-3xl border border-border bg-white p-5 shadow-2xl shadow-black/8 sm:p-8 md:p-10">
          <ReservationWizard />
        </div>
      </section>

      <Footer />
    </main>
  )
}
