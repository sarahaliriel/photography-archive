import type { Journey, JourneyChapter } from "@/types/media";

export const journeys: readonly Journey[] = [];

export const journeyChapters: readonly JourneyChapter[] = [
  {
    id: "portugal",
    name: "Portugal",
    start: "2021",
    end: "present",
    places: [
      {
        id: "lisboa",
        name: "Lisboa",
        start: "2021",
        end: "mar 2026",
        image: {
          src: "/images/journeys/lisboa.jpg",
          width: 3000,
          height: 4000,
          alt: "Monument to the Discoveries in Lisbon against a clear blue sky",
        },
      },
      {
        id: "povoa-de-varzim",
        name: "Póvoa de Varzim",
        start: "apr 2026",
        end: "present",
        image: {
          src: "/images/journeys/povoa.jpg",
          width: 2808,
          height: 3744,
          alt: "Wide waterfront avenue in Póvoa de Varzim beneath a blue sky",
        },
      },
    ],
  },
  {
    id: "romania",
    name: "Romania",
    start: "aug 2026",
    places: [
      {
        id: "crasnaleuca",
        name: "Crasnaleuca",
        start: "aug 2026",
        image: {
          src: "/images/journeys/crasnaleuca.jpg",
          width: 3000,
          height: 4000,
          alt: "Quiet rural home and garden in Crasnaleuca beneath open clouds",
        },
      },
      {
        id: "iasi",
        name: "Iași",
        start: "aug 2026",
        image: {
          src: "/images/journeys/iasi.jpg",
          width: 3000,
          height: 4000,
          alt: "Historic building with Romanian flags in Iași",
        },
      },
    ],
  },
];
