import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { TitleReveal } from "@/components/TitleReveal";
import { AmbientAudioProvider } from "@/components/layout/AmbientAudio";
import { HomeReveal } from "@/components/layout/HomeReveal";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

import "lenis/dist/lenis.css";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sarah Aliriel — Visual Archive",
  description: "A personal cinematic photography archive by Sarah Aliriel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <SmoothScroll />
        <TitleReveal />
        <AmbientAudioProvider>
          {children}
          <HomeReveal />
        </AmbientAudioProvider>
        <Analytics />
      </body>
    </html>
  );
}
