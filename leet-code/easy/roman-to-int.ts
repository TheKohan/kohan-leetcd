function romanToInt(s: string): number {
  let result = 0
  const symbolsToValueMap = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL':40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000,
  }

  for(let i = 0; i <= s.length-1; i++){
    const letter = s[i]
    const nextLetter = s[i+1]
    if(symbolsToValueMap[letter+nextLetter]){
      result = result + symbolsToValueMap[letter+nextLetter]
      i++
    }else{
      result = result + symbolsToValueMap[letter]

    }
  }
return result
};

