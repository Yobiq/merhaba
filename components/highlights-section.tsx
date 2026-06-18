import { Coffee, Flame, Users } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionHeader } from "@/components/section-header"

const highlights = [
  {
    icon: Flame,
    title: "Traditioneel bereid",
    description:
      "Authentieke Ethiopische en Eritrese recepten, langzaam gekookt met specerijen en injera.",
  },
  {
    icon: Users,
    title: "Samen aan tafel",
    description:
      "De Habesha-manier van eten — gedeelde schotels, warme sfeer en echte gastvrijheid.",
  },
  {
    icon: Coffee,
    title: "Koffieceremonie",
    description:
      "Verse Habesha-koffie en traditionele ceremonies voor 2 tot 8 personen.",
  },
]

export function HighlightsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Waarom Merhaba"
            title="Meer dan alleen een maaltijd"
            description="Een plek waar cultuur, smaak en gemeenschap samenkomen in het hart van Apeldoorn."
          />
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, i) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={item.title} delay={i * 100}>
                <article className="card-hover group h-full rounded-2xl border border-border bg-secondary/40 p-6 md:p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
