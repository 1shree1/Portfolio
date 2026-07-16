import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { ButtonLink } from "@/component/Button";
import { Container } from "@/component/Container";
import { SectionHeader } from "@/component/SectionHeader";
import { projects, type IconComponent, type Project } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function ProjectLink({
  href,
  label,
  icon: Icon,
}: {
  href?: string;
  label: string;
  icon: IconComponent;
}) {
  if (!href) {
    return (
      <span className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-white/10 px-3 py-2 text-[0.7rem] font-black uppercase tracking-[0.1em] text-[#929292] sm:min-h-11 sm:text-xs sm:tracking-[0.12em]">
        {label} unavailable
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-white/15 px-3 py-2 text-[0.7rem] font-black uppercase tracking-[0.1em] text-white transition hover:border-[#E10600] hover:bg-[#E10600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2A1A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] sm:min-h-11 sm:text-xs sm:tracking-[0.12em]"
    >
      <Icon className="h-4 w-4" aria-hidden />
      {label}
    </a>
  );
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={cn(
        "group grid overflow-hidden border border-white/12 bg-[#191919] text-white transition duration-300 hover:border-[#E10600]/80",
        featured ? "lg:grid-cols-[1.08fr_0.92fr]" : "h-full",
      )}
    >
      <div className={cn("relative overflow-hidden bg-black", featured ? "aspect-[4/3] sm:min-h-[24rem]" : "aspect-[16/10] sm:aspect-[16/11]")}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={featured ? "(min-width: 1024px) 52vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className={cn(
            "object-cover transition duration-500 group-hover:scale-[1.03]",
            project.name === "Personal Portfolio" && "object-[50%_62%]",
          )}
          priority={featured}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/8 to-transparent" />
        <span className="absolute left-3 top-3 rounded-md border border-white/15 bg-black/70 px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-[0.14em] text-white backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs sm:tracking-[0.18em]">
          {project.status}
        </span>
      </div>

      <div className="flex flex-col p-5 sm:p-7">
        <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#FF2A1A] sm:text-xs sm:tracking-[0.28em]">Selected Project</p>
        <h3 className="mt-3 text-2xl font-black uppercase leading-none tracking-normal text-white sm:mt-4 sm:text-4xl">
          {project.name}
        </h3>

        <dl className="mt-5 grid gap-4 text-sm leading-6 text-[#D5D5D5] sm:mt-6 sm:gap-5">
          <div>
            <dt className="mb-1 text-xs font-black uppercase tracking-[0.12em] text-white sm:text-sm sm:tracking-[0.14em]">Purpose</dt>
            <dd>{project.purpose}</dd>
          </div>
          <div>
            <dt className="mb-1 text-xs font-black uppercase tracking-[0.12em] text-white sm:text-sm sm:tracking-[0.14em]">Problem it solves</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt className="mb-1 text-xs font-black uppercase tracking-[0.12em] text-white sm:text-sm sm:tracking-[0.14em]">Shree&apos;s role</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-1 text-[0.7rem] font-bold text-[#D5D5D5] sm:px-3 sm:text-xs"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
          <ProjectLink href={project.demoUrl} label="Live demo" icon={ExternalLink} />
          <ProjectLink href={project.githubUrl} label="GitHub" icon={Github} />
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const rest = projects.filter((project) => project.name !== featured.name);

  return (
    <section id="work" className="relative overflow-hidden bg-[#080808] py-14 text-white sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-0 top-0 h-80 w-80 bg-[#E10600]/14 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E10600] to-transparent" />
      </div>
      <Container className="relative">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeader
            label="Work"
            title="Selected projects"
            description="Project evidence from the existing portfolio, kept honest: no invented metrics, client names, or fake live links."
          />
          <ButtonLink href="/#contact" variant="ghost" className="w-fit">
            Contact Shree
          </ButtonLink>
        </div>

        <div className="mt-8 sm:mt-12">
          <ProjectCard project={featured} featured />
        </div>

        <div className="mt-4 grid gap-4 sm:mt-5 sm:gap-5 lg:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
