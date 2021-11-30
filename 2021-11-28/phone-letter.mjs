const PHONE_DIGIT_MAP = new Map([
  ["2", ["a", "b", "c"]],
  ["3", ["d", "e", "f"]],
  ["4", ["g", "h", "i"]],
  ["5", ["j", "k", "l"]],
  ["6", ["m", "n", "o"]],
  ["7", ["p", "q", "r", "s"]],
  ["8", ["t", "u", "v"]],
  ["9", ["w", "x", "y", "z"]],
]);

const ERROR_MESSAGE = "Argument must be a string containing only the digits 2-9.";

/**
 * Given a string containing digits from 2-9, returns all possible letter
 * combinations that the number could represent based on phone numbers/letters.
 * 
 * @param {string} numStr
 * @returns {string[]}
 */
export default function phoneLetter(numStr = "") {
  if (numStr.length === 0) {
    throw new Error(ERROR_MESSAGE);
  }

  if (!PHONE_DIGIT_MAP.has(numStr[0])) {
    throw new Error(ERROR_MESSAGE);
  }

  if (numStr.length === 1) {
    return PHONE_DIGIT_MAP.get(numStr);
  }

  const letterCombinations = [];

  PHONE_DIGIT_MAP.get(numStr[0]).forEach(letter => {
    // Can't answer an interview question without using recursion.
    const suffixes = phoneLetter(numStr.slice(1));
    const currentCombinations = suffixes.map(suffix => `${letter}${suffix}`);
    letterCombinations.push(...currentCombinations);
  });

  return letterCombinations;
}