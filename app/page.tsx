import { ArchiveTimeline } from "@/components/home/ArchiveTimeline";
import { Hero } from "@/components/home/Hero";
import { SelectedPieces } from "@/components/home/SelectedPieces";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SelectedPieces />
      <ArchiveTimeline />
      <Footer />
    </main>
  );
}
