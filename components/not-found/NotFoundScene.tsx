"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const OPEN = "/images/logo-light.png";
const CLOSED = "/images/logo-light-hover.png";

export function NotFoundScene() {
  const router = useRouter();
  const scene = useRef<HTMLElement>(null);
  const eye = useRef<SVGSVGElement>(null);
  const aperture = useRef<SVGEllipseElement>(null);
  const inverse = useRef<SVGEllipseElement>(null);
  const openArtwork = useRef<SVGImageElement>(null);
  const progress = useRef(0);
  const motion = useRef<number>(0);
  const activated = useRef(false);
  const heroReady = useRef<Promise<void>>(Promise.resolve());

  useEffect(() => {
    router.prefetch("/");
    const hero = new window.Image();
    hero.src = "/images/home/hero/hero.jpg";
    heroReady.current = hero.decode().catch(() => undefined);
    const openEye = new window.Image();
    openEye.src = OPEN;
    void openEye.decode().catch(() => undefined);
    return () => cancelAnimationFrame(motion.current);
  }, [router]);

  const setOpening = (target: number, duration = 570, done?: () => void) => {
    cancelAnimationFrame(motion.current);
    const initial = progress.current;
    const started = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - started) / duration);
      const ease = 1 - Math.pow(1 - t, target ? 3 : 2.5);
      progress.current = initial + (target - initial) * ease;
      const radius = progress.current * 390;
      aperture.current?.setAttribute("ry", String(radius));
      inverse.current?.setAttribute("ry", String(radius));
      if (radius > 0) openArtwork.current?.setAttribute("opacity", "1");
      eye.current?.style.setProperty("--eye-open", String(progress.current));
      if (t < 1) motion.current = requestAnimationFrame(tick);
      else {
        if (target === 0) openArtwork.current?.setAttribute("opacity", "0");
        done?.();
      }
    };
    motion.current = requestAnimationFrame(tick);
  };

  const activate = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (activated.current) { event.preventDefault(); return; }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    event.preventDefault();
    activated.current = true;
    const rect = eye.current?.getBoundingClientRect();
    if (!rect) { router.push("/"); return; }
    // The painted pupil is slightly below the center of the square source artwork.
    const x = rect.left + rect.width * .5;
    const y = rect.top + rect.height * .51;
    scene.current?.classList.add("not-found--leaving");
    setOpening(1, Math.max(280, (1 - progress.current) * 550), () => {
      void heroReady.current.then(() => {
        const transition = new CustomEvent("archive:home-reveal", { cancelable: true, detail: { x, y } });
        window.dispatchEvent(transition);
        if (!transition.defaultPrevented) router.push("/");
      });
    });
  };

  const pointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || activated.current) return;
    const x = (event.clientX / innerWidth - .5) * 8;
    const y = (event.clientY / innerHeight - .5) * 8;
    scene.current?.style.setProperty("--photo-x", `${x}px`);
    scene.current?.style.setProperty("--photo-y", `${y}px`);
  };

  return <main ref={scene} className="not-found" onPointerMove={pointerMove}>
    <Image className="not-found__photo" src="/images/404/404-background.jpg" alt="" fill priority sizes="100vw" />
    <div className="not-found__shade" />
    <div className="not-found__content">
      <div className="not-found__code" aria-label="404">
        <span className="not-found__digit not-found__digit--left" aria-hidden="true">4</span>
        <Link className="not-found__eye" href="/" aria-label="Return to homepage" onClick={activate}
          onPointerEnter={() => { if (!activated.current && !matchMedia("(prefers-reduced-motion: reduce)").matches) setOpening(1); }}
          onPointerLeave={() => { if (!activated.current && !matchMedia("(prefers-reduced-motion: reduce)").matches) setOpening(0, 480); }}
          onFocus={() => { if (!activated.current && !matchMedia("(prefers-reduced-motion: reduce)").matches) setOpening(1); }}
          onBlur={() => { if (!activated.current && !matchMedia("(prefers-reduced-motion: reduce)").matches) setOpening(0, 480); }}>
          <svg ref={eye} viewBox="0 0 1254 1254" role="presentation" aria-hidden="true">
            <defs>
              <mask id="eye-open-mask" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" style={{ maskType: "luminance" }} x="0" y="0" width="1254" height="1254">
                <rect width="1254" height="1254" fill="black" />
                <ellipse ref={aperture} cx="627" cy="632" rx="570" ry="0" fill="white" />
              </mask>
              <mask id="eye-closed-mask" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" style={{ maskType: "luminance" }} x="0" y="0" width="1254" height="1254">
                <rect width="1254" height="1254" fill="white" />
                <ellipse ref={inverse} cx="627" cy="632" rx="570" ry="0" fill="black" />
              </mask>
            </defs>
            <image href={CLOSED} width="1254" height="1254" mask="url(#eye-closed-mask)" />
            <image ref={openArtwork} href={OPEN} width="1254" height="1254" mask="url(#eye-open-mask)" opacity="0" />
          </svg>
        </Link>
        <span className="not-found__digit not-found__digit--right" aria-hidden="true">4</span>
      </div>
      <p className="not-found__message">this is not what you were looking for</p>
      <p className="not-found__hint">click to see again</p>
    </div>
  </main>;
}
