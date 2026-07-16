import { Mail } from "lucide-react";
import ContactForm from "@/component/ContactForm";
import { Container } from "@/component/Container";
import { SectionHeader } from "@/component/SectionHeader";
import { contactLinks, site } from "@/lib/site-data";

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#080808] py-14 text-white sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute bottom-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#E10600]/16 blur-3xl" />
        <div className="absolute inset-0 hero-grain opacity-50" />
      </div>

      <Container className="relative">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeader
              label="Contact"
              title="Have a website idea? Let's turn it into something real."
              description="Tell me what you are building, who it is for, and what result you need."
            />

            <div className="mt-6 grid gap-3 sm:mt-8">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-3 border border-white/12 bg-[#191919] p-3.5 transition hover:border-[#E10600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2A1A] sm:gap-4 sm:p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#E10600] text-white sm:h-11 sm:w-11">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#929292] sm:text-xs sm:tracking-[0.2em]">
                    Email
                  </span>
                  <span className="block break-all text-sm font-black text-white group-hover:text-[#FF2A1A]">
                    {site.email}
                  </span>
                </span>
              </a>

              <div className="grid gap-3 sm:grid-cols-2">
                {contactLinks
                  .filter((link) => link.label !== "Email")
                  .map((link) => {
                    const Icon = link.icon;

                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    className="flex min-h-12 items-center gap-3 border border-white/12 bg-[#191919] px-3.5 py-3 text-xs font-black uppercase tracking-[0.1em] text-white transition hover:border-[#E10600] hover:text-[#FF2A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2A1A] sm:min-h-16 sm:px-4 sm:text-sm sm:tracking-[0.12em]"
                      >
                        <Icon className="h-5 w-5 text-[#E10600]" aria-hidden />
                        {link.label}
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>

          <div className="border border-white/12 bg-[#191919] p-4 shadow-2xl shadow-black/30 sm:p-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
