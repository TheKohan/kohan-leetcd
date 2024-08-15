function lengthOfLongestSubstring(s: string): number {
  let longest = 0;
  let slowPointer = 0;
  const lettersSet = new Set();

  for (let i = 0; i <= s.length - 1; i++) {
    const letter = s[i];

    while (lettersSet.has(letter)) {
      const oldLetter = s[slowPointer];
      lettersSet.delete(oldLetter);
      slowPointer++;
    }

    lettersSet.add(letter);
    longest = Math.max(longest, lettersSet.size);
  }
  return longest;
}
