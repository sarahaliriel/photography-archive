import Image from "next/image";
import Link from "next/link";

import { SectionLabel } from "@/components/SectionLabel";

type SelectedPiece = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  placement: string;
  sizes: string;
};

const selectedPieces: SelectedPiece[] = [
  { id: "selected-01", src: "/images/home/selected/photo3.jpg", alt: "Pink sunset over the sea and a distant shoreline", width: 3000, height: 4000, placement: "selected-pieces__item--primary", sizes: "(max-width: 767px) 100vw, (max-width: 1023px) 92vw, 29vw" },
  { id: "selected-02", src: "/images/home/selected/photo9.jpg", alt: "Wooden walkway leading toward city buildings beneath a bright blue sky", width: 3000, height: 1500, placement: "selected-pieces__item--below-primary", sizes: "(max-width: 1023px) 70vw, 24vw" },
  { id: "selected-03", src: "/images/home/selected/photo5.jpg", alt: "Long bridge crossing calm water beneath an open blue sky", width: 3860, height: 3000, placement: "selected-pieces__item--top", sizes: "(max-width: 1023px) 45vw, 21vw" },
  { id: "selected-04", src: "/images/home/selected/photo6.jpg", alt: "Formal city garden viewed from the top of a stone staircase", width: 3963, height: 2805, placement: "selected-pieces__item--edge", sizes: "(max-width: 1023px) 45vw, 13vw" },
  { id: "selected-05", src: "/images/home/selected/photo8.jpg", alt: "Lisbon waterfront glowing beneath an orange sunset", width: 2619, height: 3528, placement: "selected-pieces__item--lower-portrait", sizes: "(max-width: 1023px) 45vw, 12vw" },
  { id: "selected-06", src: "/images/home/selected/photo1.jpg", alt: "Small fire burning on the ground at night", width: 3729, height: 2642, placement: "selected-pieces__item--lower-landscape", sizes: "(max-width: 1023px) 45vw, 20vw" },
  { id: "selected-07", src: "/images/home/selected/photo2.jpg", alt: "Bare tree branches silhouetted against a pale blue sky", width: 4000, height: 3000, placement: "selected-pieces__item--bottom-left", sizes: "(max-width: 1023px) 45vw, 18vw" },
  { id: "selected-08", src: "/images/home/selected/photo4.jpg", alt: "Red vintage van beneath a geometric wooden canopy", width: 3887, height: 2653, placement: "selected-pieces__item--closing", sizes: "(max-width: 1023px) 38vw, 18vw" },
];

export function SelectedPieces() {
  return (
    <section className="selected-pieces" id="selected-pieces" aria-labelledby="selected-pieces-title">
      <div className="selected-pieces__inner">
        <div className="selected-pieces__intro">
          <SectionLabel number="01" title="selected pieces" />
          <h2 className="selected-pieces__title" id="selected-pieces-title">
            a few moments<br />i keep<br />returning to.
          </h2>
          <Link className="section-cta selected-pieces__more" href="/archive">
            <span>explore more</span><span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="selected-pieces__composition">
          {selectedPieces.map((piece) => <SelectedPieceImage key={piece.id} piece={piece} />)}
        </div>

        <p className="selected-pieces__counter" aria-label="Item 1 of 8">01 <span aria-hidden="true">—</span> 08</p>
      </div>
    </section>
  );
}

function SelectedPieceImage({ piece }: { piece: SelectedPiece }) {
  return (
    <figure className={`selected-pieces__item ${piece.placement}`}>
      <Image className="selected-pieces__image" src={piece.src} alt={piece.alt} width={piece.width} height={piece.height} sizes={piece.sizes} quality={90} />
    </figure>
  );
}
