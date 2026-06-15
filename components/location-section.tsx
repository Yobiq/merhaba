export function LocationSection() {
  return (
    <section id="locatie" className="bg-secondary py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-title mb-10 uppercase">Onze locatie</h2>

        <div className="relative w-full overflow-hidden rounded-lg shadow-md" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.689466609976!2d5.960658176547213!3d52.21269045893659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7c7af34d87cdd%3A0x6160a1aa4caf62e5!2sMerhaba%20Habesha%20restaurant!5e0!3m2!1sen!2snl!4v1683571797718!5m2!1sen!2snl"
            title="Merhaba Habesha Restaurant op Google Maps"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </section>
  )
}
