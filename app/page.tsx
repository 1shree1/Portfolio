import AboutSection from "@/component/AboutSection";
import AnnouncementBar from "@/component/AnnouncementBar";
import ContactSection from "@/component/ContactSection";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import OpportunitySection from "@/component/OpportunitySection";
import PrinciplesSection from "@/component/PrinciplesSection";
import ProcessSection from "@/component/ProcessSection";
import ProjectsSection from "@/component/ProjectsSection";
import ServicesSection from "@/component/ServicesSection";
import SkillsSection from "@/component/SkillsSection";
import TechnologyStrip from "@/component/TechnologyStrip";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <TechnologyStrip />
        <ServicesSection />
        <ProjectsSection />
        <PrinciplesSection />
        <ProcessSection />
        <AboutSection />
        <SkillsSection />
        <OpportunitySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
