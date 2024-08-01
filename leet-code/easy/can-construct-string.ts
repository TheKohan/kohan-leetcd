function canConstruct(ransomNote: string, magazine: string) {
  const supplyMap = new Map<string,number>()
  let outcome = true;

  magazine.split('').forEach((letter) => supplyMap.set(letter, (supplyMap.get(letter) ?? 0) + 1 ))

  ransomNote.split('').forEach((letter) => {
    if(supplyMap.get(letter)){
      supplyMap.set(letter, (supplyMap.get(letter) ?? 0) - 1 )
    }else{
      return outcome = false
    }
  })
  return outcome
};
