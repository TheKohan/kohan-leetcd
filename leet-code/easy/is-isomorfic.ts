function isIsomorphic(s: string, t: string): boolean {
  const map1 = new Map<string,string>()
  const map2 = new Map<string,string>()
  const lettersS = s.split('')
  const lettersT = t.split('')

  let output = true;

  lettersS.forEach((letter,i) => {
    const lookup = map1.get(letter)
    if (lookup && lookup !== lettersT[i]){ 
      return output = false
    }else{
      map1.set(letter, lettersT[i])
    }
  })

  lettersT.forEach((letter,i) => {
    const lookup = map2.get(letter)
    if (lookup && lookup !== lettersS[i]){ 
      return output = false
    }else{
      map2.set(letter, lettersS[i])
    }
  })

  return output
};
