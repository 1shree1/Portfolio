import { ButtonLink } from "@/component/Button";
import { Container } from "@/component/Container";
import { SectionHeader } from "@/component/SectionHeader";
import { services } from "@/lib/site-data";

export function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col border border-black/12 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#E10600] hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] sm:p-6">
      <div className="mb-5 flex items-start justify-between gap-4 sm:mb-8">
        <span className="text-xs font-black uppercase tracking-[0.18em] text-[#E10600] sm:text-sm sm:tracking-[0.2em]">
          0{index + 1}
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#080808] text-white transition duration-300 group-hover:bg-[#E10600] sm:h-11 sm:w-11">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
      </div>
      <h3 className="text-xl font-black uppercase leading-tight text-[#080808] sm:text-2xl">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#555] sm:mt-4 sm:leading-7">{service.description}</p>
      <ul className="mt-4 space-y-2 text-sm font-semibold leading-6 text-[#1f1f1f] sm:mt-6 sm:space-y-3">
        {service.outcomes.map((outcome) => (
          <li key={outcome} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E10600]" aria-hidden />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#F3F1ED] py-14 text-[#080808] sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            label="Services"
            title="What I can build for you"
            description="Practical web solutions designed around your goals, not unnecessary complexity."
            tone="light"
          />
          <div className="lg:justify-self-end">
            <ButtonLink href="/#contact" variant="dark">
              Discuss Your Project
            </ButtonLink>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
