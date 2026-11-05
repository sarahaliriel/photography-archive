import Image from "next/image";

import { SectionLabel } from "@/components/SectionLabel";

const photos = [
  { name: "eyes", src: "/images/about/pieces-of-me/eyes.jpg", alt: "Sarah looking through her hand", width: 2048, height: 1539, sizes: "(max-width: 767px) 66vw, (max-width: 1023px) 31vw, 19vw" },
  { name: "looksz", src: "/images/about/pieces-of-me/looksz.jpg", alt: "A quiet moment seen through a mirror", width: 1424, height: 1300, sizes: "(max-width: 767px) 53vw, (max-width: 1023px) 23vw, 15vw" },
  { name: "sarah", src: "/images/about/pieces-of-me/sarah.jpg", alt: "Sarah outdoors", width: 1400, height: 1866, sizes: "(max-width: 767px) 75vw, (max-width: 1023px) 38vw, 23vw" },
  { name: "shadow", src: "/images/about/pieces-of-me/shadow.jpg", alt: "A long shadow in the landscape", width: 1200, height: 1739, sizes: "(max-width: 767px) 53vw, (max-width: 1023px) 25vw, 16vw" },
  { name: "mirror", src: "/images/about/pieces-of-me/mirror-photo.jpg", alt: "A reflection in a mirror", width: 905, height: 1203, sizes: "(max-width: 767px) 44vw, (max-width: 1023px) 20vw, 17vw" },
  { name: "lili", src: "/images/about/pieces-of-me/lili-and-me.jpg", alt: "Lili and Sarah together", width: 1400, height: 1863, sizes: "(max-width: 767px) 66vw, (max-width: 1023px) 32vw, 17vw" },
  { name: "sasukeee", src: "/images/about/pieces-of-me/sasukeee.jpg", alt: "Sarah with playful face paint", width: 652, height: 724, sizes: "(max-width: 767px) 53vw, (max-width: 1023px) 23vw, 15vw" },
  { name: "beach", src: "/images/about/pieces-of-me/beach.jpeg", alt: "Sarah standing barefoot at the water's edge", width: 2048, height: 1539, sizes: "(max-width: 767px) 76vw, (max-width: 1023px) 42vw, 28vw" },
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
              sizes={photo.sizes}
            />
          </figure>
        ))}

        <Note className="pieces-of-me__note--keep">things i wanted to keep</Note>
        <Note className="pieces-of-me__note--versions">somewhere between versions</Note>
      </div>
    </section>
  );
}
