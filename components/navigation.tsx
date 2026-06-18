"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/#about", label: "Over ons" },
  { href: "/#menu", label: "Menu" },
  { href: "/vegetarisch", label: "Vegan" },
  { href: "/#locatie", label: "Locatie" },
  { href: "/#contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const solid = !isHome || scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-border/60 bg-white/95 py-0 shadow-sm backdrop-blur-md"
          : "bg-transparent py-1"
      )}
    >
      <nav className="container-site flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.jpeg"
            alt="Merhaba Habesha"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover ring-2 ring-white/80"
            priority
          />
          <span
            className={cn(
              "hidden text-sm font-bold tracking-tight transition-colors sm:block",
              solid ? "text-foreground" : "text-white drop-shadow-sm"
            )}
          >
            Merhaba Habesha
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  solid
                    ? "text-secondary-foreground hover:bg-secondary hover:text-primary"
                    : "text-white/90 hover:bg-white/15 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <Link
              href="/reservation"
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                solid
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-[#117964]"
                  : "bg-white text-primary shadow-lg hover:bg-white/90"
              )}
            >
              Reserveren
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className={cn(
            "rounded-lg p-2.5 transition-colors lg:hidden",
            solid ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/15"
          )}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 bg-black/40 backdrop-blur-sm transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <div
        className={cn(
          "absolute left-0 right-0 top-full border-b border-border bg-white shadow-xl transition-all duration-300 lg:hidden",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        )}
      >
        <ul className="container-site space-y-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/reservation"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Tafel reserveren
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
