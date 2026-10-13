/** Only for files in public/. Vite imports and external URLs keep their own paths. */
export function publicAsset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

export function publicImage<T extends { src: string; srcSet: string }>(image: T): T {
  return {
    ...image,
    src: publicAsset(image.src),
    srcSet: image.srcSet.split(", ").map((candidate) => publicAsset(candidate)).join(", "),
  };
}
