import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { MenuList } from "@/components/menu-list"
import { VeganCta } from "@/components/vegan-cta"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import { vegetarianMenu, drinksMenu } from "@/lib/menu-data"

export default function VegetarianPage() {
  return (
    <main>
      <Navigation />

      <section
        className="relative flex min-h-[45vh] items-center justify-center bg-cover bg-center bg-no-repeat pt-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.35), rgba(255,255,255,0.55)), url('/images/hero-bg.jpg')",
        }}
      >
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="mb-4 text-3xl font-semibold uppercase tracking-wide sm:text-4xl">
            Merhaba Habesha Restaurant
          </h1>
          <p className="text-lg font-semibold">Het soort voedsel dat je niet kunt weerstaan.</p>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-lg font-semibold">
              <span className="highlight">Onze cultuur en de wereld van veganisme</span>
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Onze cultuur heeft veel bijgedragen aan de wereld van veganisme en onze voorouders
              zijn erin geslaagd om ons het lekkerste veganistische eten ooit te geven. Ze hebben
              ons ook de meest hersenkrakende koffie geschonken en een prachtige koffieceremonie om
              met vrienden en familie te zitten en ideeën te bespreken.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src="/images/about.jpg"
              alt="Traditionele Habesha keuken"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="section-title mb-8">
            <span className="highlight">Koffieceremonie</span>
          </h2>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.youtube.com/embed/H67EeRXKPvQ"
              title="Habesha koffieceremonie"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <VeganCta variant="to-meat" />
      <MenuList section={vegetarianMenu} id="menu" />

      <section className="bg-secondary py-12 text-center">
        <h2 className="text-xl font-bold md:text-2xl">
          <span className="highlight">Hieronder vindt u onze traditionele dranken menu</span>
        </h2>
      </section>

      <MenuList section={drinksMenu} id="dranken" />
      <LocationSection />
      <Footer />
    </main>
  )
}
