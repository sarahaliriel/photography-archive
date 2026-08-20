import { ArchiveTimeline } from "@/components/home/ArchiveTimeline";
import { FinalFrame } from "@/components/home/FinalFrame";
import { Hero } from "@/components/home/Hero";
import { SelectedPieces } from "@/components/home/SelectedPieces";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SelectedPieces />
      <ArchiveTimeline />
      <FinalFrame />
    </main>
  );
}
