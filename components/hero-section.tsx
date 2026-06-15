import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[55vh] items-center justify-center bg-cover bg-center bg-no-repeat pt-16"
      style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.35), rgba(255,255,255,0.55)), url('/images/hero-bg.jpg')" }}
    >
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="mb-4 text-3xl font-semibold uppercase tracking-wide sm:text-4xl md:text-5xl">
          Merhaba Habesha Restaurant
        </h1>
        <p className="mb-8 text-lg font-semibold sm:text-xl">
          Het soort voedsel dat je niet kunt weerstaan.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link href="/reservation" className="btn-primary">
            Reserveer
          </Link>
          <Link
            href="#menu"
            className="inline-flex items-center justify-center rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Menu
          </Link>
        </div>
      </div>
    </section>
  )
}
