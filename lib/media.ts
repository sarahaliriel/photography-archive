import { mediaItems } from "@/data/media";

export function getMediaBySlug(slug: string) {
  return mediaItems.find((item) => item.slug === slug);
}

export function getFeaturedMedia() {
  return mediaItems.filter((item) => item.featured);
}
