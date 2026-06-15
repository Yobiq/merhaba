import Link from "next/link"

interface VeganCtaProps {
  variant?: "to-veg" | "to-meat"
}

export function VeganCta({ variant = "to-veg" }: VeganCtaProps) {
  const isToVeg = variant === "to-veg"

  return (
    <section className="bg-secondary py-12 text-center">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="mb-6 text-xl font-bold md:text-2xl">
          <span className="highlight">
            {isToVeg
              ? "Voor vegan voedsel verzoeken wij u op onderstaande knop te drukken."
              : "Voor vleesgerechten verzoeken wij u op onderstaande knop te drukken."}
          </span>
        </h2>
        <Link href={isToVeg ? "/vegetarisch" : "/#menu"} className="btn-primary">
          {isToVeg ? "Groenten gerechten" : "Vleesgerechten"}
        </Link>
      </div>
    </section>
  )
}
