import type { Metadata } from "next";
import AnnouncementBar from "@/component/AnnouncementBar";
import ContactSection from "@/component/ContactSection";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import ProjectsSection from "@/component/ProjectsSection";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Shree Subedi, including a personal portfolio, bus ticketing app, and ShopCircuit.",
  alternates: {
    canonical: "/mywork",
  },
};

export default function MyWorkPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
