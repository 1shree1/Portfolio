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
      <p className="mb-2 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#E10600] sm:mb-3 sm:text-xs sm:tracking-[0.28em]">
        {label}
      </p>
      <h2 className="text-pretty text-[clamp(1.8rem,8.5vw,4.8rem)] font-black uppercase leading-[0.98] tracking-normal sm:leading-[0.96]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-sm leading-7 sm:mt-5 sm:text-lg",
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
