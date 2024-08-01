function isSubsequence(s: string, t: string): boolean {
  let hits = 0
  let pointerS = 0
  for(let i = 0; i <= t.length -1; i++){
    if(pointerS === s.length) break

    const subsChar = s[pointerS]
    const checkedChar = t[i]
    if(checkedChar === subsChar){
      hits = hits +1
      pointerS++
    }
  }
  
  return pointerS === s.length
};