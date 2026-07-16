import { Container } from "@/component/Container";
import { SectionHeader } from "@/component/SectionHeader";
import { processSteps } from "@/lib/site-data";

export default function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#111111] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute left-0 top-1/4 h-72 w-72 bg-[#E10600]/12 blur-3xl" />
      </div>
      <Container className="relative">
        <SectionHeader
          label="Process"
          title="From idea to working website"
          description="A clear workflow keeps the project grounded before visual polish gets added."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className="relative border border-white/12 bg-[#191919] p-6"
            >
              {index < processSteps.length - 1 ? (
                <span
                  className="absolute -right-2 top-10 hidden h-px w-4 bg-[#E10600] lg:block"
                  aria-hidden
                />
              ) : null}
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#E10600]">
                {step.number}
              </p>
              <h3 className="mt-8 text-2xl font-black uppercase leading-tight">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#D5D5D5]">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
