function reverseWords(s: string): string {
  let word = '';
  let words: string[] = [];

  for (let i = s.length - 1; i >= 0; i--) {
    const isLast = i === 0;
    if (s[i] !== ' ') {
      word = s[i] + word;
    }

    if (word.length && s[i] === ' ') {
      words.push(word);
      word = '';
    }

    if (word.length && isLast && s[i] !== ' ') {
      words.push(word);
    }
  }

  return words.join(' ');
}
