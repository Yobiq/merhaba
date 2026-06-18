import Image from "next/image"
import Link from "next/link"
import { contact, openingHours } from "@/lib/menu-data"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-white">
      <div className="container-site py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-5 inline-flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="Merhaba Habesha"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20"
              />
              <span className="text-lg font-bold">Merhaba Habesha</span>
            </Link>
            <p className="text-sm leading-relaxed text-white/70">
              Traditionele Ethiopische en Eritrese keuken in Apeldoorn. Het soort voedsel dat je
              niet kunt weerstaan.
            </p>
            <Link href="/reservation" className="btn-primary mt-6 text-xs">
              Tafel reserveren
            </Link>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                  {contact.address}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`} className="transition-colors hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Openingstijden
            </h3>
            <ul className="space-y-2 text-sm">
              {openingHours.slice(0, 3).map((row) => (
                <li key={row.day} className="flex justify-between gap-4 text-white/80">
                  <span>{row.day}</span>
                  <span className="text-white">{row.hours}</span>
                </li>
              ))}
              <li className="pt-1 text-xs text-white/50">Do – Zo: zelfde tijden</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Volg ons
            </h3>
            <p className="mb-4 text-sm text-white/70">
              Video&apos;s en updates op onze sociale media.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Facebook", href: contact.facebook },
                { label: "Instagram", href: contact.instagram },
                { label: "TikTok", href: contact.tiktok },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium transition-colors hover:border-primary hover:bg-primary/20 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Merhaba Habesha Restaurant</p>
          <div className="flex gap-4">
            <Link href="/#menu" className="hover:text-white/80">Menu</Link>
            <Link href="/vegetarisch" className="hover:text-white/80">Vegan</Link>
            <Link href="/reservation" className="hover:text-white/80">Reserveren</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
