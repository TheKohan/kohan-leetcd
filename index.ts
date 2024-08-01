function isAnagram(s: string, t: string): boolean {
  const lettersMap = {}
  const sArr = s.split('')
  const tArr = t.split('')

  if(s.length !== t.length) return false

  sArr.forEach((letter) => lettersMap[letter] = (lettersMap[letter] ?? 0) +1)

  tArr.forEach((letter) => lettersMap[letter] = (lettersMap[letter] ?? 0) -1)
  return Object.values(lettersMap).every(v => v === 0)
};

console.log(isAnagram('anagram', 'nagaram'), 'should be true')
console.log(isAnagram('rat', 'car'), 'should be false')
