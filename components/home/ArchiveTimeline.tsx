import Image from "next/image";
import Link from "next/link";

import { journeyChapters } from "@/data/journeys";
import type { JourneyPlace } from "@/types/media";

function formatPeriod(start: string, end?: string) {
  return end ? `${start} — ${end}` : start;
}

export function ArchiveTimeline() {
  return (
    <section
      className="archive-timeline"
      id="archive-timeline"
      aria-labelledby="archive-timeline-title"
    >
      <div className="archive-timeline__inner">
        <h2 className="section-label" id="archive-timeline-title">
          <span>02</span>
          <span className="section-label__dash" aria-hidden="true" />
          <span>archive timeline</span>
        </h2>

        <div className="archive-timeline__desktop">
          <div className="archive-timeline__rail" aria-hidden="true">
            <span className="archive-timeline__year archive-timeline__year--2021">2021</span>
            <span className="archive-timeline__year archive-timeline__year--2024">2024</span>
            <span className="archive-timeline__year archive-timeline__year--2026">2026</span>
            <span className="archive-timeline__dot archive-timeline__dot--2021" />
            <span className="archive-timeline__dot archive-timeline__dot--2024" />
            <span className="archive-timeline__dot archive-timeline__dot--2026" />
            <span className="archive-timeline__arrow">→</span>
          </div>

          <div className="archive-timeline__chapters">
            {journeyChapters.map((chapter) => (
              <div
                className={`archive-timeline__chapter archive-timeline__chapter--${chapter.id}`}
                key={chapter.id}
              >
                <h3>{chapter.name}</h3>
                <p>{formatPeriod(chapter.start, chapter.end)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="archive-timeline__places">
          {journeyChapters.map((chapter) => (
            <div className="archive-timeline__country" key={chapter.id}>
              <header className="archive-timeline__mobile-chapter">
                <h3>{chapter.name}</h3>
                <p>{formatPeriod(chapter.start, chapter.end)}</p>
              </header>

              <div className="archive-timeline__country-places">
                {chapter.places.map((place) => (
                  <PlaceFigure key={place.id} place={place} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <Link className="section-cta archive-timeline__cta" href="/archive">
          <span>explore the archive</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

function PlaceFigure({ place }: { place: JourneyPlace }) {
  return (
    <figure className="archive-timeline__place">
      <div className="archive-timeline__image-wrap">
        <Image
          className="archive-timeline__image"
          src={place.image.src}
          alt={place.image.alt}
          width={place.image.width}
          height={place.image.height}
          sizes="(max-width: 767px) 88vw, (max-width: 1023px) 42vw, 19vw"
          quality={90}
        />
      </div>
      <figcaption>
        <h4>{place.name}</h4>
        <p>{formatPeriod(place.start, place.end)}</p>
      </figcaption>
    </figure>
  );
}
