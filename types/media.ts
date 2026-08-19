export type MediaType = "image" | "video";

export type Coordinates = {
  lat: number;
  lng: number;
};

export type MediaLocation = {
  country: string;
  city?: string;
  place?: string;
  coordinates?: Coordinates;
};

export type MediaItem = {
  id: string;
  slug: string;
  media: {
    publicId: string;
    type: MediaType;
    width: number;
    height: number;
  };
  title?: string;
  note?: string;
  capturedAt: string;
  location?: MediaLocation;
  journey?: string;
  collections: string[];
  featured?: boolean;
};

export type Journey = {
  id: string;
  slug: string;
  title: string;
  country?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  coverMediaId?: string;
};

export type JourneyPlace = {
  id: string;
  name: string;
  start: string;
  end?: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export type JourneyChapter = {
  id: string;
  name: string;
  start: string;
  end?: string;
  places: readonly JourneyPlace[];
};

export type Collection = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  coverMediaId?: string;
};
