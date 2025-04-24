import Navbar from "@/component/Navbar";

// import { Button } from "@/components/ui/button";
import Footer from '@/component/Footer';
import Header from "@/component/Header";
// import Image from 'next/image';
import Projects from "@/component/Projects";
import Skills from "@/component/Skills";
import React from "react";
// import { ThemeToggle } from '@/component/theme-toggle';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}