import { Container } from "@/component/Container";
import { SectionHeader } from "@/component/SectionHeader";
import { principles } from "@/lib/site-data";

export default function PrinciplesSection() {
  return (
    <section className="bg-white py-20 text-[#080808] sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              label="Value"
              title="Code is only useful when it solves the right problem."
              description="I focus on understanding the purpose of a website before choosing the tools. The result should look professional, load quickly, work on every screen, and make the next action obvious."
              tone="light"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="border border-black/12 bg-[#F3F1ED] p-6 transition duration-300 hover:border-[#E10600]"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-[#E10600]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-6 w-6 text-[#E10600]" aria-hidden />
                  </div>
                  <h3 className="text-xl font-black uppercase leading-tight">{principle.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#4d4d4d]">{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
