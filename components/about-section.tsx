export function AboutSection() {
  return (
    <section id="about" className="bg-secondary py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-lg font-semibold">
            <span className="highlight">Over ons en onze traditionele Habesha-gerechten</span>
          </p>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            We serveren traditionele Habesha-gerechten (Ethiopisch en Eritrees), een van de
            beste gerechten ter wereld. We hebben de wereld naar je toe gebracht — laten we wat
            van ons beste eten met je delen.
          </p>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md">
          <iframe
            src="https://www.youtube.com/embed/fYjgbebSsag"
            title="Merhaba Habesha Restaurant"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
