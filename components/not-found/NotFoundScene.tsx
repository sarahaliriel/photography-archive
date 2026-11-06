"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const OPEN = "/images/logo-light.png";
const CLOSED = "/images/logo-light-hover.png";
const AJAR = "/images/logo-light-ajar-hover.png";

export function NotFoundScene() {
  const router = useRouter();
  const scene = useRef<HTMLElement>(null);
  const eye = useRef<SVGSVGElement>(null);
  const artwork = useRef<SVGImageElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverTarget = useRef(false);
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
    const ajarEye = new window.Image();
    ajarEye.src = AJAR;
    void ajarEye.decode().catch(() => undefined);
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, [router]);

  const setHoverFrame = (open: boolean) => {
    if (activated.current || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (hoverTarget.current === open) return;
    hoverTarget.current = open;
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    artwork.current?.setAttribute("href", AJAR);
    hoverTimer.current = setTimeout(() => {
      artwork.current?.setAttribute("href", open ? OPEN : CLOSED);
      hoverTimer.current = null;
    }, 130);
  };

  const activate = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (activated.current) { event.preventDefault(); return; }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    event.preventDefault();
    activated.current = true;
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    if (artwork.current?.getAttribute("href") !== OPEN) artwork.current?.setAttribute("href", OPEN);
    const rect = eye.current?.getBoundingClientRect();
    if (!rect) { router.push("/"); return; }
    // The painted pupil is slightly below the center of the square source artwork.
    const x = rect.left + rect.width * .5;
    const y = rect.top + rect.height * .51;
    scene.current?.classList.add("not-found--leaving");
    void heroReady.current.then(() => {
      const transition = new CustomEvent("archive:home-reveal", { cancelable: true, detail: { x, y } });
      window.dispatchEvent(transition);
      if (!transition.defaultPrevented) router.push("/");
    });
  };

  return <main ref={scene} className="not-found">
    <Image className="not-found__photo" src="/images/404/404-background.jpg" alt="" fill priority sizes="100vw" />
    <div className="not-found__shade" />
    <div className="not-found__content">
      <div className="not-found__code" aria-label="404">
        <span className="not-found__digit not-found__digit--left" aria-hidden="true">4</span>
        <Link className="not-found__eye" href="/" aria-label="Return to homepage" onClick={activate}
          onPointerEnter={() => setHoverFrame(true)}
          onPointerLeave={() => setHoverFrame(false)}
          onFocus={() => setHoverFrame(true)}
          onBlur={() => setHoverFrame(false)}>
          <svg ref={eye} viewBox="0 0 1254 1254" role="presentation" aria-hidden="true">
            <image ref={artwork} href={CLOSED} width="1254" height="1254" />
          </svg>
        </Link>
        <span className="not-found__digit not-found__digit--right" aria-hidden="true">4</span>
      </div>
      <p className="not-found__message">this is not what you were looking for</p>
      <p className="not-found__hint">click to see again</p>
    </div>
  </main>;
}
