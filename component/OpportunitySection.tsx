import { ButtonLink } from "@/component/Button";
import { Container } from "@/component/Container";

export default function OpportunitySection() {
  return (
    <section className="bg-[#E10600] py-12 text-white sm:py-16 lg:py-20">
      <Container className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-white/80 sm:text-xs sm:tracking-[0.28em]">
            Opportunities
          </p>
          <h2 className="mt-3 max-w-4xl text-[clamp(1.9rem,9vw,5rem)] font-black uppercase leading-[0.96] tracking-normal sm:leading-none">
            Ready to build something useful?
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90 sm:mt-5 sm:text-lg">
            I&apos;m open to freelance projects, internships, remote opportunities, and
            collaborations where I can contribute, learn, and deliver real value.
          </p>
        </div>
        <ButtonLink
          href="/#contact"
          variant="dark"
          className="w-full justify-self-start border-white/25 bg-[#080808] !text-white hover:border-white hover:bg-white hover:!text-[#080808] focus-visible:ring-white focus-visible:ring-offset-[#E10600] sm:w-fit sm:min-w-[12rem] lg:justify-self-end [&>span]:text-current [&>svg]:text-current"
        >
          Let&apos;s Talk
        </ButtonLink>
      </Container>
    </section>
  );
}
