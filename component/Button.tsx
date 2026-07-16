import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "dark" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-[#E10600] bg-[#E10600] text-white shadow-[0_18px_40px_rgba(225,6,0,0.28)] hover:border-[#FF2A1A] hover:bg-[#FF2A1A]",
  secondary:
    "border border-white/20 bg-white text-[#080808] hover:border-white hover:bg-[#F3F1ED]",
  dark:
    "border border-black/15 bg-[#080808] text-white hover:bg-[#E10600] hover:border-[#E10600]",
  ghost:
    "border border-white/15 bg-white/[0.03] text-white hover:border-[#E10600] hover:bg-[#E10600]/12",
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  showArrow?: boolean;
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  showArrow = true,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-black uppercase tracking-[0.12em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2A1A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]",
        variants[variant],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {showArrow ? <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" aria-hidden /> : null}
    </a>
  );
}

export function buttonClassName(variant: ButtonVariant = "primary", className?: string) {
  return cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-black uppercase tracking-[0.12em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2A1A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]",
    variants[variant],
    className,
  );
}
