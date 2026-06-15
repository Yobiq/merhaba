import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
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
      <AboutSection />
      <CategoriesSection />
      <VeganCta variant="to-veg" />
      <MenuList section={meatMenu} id="menu" />
      <LocationSection />
      <Footer />
    </main>
  )
}
