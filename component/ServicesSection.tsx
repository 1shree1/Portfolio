import { ButtonLink } from "@/component/Button";
import { Container } from "@/component/Container";
import { SectionHeader } from "@/component/SectionHeader";
import { services } from "@/lib/site-data";

export function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col border border-black/12 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E10600] hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
      <div className="mb-8 flex items-start justify-between gap-4">
        <span className="text-sm font-black uppercase tracking-[0.2em] text-[#E10600]">
          0{index + 1}
        </span>
        <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#080808] text-white transition duration-300 group-hover:bg-[#E10600]">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
      </div>
      <h3 className="text-2xl font-black uppercase leading-tight text-[#080808]">{service.title}</h3>
      <p className="mt-4 text-sm leading-7 text-[#555]">{service.description}</p>
      <ul className="mt-6 space-y-3 text-sm font-semibold text-[#1f1f1f]">
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
    <section id="services" className="bg-[#F3F1ED] py-20 text-[#080808] sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
