import Image from "next/image";
import Link from "next/link";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/component/Button";
import { Container } from "@/component/Container";

const heroSignals = ["Fast-loading", "Responsive", "Clear CTA", "Built to convert"];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#080808] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-[55%] top-16 h-[34rem] w-[34rem] rounded-full bg-[#E10600]/18 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_26%),linear-gradient(180deg,#080808_0%,#111111_62%,#080808_100%)]" />
        <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
        <div className="absolute inset-0 hero-grain" />
      </div>

      <Container className="grid min-h-[calc(100svh-6.5rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-[#FF2A1A]">
            Web Developer · Nepal
          </p>
          <h1 className="max-w-5xl text-[clamp(2.35rem,8vw,6.8rem)] font-black uppercase leading-[0.9] tracking-normal">
            <span className="block">I build fast</span>
            <span className="block">websites</span>
            <span className="block">that turn</span>
            <span className="block">attention into</span>
            <span className="block">action.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#D5D5D5] sm:text-xl">
            I design and develop responsive websites for businesses, startups, and personal
            brands using React, Next.js, TypeScript, and modern web technologies.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/#contact">Start a Project</ButtonLink>
            <ButtonLink href="/#work" variant="ghost">
              View My Work
            </ButtonLink>
          </div>

          <p className="mt-6 max-w-2xl text-sm font-semibold uppercase tracking-[0.14em] text-[#F3F1ED]">
            Available for freelance work, remote opportunities, internships, and collaborations.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
            {heroSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-3 text-sm font-bold text-[#D5D5D5]">
                <CheckCircle2 className="h-5 w-5 text-[#E10600]" aria-hidden />
                {signal}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#E10600]/18 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-lg border border-white/12 bg-[#191919] shadow-2xl shadow-black/40">
            <div className="relative aspect-[4/5] min-h-[32rem]">
              <Image
                src="/shree.jpg"
                alt="Portrait of Shree Subedi working in a dark cinematic setup."
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[52%_64%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/12 bg-black/72 p-4 backdrop-blur-md sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[#FF2A1A]">
                    Current Focus
                  </p>
                  <p className="mt-1 text-lg font-black uppercase text-white">
                    Conversion-focused websites
                  </p>
                </div>
                <Link
                  href="/#services"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/15 text-white transition hover:border-[#E10600] hover:bg-[#E10600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2A1A]"
                  aria-label="Go to services"
                >
                  <ArrowDown className="h-5 w-5" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
