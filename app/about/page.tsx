import type { Metadata } from "next";

import { AboutIntro } from "@/components/about/AboutIntro";
import { ClosingSection } from "@/components/about/ClosingSection";
import { PiecesOfMeSection } from "@/components/about/PiecesOfMeSection";
import { ThingsINoticeSection } from "@/components/about/ThingsINoticeSection";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "About — Sarah Aliriel",
  description: "About Sarah Aliriel and her visual photography archive.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <Navbar tone="dark" />
      <AboutIntro />
      <PiecesOfMeSection />
      <ThingsINoticeSection />
      <ClosingSection />
    </main>
  );
}
