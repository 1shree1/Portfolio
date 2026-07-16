import type { Metadata } from "next";
import AnnouncementBar from "@/component/AnnouncementBar";
import ContactSection from "@/component/ContactSection";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Shree Subedi for freelance web development, remote opportunities, internships, or collaborations.",
  alternates: {
    canonical: "/contactme",
  },
};

export default function ContactMePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
