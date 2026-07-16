import Image from "next/image";
import { ButtonLink } from "@/component/Button";
import { Container } from "@/component/Container";
import { SectionHeader } from "@/component/SectionHeader";
import { contactLinks, credibilitySignals } from "@/lib/site-data";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F3F1ED] py-14 text-[#080808] sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="relative overflow-hidden border border-black/12 bg-white">
            <div className="relative aspect-[4/3] sm:aspect-[4/5]">
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
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#3d3d3d] sm:mt-6 sm:text-lg sm:leading-8">
              Shree Subedi is a web developer from Nepal focused on building modern,
              responsive, and scalable digital experiences. He works with React, Next.js,
              TypeScript, and Tailwind CSS and continues improving through practical projects.
            </p>

            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
              {credibilitySignals.map((signal) => (
                <div key={signal.label} className="border border-black/12 bg-white p-3.5 sm:p-4">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#E10600] sm:text-xs sm:tracking-[0.22em]">
                    {signal.label}
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-[#080808]">{signal.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
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
                    className="inline-flex min-h-11 items-center gap-2 rounded-md border border-black/12 bg-white px-3 py-2.5 text-xs font-black uppercase tracking-[0.1em] text-[#080808] transition hover:border-[#E10600] hover:text-[#E10600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] sm:min-h-12 sm:px-4 sm:py-3 sm:text-sm sm:tracking-[0.12em]"
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
