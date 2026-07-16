import { ButtonLink } from "@/component/Button";
import { Container } from "@/component/Container";

export default function OpportunitySection() {
  return (
    <section className="bg-[#E10600] py-16 text-white sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-white/80">
            Opportunities
          </p>
          <h2 className="mt-3 max-w-4xl text-[clamp(2rem,5vw,5rem)] font-black uppercase leading-none tracking-normal">
            Ready to build something useful?
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
            I&apos;m open to freelance projects, internships, remote opportunities, and
            collaborations where I can contribute, learn, and deliver real value.
          </p>
        </div>
        <ButtonLink
          href="/#contact"
          variant="dark"
          className="w-fit min-w-[12rem] justify-self-start border-white/25 bg-[#080808] !text-white hover:border-white hover:bg-white hover:!text-[#080808] focus-visible:ring-white focus-visible:ring-offset-[#E10600] lg:justify-self-end [&>span]:text-current [&>svg]:text-current"
        >
          Let&apos;s Talk
        </ButtonLink>
      </Container>
    </section>
  );
}
