import Link from "next/link"
import { Clock, MapPin, Phone } from "lucide-react"
import { contact } from "@/lib/menu-data"

const items = [
  {
    icon: MapPin,
    label: "Apeldoorn",
    value: "Brinklaan 18",
    href: contact.mapsUrl,
  },
  {
    icon: Clock,
    label: "Geopend",
    value: "14:00 – 00:00",
  },
  {
    icon: Phone,
    label: "Reserveren",
    value: contact.phone,
    href: "/reservation",
  },
]

export function InfoStrip() {
  return (
    <section className="relative z-10 -mt-1 border-y border-border bg-white shadow-sm">
      <div className="mx-auto grid max-w-6xl divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {items.map((item) => {
          const Icon = item.icon
          const content = (
            <div className="flex items-center gap-4 px-6 py-5 transition-colors hover:bg-secondary/60">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-foreground">{item.value}</p>
              </div>
            </div>
          )

          if (item.href) {
            return (
              <Link key={item.label} href={item.href} className="block">
                {content}
              </Link>
            )
          }

          return <div key={item.label}>{content}</div>
        })}
      </div>
    </section>
  )
}
