import { Container } from "@/component/Container";
import { SectionHeader } from "@/component/SectionHeader";
import { skillGroups } from "@/lib/site-data";

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-[#080808] py-14 text-white sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            label="Tools"
            title="Tools I use"
            description="A compact stack focused on modern frontend development, responsive interfaces, and maintainable component systems."
          />

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {skillGroups.map((group) => (
              <article key={group.title} className="border border-white/12 bg-[#191919] p-5 sm:p-6">
                <h3 className="text-lg font-black uppercase tracking-normal sm:text-xl">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2 sm:mt-6">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-1.5 text-xs font-bold text-[#D5D5D5] sm:px-3 sm:py-2 sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
