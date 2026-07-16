import { technologies } from "@/lib/site-data";

export default function TechnologyStrip() {
  return (
    <section className="border-y border-white/10 bg-[#111111] text-white" aria-label="Technology capabilities">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-4 sm:grid-cols-4 sm:px-6 lg:grid-cols-8 lg:px-8">
        {technologies.map((technology) => (
          <div
            key={technology}
            className="flex min-h-14 items-center justify-center border border-white/10 bg-white/[0.03] px-3 text-center text-xs font-black uppercase tracking-[0.14em] text-[#D5D5D5]"
          >
            {technology}
          </div>
        ))}
      </div>
    </section>
  );
}
