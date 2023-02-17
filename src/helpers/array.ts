// Helpers
import { SafeAny } from './types';

export function switchPosition <T = SafeAny> (array: T[], from: number, to: number): T[] {
  const res = [...array];
  const tmp = res[from];
  res[from] = res[to];
  res[to] = tmp;
  return res;
}
