"use client";

import { useEffect } from "react";

const titleSelector = "main h1, main h2, main h3, main h4";

export function TitleReveal() {
  useEffect(() => {
    const titles = Array.from(document.querySelectorAll<HTMLElement>(titleSelector));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    titles.forEach((title) => title.classList.add("title-reveal"));

    if (prefersReducedMotion) {
      titles.forEach((title) => title.classList.add("title-reveal--visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("title-reveal--visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 },
    );

    titles.forEach((title) => observer.observe(title));

    return () => observer.disconnect();
  }, []);

  return null;
}
