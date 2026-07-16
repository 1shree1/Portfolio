import { Container } from "@/component/Container";
import { SectionHeader } from "@/component/SectionHeader";
import { skillGroups } from "@/lib/site-data";

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-[#080808] py-20 text-white sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            label="Tools"
            title="Tools I use"
            description="A compact stack focused on modern frontend development, responsive interfaces, and maintainable component systems."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="border border-white/12 bg-[#191919] p-6">
                <h3 className="text-xl font-black uppercase tracking-normal">{group.title}</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-2 text-sm font-bold text-[#D5D5D5]"
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
