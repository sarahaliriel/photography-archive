"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Hero } from "@/components/home/Hero";

export function HomeReveal() {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const layer = useRef<HTMLDivElement>(null);
  const phase = useRef<"idle" | "revealing" | "navigating">("idle");
  const origin = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const start = (event: Event) => {
      if (phase.current !== "idle") return;
      event.preventDefault();
      const detail = (event as CustomEvent<{ x: number; y: number }>).detail;
      origin.current = detail;
      phase.current = "revealing";
      setActive(true);
    };
    window.addEventListener("archive:home-reveal", start);
    return () => window.removeEventListener("archive:home-reveal", start);
  }, []);

  useEffect(() => {
    if (!active || !layer.current || phase.current !== "revealing") return;
    const node = layer.current;
    const { x, y } = origin.current;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) + 10;
    node.style.setProperty("--reveal-x", `${x}px`);
    node.style.setProperty("--reveal-y", `${y}px`);
    const animation = node.animate(
      [{ clipPath: `circle(0px at ${x}px ${y}px)` }, { clipPath: `circle(${radius}px at ${x}px ${y}px)` }],
      { duration: 1050, easing: "cubic-bezier(.3,.65,.18,1)", fill: "forwards" }
    );
    animation.onfinish = () => {
      node.style.clipPath = `circle(150vmax at ${x}px ${y}px)`;
      phase.current = "navigating";
      router.push("/");
    };
    return () => { animation.onfinish = null; animation.cancel(); };
  }, [active, router]);

  useEffect(() => {
    if (pathname !== "/" || phase.current !== "navigating") return;
    // Keep the bridge until the routed hero's own optimized image is paintable.
    const pendingFrames: number[] = [];
    let cancelled = false;
    pendingFrames.push(requestAnimationFrame(() => {
      pendingFrames.push(requestAnimationFrame(() => {
        const routedImage = document.querySelector<HTMLImageElement>("main > .hero .hero__image");
        void (routedImage?.decode().catch(() => undefined) ?? Promise.resolve()).then(() => {
          if (cancelled) return;
          const animation = layer.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, fill: "forwards" });
          if (animation) animation.onfinish = () => { phase.current = "idle"; setActive(false); };
          else { phase.current = "idle"; setActive(false); }
        });
      }));
    }));
    return () => { cancelled = true; pendingFrames.forEach(cancelAnimationFrame); };
  }, [pathname]);

  if (!active) return null;
  return <div ref={layer} className="home-reveal" aria-hidden="true" inert><Hero /></div>;
}
