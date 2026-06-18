import Link from "next/link"
import { Clock, MapPin, Navigation, Phone } from "lucide-react"
import { contact } from "@/lib/menu-data"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionHeader } from "@/components/section-header"

export function LocationSection() {
  return (
    <section id="locatie" className="section-padding bg-secondary/60">
      <div className="container-site">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Bezoek ons"
            title="Onze locatie"
            description="Midden in Apeldoorn — makkelijk bereikbaar en altijd welkom vanaf 14:00 uur."
          />
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Adres
                  </p>
                  <p className="mt-1 font-semibold">{contact.address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Openingstijden
                  </p>
                  <p className="mt-1 font-semibold">Dagelijks 14:00 – 00:00</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Telefoon
                  </p>
                  <a href={`tel:${contact.phone}`} className="mt-1 block font-semibold hover:text-primary">
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row">
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 text-center text-xs"
                >
                  <Navigation className="mr-1.5 inline h-4 w-4" />
                  Route
                </a>
                <Link href="/reservation" className="btn-outline flex-1 text-center text-xs">
                  Reserveren
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} className="lg:col-span-3">
            <div className="relative h-72 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 sm:h-96 lg:h-full lg:min-h-[380px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.689466609976!2d5.960658176547213!3d52.21269045893659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7c7af34d87cdd%3A0x6160a1aa4caf62e5!2sMerhaba%20Habesha%20restaurant!5e0!3m2!1sen!2snl!4v1683571797718!5m2!1sen!2snl"
                title="Merhaba Habesha Restaurant op Google Maps"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
