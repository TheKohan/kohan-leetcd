function groupAnagrams(strs: string[]): string[][] {
  const anagramMap: { [key: string]: string[] } = {};

  strs.forEach(s => {
    const key = s.split('').sort().join();
    if (anagramMap[key]) {
      anagramMap[key].push(s);
    } else {
      const arr: string[] = [];
      arr.push(s);
      anagramMap[key] = arr;
    }
  });

  return Object.values(anagramMap);
}
