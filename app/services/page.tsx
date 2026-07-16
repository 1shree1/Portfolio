import type { Metadata } from "next";
import AnnouncementBar from "@/component/AnnouncementBar";
import ContactSection from "@/component/ContactSection";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import ProcessSection from "@/component/ProcessSection";
import ServicesSection from "@/component/ServicesSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development services from Shree Subedi: business websites, landing pages, web applications, and website redesigns.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
