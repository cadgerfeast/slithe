export function fullTextMatch (str: string, match: string) {
  if (!match.trim()) {
    return true;
  }
  const splits = str.split(' ');
  for (const matchSplit of match.split(' ')) {
    if (!splits.find((s) => s.toLowerCase().includes(matchSplit.toLowerCase()))) {
      return false;
    }
  }
  return true;
}
