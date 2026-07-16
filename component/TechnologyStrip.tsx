import { technologies } from "@/lib/site-data";

export default function TechnologyStrip() {
  return (
    <section className="border-y border-white/10 bg-[#111111] text-white" aria-label="Technology capabilities">
      <div className="scrollbar-hidden mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-px sm:px-6 sm:py-4 lg:grid-cols-8 lg:px-8">
        {technologies.map((technology) => (
          <div
            key={technology}
            className="flex min-h-11 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03] px-3 text-center text-[0.68rem] font-black uppercase tracking-[0.12em] text-[#D5D5D5] sm:min-h-14 sm:shrink sm:text-xs sm:tracking-[0.14em]"
          >
            {technology}
          </div>
        ))}
      </div>
    </section>
  );
}
