function isValid(s: string): boolean {
  if(s.length <= 1) return false

  const openingToClosingCodeMap = {
    41:40,
    93:91,
    125:123
  }
  const stack: number[] = [];
  for(let i = 0; i <= s.length -1; i++){
    const character = s[i].charCodeAt(0)
    if(character=== 40 || character === 91 || character === 123){
      stack.push(character)
    }else{
      const lastStackChar = stack.pop()
      if(lastStackChar !== openingToClosingCodeMap[character]){
        return false
      }
    }
  }

  if(stack.length) return false
  
  return true
};
