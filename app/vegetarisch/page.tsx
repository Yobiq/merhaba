import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { PageHero } from "@/components/page-hero"
import { MenuList } from "@/components/menu-list"
import { VeganCta } from "@/components/vegan-cta"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionHeader } from "@/components/section-header"
import { vegetarianMenu, drinksMenu } from "@/lib/menu-data"

export default function VegetarianPage() {
  return (
    <main>
      <Navigation />

      <PageHero
        eyebrow="Vegan & vegetarisch"
        title="Groenten gerechten & dranken"
        subtitle="Ontdek onze veganistische Habesha-keuken en traditionele koffieceremonie."
      />

      <section className="section-padding bg-secondary/60">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <SectionHeader
                align="left"
                eyebrow="Onze cultuur"
                title="De wereld van veganisme"
                description="Onze cultuur heeft veel bijgedragen aan de wereld van veganisme. Onze voorouders gaven ons het lekkerste veganistische eten, de beste koffie en een prachtige ceremonie om met vrienden en familie samen te komen."
              />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                <Image
                  src="/images/about.jpg"
                  alt="Traditionele Habesha keuken"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Traditie"
              title="Koffieceremonie"
              description="Eeuwenoude Habesha-koffietraditie — versgemalen bonen uit de hooglanden van Ethiopië en Eritrea."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <iframe
                src="https://www.youtube.com/embed/H67EeRXKPvQ"
                title="Habesha koffieceremonie"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <VeganCta variant="to-meat" />
      <MenuList section={vegetarianMenu} id="menu" />

      <section className="bg-secondary/60 py-10">
        <div className="container-site text-center">
          <p className="eyebrow">Dranken</p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Onze traditionele dranken
          </h2>
        </div>
      </section>

      <MenuList section={drinksMenu} id="dranken" showHeader={false} />
      <LocationSection />
      <Footer />
    </main>
  )
}
