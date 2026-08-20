"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

import { SectionLabel } from "@/components/SectionLabel";
import animalsImage from "@/public/images/about/things-noticed/animals.jpg";
import lightImage from "@/public/images/about/things-noticed/light-finding.jpg";
import linesImage from "@/public/images/about/things-noticed/lines.jpg";
import ordinaryImage from "@/public/images/about/things-noticed/ordinary-thing.jpg";
import placesImage from "@/public/images/about/things-noticed/places.jpg";
import cityImage from "@/public/images/about/things-noticed/the-city.jpg";
import skyImage from "@/public/images/about/things-noticed/the-sky.jpg";
import tinyWorldsImage from "@/public/images/about/things-noticed/tiny-worlds.jpg";

type Observation = { title: string; image: StaticImageData; alt: string };

const observations: readonly Observation[] = [
  { title: "the sky before it gets dark", image: skyImage, alt: "The sky changing color shortly before nightfall" },
  { title: "light finding its way in", image: lightImage, alt: "A quiet interior crossed by natural light" },
  { title: "animals doing absolutely nothing", image: animalsImage, alt: "An animal resting in an unhurried moment" },
  { title: "tiny worlds", image: tinyWorldsImage, alt: "A small detail revealing a world of its own" },
  { title: "places that feel lived in", image: placesImage, alt: "A place carrying the traces of everyday life" },
  { title: "ordinary things worth remembering", image: ordinaryImage, alt: "An ordinary detail preserved as a memory" },
  { title: "lines, shapes & repetition", image: linesImage, alt: "Repeating lines and geometric shapes" },
  { title: "the city becoming quiet", image: cityImage, alt: "A city street settling into a quiet moment" },
] as const;

export function ThingsINoticeSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeObservation = activeIndex === null ? null : observations[activeIndex];

  return (
    <section className="things-i-notice" aria-labelledby="things-i-notice-title">
      <div className="things-i-notice__inner">
        <div className="things-i-notice__content">
          <header className="things-i-notice__header">
            <SectionLabel number="03" title="things i tend to notice" />
            <h2 id="things-i-notice-title">things i tend<br />to notice</h2>
            <p className="things-i-notice__intro">
              these are the things<br />that always catch my eye.<br />
              the ordinary, the quiet,<br />the easily overlooked.
            </p>
          </header>

          <ol
            className={activeIndex === null ? "things-i-notice__list" : "things-i-notice__list has-active-item"}
          >
            {observations.map((observation, index) => {
              const isActive = activeIndex === index;
              return (
                <li className={isActive ? "is-active" : undefined} key={observation.title}>
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls="things-i-notice-photo"
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <span className="things-i-notice__item-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="things-i-notice__item-title">{observation.title}</span>
                    <span className="things-i-notice__indicator" aria-hidden="true">{isActive ? "→" : "·"}</span>
                  </button>
                </li>
              );
            })}
          </ol>

          <p className="things-i-notice__hint" aria-hidden="true">
            <span className="things-i-notice__hint-desktop">hover each topic to see more</span>
            <span className="things-i-notice__hint-mobile">tap a topic to see more</span>
            <span>↗</span>
          </p>
        </div>

        <figure className={activeObservation ? "things-i-notice__visual is-active" : "things-i-notice__visual"} id="things-i-notice-photo">
          <div className="things-i-notice__frame">
            {observations.map((observation, index) => (
              <Image
                className={activeIndex === index ? "is-active" : undefined}
                key={observation.title}
                src={observation.image}
                alt={activeIndex === index ? observation.alt : ""}
                placeholder="blur"
                sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1100px) 44vw, 46vw"
              />
            ))}
            <span className="things-i-notice__empty-label" aria-hidden="true">select a detail</span>
          </div>
          <figcaption aria-live="polite">
            <span>{activeObservation?.title ?? ""}</span>
            <span className="things-i-notice__metadata" aria-hidden="true" />
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
