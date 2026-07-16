"use client";

import Link from "next/link";
import { Container } from "@/component/Container";
import { contactLinks, navItems, site } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#080808] text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.1fr_0.9fr_1fr]">
        <div>
          <Link
            href="/#top"
            className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2A1A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            aria-label="Shree Subedi home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-sm font-black text-[#080808]">
              SS
            </span>
            <span className="text-sm font-black uppercase tracking-[0.18em]">Shree Subedi</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#D5D5D5]">
            Fast, modern, and conversion-focused websites for businesses, startups,
            and personal brands.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-black uppercase tracking-[0.24em] text-[#929292]">Navigation</h2>
          <ul className="mt-5 grid gap-3 text-sm font-bold text-[#D5D5D5]">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition hover:text-[#FF2A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2A1A]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.24em] text-[#929292]">Connect</h2>
          <ul className="mt-5 grid gap-3 text-sm font-bold text-[#D5D5D5]">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 break-all transition hover:text-[#FF2A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2A1A]"
                  >
                    <Icon className="h-4 w-4 text-[#E10600]" aria-hidden />
                    {link.label === "Email" ? site.email : link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-5">
        <Container className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#929292] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Shree Subedi. All rights reserved.</p>
          <p>Built with Next.js</p>
        </Container>
      </div>
    </footer>
  );
}
