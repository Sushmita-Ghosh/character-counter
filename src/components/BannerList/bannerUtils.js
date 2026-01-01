// function noSpaceTotalChars(text) {
//   return text.split(" ").join("").length;
// }

// function countWord(text) {
//   const wordList = text.split(" ").filter((item) => item !== "");
//   return wordList.length;
// }

// function countSentence(text) {
//   const sentenceList = text
//     .split(/[.?!]/) // Split by ".", "?", or "!"
//     .map((item) => item.trim())
//     .filter((item) => item !== "");
//   return sentenceList.length;
// }
export const countWithoutSpaces = (text) => {
  const length = text.split(" ").join("").length;
  return length;
};

export const countTotalNumberOfWords = (text) => {
  // Trim leading/trailing whitespace
  // Split on any whitespace (\s+) which covers spaces, tabs, newlines
  // Filter out empty strings just in case
  return text.trim().split(/\s+/).filter(Boolean).length;
};

export const countSentences = (text) => {
  if (!text) return 0;

  // Split by ., !, ? followed by a space or end of string
  const sentences = text
    .split(/[.!?]+(?=\s|$)/)
    .map((s) => s.trim())
    .filter(Boolean); // Remove empty strings

  return sentences.length;

  //   2️⃣ How it works

  // [.!?]+ → matches one or more sentence-ending punctuation (., !, ?)

  // (?=\s|$) → ensures punctuation is followed by a space or end of string (so “Hello!Hi” counts as 2 sentences)

  // .trim() → removes whitespace around each piece

  // .filter(Boolean) → removes empty strings caused by extra punctuation or spaces

  // .length → total number of sentences
};
