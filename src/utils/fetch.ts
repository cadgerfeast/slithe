// Constants
const parser = new DOMParser();

export async function fetchSVG (url: string) {
  const res = await fetch(url);
  if (res.ok && res.headers.get('content-type') === 'image/svg+xml') {
    return parser.parseFromString(await res.text(), 'image/svg+xml').documentElement;
  }
  throw new Error(`Couldn\'t fetch "${url}" SVG file.`);
}
