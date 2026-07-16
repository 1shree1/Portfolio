import Image from "next/image";
import { ButtonLink } from "@/component/Button";
import { Container } from "@/component/Container";
import { SectionHeader } from "@/component/SectionHeader";
import { contactLinks, credibilitySignals } from "@/lib/site-data";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F3F1ED] py-20 text-[#080808] sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="relative overflow-hidden border border-black/12 bg-white">
            <div className="relative aspect-[4/5]">
              <Image
                src="/shree.jpg"
                alt="Portrait of Shree Subedi."
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-[52%_62%]"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <SectionHeader label="About" title="About Shree Subedi" tone="light" />
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#3d3d3d]">
              Shree Subedi is a web developer from Nepal focused on building modern,
              responsive, and scalable digital experiences. He works with React, Next.js,
              TypeScript, and Tailwind CSS and continues improving through practical projects.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {credibilitySignals.map((signal) => (
                <div key={signal.label} className="border border-black/12 bg-white p-4">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#E10600]">
                    {signal.label}
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-[#080808]">{signal.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/#contact" variant="dark">
                Let&apos;s Talk
              </ButtonLink>
              {contactLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex min-h-12 items-center gap-2 rounded-md border border-black/12 bg-white px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#080808] transition hover:border-[#E10600] hover:text-[#E10600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600]"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    {link.label}
                  </a>
                );
              })}
            </div>
            {/* TODO: Add a resume download button here when a verified resume file is added to /public. */}
          </div>
        </div>
      </Container>
    </section>
  );
}
