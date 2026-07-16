import type { Metadata } from "next";
import AboutSection from "@/component/AboutSection";
import AnnouncementBar from "@/component/AnnouncementBar";
import ContactSection from "@/component/ContactSection";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import SkillsSection from "@/component/SkillsSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Shree Subedi, a web developer from Nepal focused on modern responsive websites.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
