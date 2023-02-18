export function clone <T> (model: T): T {
  return JSON.parse(JSON.stringify(model));
}
