export function getReadingTime(text, wordsPerMin = 200) {
  if (!text.trim()) return 0;

  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMin);
}
