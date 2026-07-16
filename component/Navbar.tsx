"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/component/Button";
import { Container } from "@/component/Container";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition duration-300",
        scrolled || menuOpen
          ? "border-white/10 bg-[#080808]/95 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "border-white/10 bg-[#080808]/70 backdrop-blur-md",
      )}
    >
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <Link
          href="/#top"
          onClick={closeMenu}
          className="group inline-flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2A1A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
          aria-label="Shree Subedi home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white text-sm font-black text-[#080808]">
            SS
          </span>
          <span className="text-sm font-black uppercase tracking-[0.18em] text-white transition group-hover:text-[#FF2A1A]">
            Shree Subedi
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-sm text-xs font-black uppercase tracking-[0.16em] text-[#D5D5D5] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2A1A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#E10600] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/#contact" className="min-h-11 px-4 py-2 text-xs" showArrow>
            Start a Project
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white transition hover:border-[#E10600] hover:bg-[#E10600]/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2A1A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={cn(
          "grid overflow-hidden border-t border-white/10 bg-[#080808] transition-all duration-300 md:hidden",
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <nav className="min-h-0" aria-label="Mobile navigation">
          <Container className="flex flex-col gap-3 py-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-md border border-white/10 px-4 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#E10600] hover:bg-[#E10600]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2A1A]"
              >
                {item.label}
              </a>
            ))}
            <ButtonLink href="/#contact" onClick={closeMenu} className="mt-2 w-full">
              Start a Project
            </ButtonLink>
          </Container>
        </nav>
      </div>
    </header>
  );
}
