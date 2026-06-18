import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { foodCategories } from "@/lib/menu-data"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionHeader } from "@/components/section-header"

export function CategoriesSection() {
  return (
    <section id="soorten" className="section-padding bg-white">
      <div className="container-site">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Ons aanbod"
            title="Soorten eten en drinken"
            description="Van pittige vleesgerechten tot vegan combi's en traditionele Habesha-koffie."
          />
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {foodCategories.map((category, i) => (
            <ScrollReveal key={category.title} delay={i * 100}>
              <article className="card-hover group relative overflow-hidden rounded-2xl shadow-md">
                <div className="relative aspect-[4/5] sm:aspect-[4/3]">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="mb-3 text-xl font-bold md:text-2xl">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={category.href}
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#117964]"
                      >
                        Bekijk
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <a
                        href={category.learnMore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/15"
                      >
                        Meer info
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
