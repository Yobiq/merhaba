"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "Over ons" },
  { href: "/#menu", label: "Menu" },
  { href: "/reservation", label: "Reserveren" },
  { href: "/vegetarisch", label: "Vegan voedsel" },
  { href: "/#contact", label: "Contact" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 shadow-sm backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/logo.jpeg"
            alt="Merhaba Habesha Restaurant"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-secondary-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-white transition-all lg:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <ul className="space-y-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-secondary-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
