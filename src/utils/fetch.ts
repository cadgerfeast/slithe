// Constants
const parser = new DOMParser();

export async function fetchSVG (url: string) {
  const res = await fetch(url);
  if (res.ok) {
    return parser.parseFromString(await res.text(), 'image/svg+xml').documentElement;
  }
  throw new Error(`Couldn\'t fetch "${url}" SVG file.`);
}
