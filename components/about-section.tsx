import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionHeader } from "@/components/section-header"

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-secondary/60">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <SectionHeader
              align="left"
              eyebrow="Over ons"
              title="Traditionele Habesha-gerechten"
              description="We serveren traditionele Habesha-gerechten (Ethiopisch en Eritrees) — een van de beste keukens ter wereld. We hebben de wereld naar je toe gebracht. Laten we wat van ons beste eten met je delen."
            />
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-white p-4 text-center">
                <p className="text-2xl font-bold text-primary">14+</p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">Vleesgerechten</p>
              </div>
              <div className="rounded-xl border border-border bg-white p-4 text-center">
                <p className="text-2xl font-bold text-primary">9+</p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">Vegan opties</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/10 ring-1 ring-black/5">
              <iframe
                src="https://www.youtube.com/embed/fYjgbebSsag"
                title="Merhaba Habesha Restaurant"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
