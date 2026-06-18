"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionHeader } from "@/components/section-header"
import type { MenuSection as MenuSectionType } from "@/lib/menu-data"

interface MenuListProps {
  section: MenuSectionType
  id?: string
  showHeader?: boolean
}

export function MenuList({ section, id, showHeader = true }: MenuListProps) {
  return (
    <section id={id ?? section.id} className="section-padding">
      <div className="container-site">
        {showHeader && (
          <ScrollReveal>
            <SectionHeader title={section.title} />
          </ScrollReveal>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {section.items.map((item, i) => (
            <ScrollReveal key={item.id} delay={(i % 4) * 75}>
              <article className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm sm:flex-row">
                <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:min-h-[200px] sm:w-44">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 192px, 160px"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-auto">
                    <h3 className="mb-2 text-lg font-semibold leading-snug text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <p className="mt-4 inline-flex w-fit rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                    {item.price}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
