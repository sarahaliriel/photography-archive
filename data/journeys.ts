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
          src: "/images/home/journeys/lisboa.jpg",
          width: 1600,
          height: 2133,
          alt: "Monument to the Discoveries in Lisbon against a clear blue sky",
        },
      },
      {
        id: "povoa-de-varzim",
        name: "Póvoa de Varzim",
        start: "apr 2026",
        end: "present",
        image: {
          src: "/images/home/journeys/povoa.jpg",
          width: 1600,
          height: 2133,
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
          src: "/images/home/journeys/crasnaleuca.jpg",
          width: 1600,
          height: 2133,
          alt: "Quiet rural home and garden in Crasnaleuca beneath open clouds",
        },
      },
      {
        id: "iasi",
        name: "Iași",
        start: "aug 2026",
        image: {
          src: "/images/home/journeys/iasi.jpg",
          width: 1600,
          height: 2133,
          alt: "Historic building with Romanian flags in Iași",
        },
      },
    ],
  },
];
