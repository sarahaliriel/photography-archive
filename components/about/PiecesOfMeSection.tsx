import Image from "next/image";

import { SectionLabel } from "@/components/SectionLabel";

const photos = [
  { name: "eyes", src: "/images/about/pieces-of-me/eyes.jpg", alt: "Sarah in warm window light", width: 2708, height: 3488 },
  { name: "boots", src: "/images/about/pieces-of-me/boots.jpg", alt: "Black boots held up against the beach at sunset", width: 1496, height: 1260 },
  { name: "looksz", src: "/images/about/pieces-of-me/looksz.jpg", alt: "A quiet moment seen through a mirror", width: 1424, height: 1300 },
  { name: "sarah", src: "/images/about/pieces-of-me/sarah.jpg", alt: "Sarah outdoors", width: 2220, height: 2960 },
  { name: "shadow", src: "/images/about/pieces-of-me/shadow.jpg", alt: "A long shadow in the landscape", width: 2294, height: 3325 },
  { name: "mirror", src: "/images/about/pieces-of-me/mirror-photo.jpg", alt: "A reflection in a mirror", width: 905, height: 1203 },
  { name: "lili", src: "/images/about/pieces-of-me/lili-and-me.jpg", alt: "Lili and Sarah together", width: 3487, height: 4640 },
] as const;

function Note({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <p className={`pieces-of-me__note ${className}`}>
      {children}
      <svg aria-hidden="true" viewBox="0 0 54 22">
        <path d="M2 4c15 1 28 4 43 12m0 0-7-1m7 1-4-6" />
      </svg>
    </p>
  );
}

export function PiecesOfMeSection() {
  return (
    <section className="pieces-of-me" aria-labelledby="pieces-of-me-title">
      <div className="pieces-of-me__inner">
        <header className="pieces-of-me__header">
          <SectionLabel number="02" title="pieces of me" />
          <h2 id="pieces-of-me-title">pieces of me</h2>
          <p>fragments, places, versions.</p>
        </header>

        {photos.map((photo) => (
          <figure className={`pieces-of-me__photo pieces-of-me__photo--${photo.name}`} key={photo.name}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              quality={92}
              sizes="(max-width: 767px) 82vw, (max-width: 1023px) 38vw, 24vw"
            />
          </figure>
        ))}

        <Note className="pieces-of-me__note--keep">things i wanted to keep</Note>
        <Note className="pieces-of-me__note--versions">somewhere between versions</Note>
      </div>
    </section>
  );
}
