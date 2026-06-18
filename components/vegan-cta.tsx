import Link from "next/link"
import { ArrowRight, Leaf, UtensilsCrossed } from "lucide-react"

interface VeganCtaProps {
  variant?: "to-veg" | "to-meat"
}

export function VeganCta({ variant = "to-veg" }: VeganCtaProps) {
  const isToVeg = variant === "to-veg"
  const Icon = isToVeg ? Leaf : UtensilsCrossed

  return (
    <section className="relative overflow-hidden bg-primary py-14 text-white md:py-16">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-black/10 blur-3xl" />

      <div className="container-site relative text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
          <Icon className="h-7 w-7" />
        </div>
        <h2 className="mx-auto mb-6 max-w-2xl text-xl font-bold md:text-2xl">
          {isToVeg
            ? "Op zoek naar vegan voedsel en traditionele dranken?"
            : "Liever onze vleesgerechten proberen?"}
        </h2>
        <Link
          href={isToVeg ? "/vegetarisch" : "/#menu"}
          className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
        >
          {isToVeg ? "Groenten gerechten" : "Vleesgerechten"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
