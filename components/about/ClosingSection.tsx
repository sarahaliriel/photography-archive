import Link from "next/link";

import { SectionLabel } from "@/components/SectionLabel";
import { Footer } from "@/components/layout/Footer";

export function ClosingSection() {
  return (
    <section className="about-closing" aria-labelledby="about-closing-title">
      <div className="about-closing__inner">
        <div className="about-closing__copy">
          <SectionLabel number="04" title="why i photograph" />
          <h2 id="about-closing-title">
            i think that’s why
            <br />
            i photograph.
          </h2>
          <p className="about-closing__thought">to remember what it felt like to be there.</p>
          <Link className="about-closing__cta" href="/archive">
            <span>explore my archive</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <Footer />
      </div>
    </section>
  );
}
