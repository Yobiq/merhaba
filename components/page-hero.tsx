interface PageHeroProps {
  title: string
  subtitle?: string
  eyebrow?: string
}

export function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  return (
    <section
      className="relative flex min-h-[42vh] items-center justify-center overflow-hidden bg-cover bg-center pt-16"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(22,160,131,0.88) 0%, rgba(17,121,100,0.75) 50%, rgba(24,22,22,0.6) 100%), url('/images/hero-bg.jpg')",
      }}
    >
      <div className="container-site relative z-10 py-16 text-center text-white md:py-20">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-xl text-base text-white/90 sm:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
