import Image from "next/image";

import { Navbar } from "@/components/layout/Navbar";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image
        className="hero__image"
        src="/images/hero/hero.jpg"
        alt="Airplane wing silhouetted against a blue and orange sunset above the clouds"
        fill
        priority
        quality={92}
        sizes="100vw"
      />

      <Navbar />

      <div className="hero__intro">
        <h1 id="hero-title">
          <span>This is how</span>
          <span>I see the world</span>
        </h1>
        <p>my visual archive</p>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span>scroll to explore</span>
      </div>
    </section>
  );
}