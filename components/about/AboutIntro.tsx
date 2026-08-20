import Image from "next/image";

import { SectionLabel } from "@/components/SectionLabel";

export function AboutIntro() {
  return (
    <section className="about-intro" aria-labelledby="about-intro-title">
      <div className="about-intro__inner">
        <SectionLabel className="about-intro__label" number="01" title="about" />

        <div className="about-intro__left">
          <h1 id="about-intro-title">
            i photograph things
            <br />
            i don’t want to forget.
          </h1>
          <p>this is my visual archive.</p>

          <Image
            className="about-intro__image"
            src="/images/about/sarah-intro.jpg"
            alt="Sarah photographing the sea at sunset"
            width={2515}
            height={2649}
            priority
            quality={92}
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 54vw, 25vw"
          />
        </div>

        <div className="about-intro__story">
          <h2>i’m sarah.</h2>
          <div className="about-intro__copy">
            <p>
              i started taking photos as a way of
              <br className="about-intro__desktop-break" /> paying attention. to places, to people,
              <br className="about-intro__desktop-break" /> to little details that most times
              <br className="about-intro__desktop-break" /> we walk past.
            </p>
            <p>
              this archive exists because
              <br className="about-intro__desktop-break" /> remembering something isn’t
              <br className="about-intro__desktop-break" /> always enough. i want to remember
              <br className="about-intro__desktop-break" /> how it looked. how it felt.
            </p>
            <p>
              every photo here holds a moment
              <br className="about-intro__desktop-break" /> i never want to lose.
            </p>
          </div>
          <p className="about-intro__thanks">thank you for being here.</p>
        </div>
      </div>
    </section>
  );
}
