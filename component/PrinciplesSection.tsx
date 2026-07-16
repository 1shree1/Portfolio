import { Container } from "@/component/Container";
import { SectionHeader } from "@/component/SectionHeader";
import { principles } from "@/lib/site-data";

export default function PrinciplesSection() {
  return (
    <section className="bg-white py-14 text-[#080808] sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              label="Value"
              title="Code is only useful when it solves the right problem."
              description="I focus on understanding the purpose of a website before choosing the tools. The result should look professional, load quickly, work on every screen, and make the next action obvious."
              tone="light"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="border border-black/12 bg-[#F3F1ED] p-5 transition duration-300 hover:border-[#E10600] sm:p-6"
                >
                  <div className="mb-5 flex items-center justify-between sm:mb-8">
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-[#E10600] sm:text-sm sm:tracking-[0.2em]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-5 w-5 text-[#E10600] sm:h-6 sm:w-6" aria-hidden />
                  </div>
                  <h3 className="text-lg font-black uppercase leading-tight sm:text-xl">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#4d4d4d] sm:mt-4 sm:leading-7">{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
