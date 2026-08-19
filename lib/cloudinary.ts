type CloudinaryAssetOptions = {
  publicId: string;
  resourceType?: "image" | "video";
  transformations?: string[];
};

export function getCloudinaryAssetUrl({
  publicId,
  resourceType = "image",
  transformations = [],
}: CloudinaryAssetOptions) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!cloudName) {
    throw new Error("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not configured.");
  }

  const transformationPath = transformations.length
    ? `${transformations.join(",")}/`
    : "";

  return `https://res.cloudinary.com/${cloudName}/${resourceType}/upload/${transformationPath}${publicId}`;
}
