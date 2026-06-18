import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(17,121,100,0.55) 0%, rgba(22,160,131,0.45) 40%, rgba(24,22,22,0.75) 100%), url('/images/hero-bg.jpg')",
      }}
    >
      <div className="container-site relative z-10 pt-24 pb-32 text-center text-white">
        <p className="animate-hero-fade-up eyebrow mb-4 text-white/80">
          Ethiopisch & Eritrees · Apeldoorn
        </p>

        <h1 className="animate-hero-fade-up-delay mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Merhaba Habesha Restaurant
        </h1>

        <p className="animate-hero-fade-up-delay-2 mx-auto mb-10 max-w-2xl text-lg font-medium text-white/90 sm:text-xl md:text-2xl">
          Het soort voedsel dat je niet kunt weerstaan.
        </p>

        <div className="animate-hero-fade-up-delay-2 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/reservation" className="btn-primary min-w-[200px]">
            Reserveer een tafel
          </Link>
          <Link href="#menu" className="btn-secondary min-w-[200px]">
            Bekijk het menu
          </Link>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition-colors hover:text-white"
        aria-label="Scroll naar beneden"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Ontdek</span>
        <ChevronDown className="h-5 w-5 animate-scroll-hint" />
      </a>
    </section>
  )
}
