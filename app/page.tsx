import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { InfoStrip } from "@/components/info-strip"
import { AboutSection } from "@/components/about-section"
import { HighlightsSection } from "@/components/highlights-section"
import { CategoriesSection } from "@/components/categories-section"
import { VeganCta } from "@/components/vegan-cta"
import { MenuList } from "@/components/menu-list"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import { meatMenu } from "@/lib/menu-data"

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <InfoStrip />
      <AboutSection />
      <HighlightsSection />
      <CategoriesSection />
      <VeganCta variant="to-veg" />
      <MenuList section={meatMenu} id="menu" />
      <LocationSection />
      <Footer />
    </main>
  )
}
