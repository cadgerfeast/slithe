export function clamp (from: number, num: number, to: number) {
  return Math.max(from, Math.min(num, to));
}
