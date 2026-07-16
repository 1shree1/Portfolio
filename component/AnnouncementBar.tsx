import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/component/Container";

export default function AnnouncementBar() {
  return (
    <div className="relative z-50 border-b border-white/10 bg-[#E10600] text-white">
      <Container className="flex min-h-10 flex-col items-center justify-center gap-1 py-2 text-center text-[0.7rem] font-black uppercase tracking-[0.18em] sm:min-h-9 sm:flex-row sm:justify-between sm:text-xs">
        <span>Open to freelance projects and collaborations</span>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E10600]"
        >
          Start a project
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </Container>
    </div>
  );
}
