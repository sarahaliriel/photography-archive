"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Footer } from "@/components/layout/Footer";

const socialLinks = [
  { label: "instagram", href: "https://www.instagram.com/chazinhodociel" },
  { label: "github", href: "https://github.com/sarahaliriel" },
  { label: "linkedin", href: "https://www.linkedin.com/in/sarah-dumitrache/" },
] as const;

export function FinalFrame() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`final-frame${isVisible ? " final-frame--visible" : ""}`}
      aria-labelledby="final-frame-title"
    >
      <Image
        className="final-frame__image"
        src="/images/home/final/final-cta.jpg"
        alt=""
        fill
        sizes="100vw"
        quality={90}
      />
      <div className="final-frame__veil" aria-hidden="true" />

      <div className="final-frame__content">
        <h2 id="final-frame-title">there is still so much to see</h2>

        <nav className="final-frame__socials" aria-label="Social links">
          {socialLinks.map(({ label, href }) => (
            <a href={href} key={label} target="_blank" rel="noreferrer">
              {label}
            </a>
          ))}
        </nav>
      </div>

      <Footer />
    </section>
  );
}
