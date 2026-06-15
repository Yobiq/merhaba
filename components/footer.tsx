import Link from "next/link"
import { contact, openingHours } from "@/lib/menu-data"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-3">
        <div className="text-center">
          <h3 className="mb-4 text-lg font-semibold">
            <span className="highlight">Volg ons op sociale media</span>
          </h3>
          <p className="mb-6 text-sm text-white/80">
            We plaatsen regelmatig video&apos;s op onze sociale media, neem gerust een kijkje.
          </p>
          <div className="flex justify-center gap-4 text-sm font-medium">
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Facebook
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Instagram
            </a>
            <a
              href={contact.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              TikTok
            </a>
          </div>
        </div>

        <div className="text-center">
          <h3 className="mb-4 text-lg font-semibold">
            <span className="highlight">Adres</span>
          </h3>
          <div className="space-y-3 text-sm text-white/90">
            <p>
              <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                {contact.address}
              </a>
            </p>
            <p>
              <a href={`tel:${contact.phone}`} className="hover:text-primary">
                {contact.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} className="hover:text-primary">
                {contact.email}
              </a>
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="mb-4 text-lg font-semibold">
            <span className="highlight">Reserveren</span>
          </h3>
          <p className="mb-4 text-sm text-white/80">
            Plan je bezoek bij ons in Apeldoorn.
          </p>
          <Link
            href="/reservation"
            className="btn-primary mb-8 inline-flex bg-primary text-sm hover:bg-[#117964]"
          >
            Tafel reserveren
          </Link>
          <h3 className="mb-4 text-lg font-semibold">
            <span className="highlight">Openingstijden</span>
          </h3>
          <table className="mx-auto w-full max-w-xs text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="py-2 text-left font-semibold">Dag</th>
                <th className="py-2 text-right font-semibold">Tijd</th>
              </tr>
            </thead>
            <tbody>
              {openingHours.map((row) => (
                <tr key={row.day} className="border-b border-white/10">
                  <td className="py-2 text-left text-white/80">{row.day}</td>
                  <td className="py-2 text-right">{row.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-4 pt-8 text-center text-sm text-white/60 sm:px-6">
        <p>
          © {new Date().getFullYear()} Merhaba Habesha Restaurant. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  )
}
