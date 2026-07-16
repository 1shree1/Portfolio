import { Container } from "@/component/Container";
import { SectionHeader } from "@/component/SectionHeader";
import { processSteps } from "@/lib/site-data";

export default function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#111111] py-14 text-white sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute left-0 top-1/4 h-72 w-72 bg-[#E10600]/12 blur-3xl" />
      </div>
      <Container className="relative">
        <SectionHeader
          label="Process"
          title="From idea to working website"
          description="A clear workflow keeps the project grounded before visual polish gets added."
        />

        <div className="mt-8 grid gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className="relative border border-white/12 bg-[#191919] p-5 sm:p-6"
            >
              {index < processSteps.length - 1 ? (
                <span
                  className="absolute -right-2 top-10 hidden h-px w-4 bg-[#E10600] lg:block"
                  aria-hidden
                />
              ) : null}
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#E10600] sm:text-sm sm:tracking-[0.22em]">
                {step.number}
              </p>
              <h3 className="mt-4 text-xl font-black uppercase leading-tight sm:mt-8 sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#D5D5D5] sm:mt-4 sm:leading-7">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
