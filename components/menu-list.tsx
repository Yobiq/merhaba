import Image from "next/image"
import type { MenuSection as MenuSectionType } from "@/lib/menu-data"

interface MenuListProps {
  section: MenuSectionType
  id?: string
}

export function MenuList({ section, id }: MenuListProps) {
  return (
    <section id={id ?? section.id} className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="menu-heading mb-12">
          <b>{section.title}</b>
        </h2>

        <div className="space-y-10">
          {section.items.map((item) => (
            <article
              key={item.id}
              className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="relative mx-auto h-56 w-56 shrink-0 overflow-hidden rounded-full sm:mx-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </div>

              <div className="flex-1 sm:px-4">
                <h3 className="mb-2 text-xl font-normal text-foreground md:text-2xl">
                  {item.name}
                </h3>
                <p className="mb-3 text-base leading-relaxed text-foreground/80">
                  {item.description}
                </p>
                <p className="text-lg font-bold text-primary">Prijs: {item.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
