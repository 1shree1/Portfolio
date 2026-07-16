import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  tone = "dark",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        tone === "light" ? "text-[#080808]" : "text-white",
      )}
    >
      <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#E10600]">
        {label}
      </p>
      <h2 className="text-pretty text-[clamp(2rem,5vw,4.8rem)] font-black uppercase leading-[0.96] tracking-normal">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-7 sm:text-lg",
            tone === "light" ? "text-[#3d3d3d]" : "text-[#D5D5D5]",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
