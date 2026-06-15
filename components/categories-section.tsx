import Image from "next/image"
import Link from "next/link"
import { foodCategories } from "@/lib/menu-data"

export function CategoriesSection() {
  return (
    <section id="soorten" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-title mb-12 uppercase">Soorten eten en drinken</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {foodCategories.map((category) => (
            <article key={category.title} className="group relative overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="mb-4 px-4 text-center text-xl font-semibold text-white md:text-2xl">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Link href={category.href} className="btn-primary text-xs">
                      Bekijk
                    </Link>
                    <a
                      href={category.learnMore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary bg-white text-foreground hover:bg-white/90"
                    >
                      Meer info
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
