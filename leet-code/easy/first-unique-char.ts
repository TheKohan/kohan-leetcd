function firstUniqChar(s: string): number {
  const letterMap = new Map()
  for(let i = 0; i < s.length; i++){
   const alreadyThere = letterMap.get(s[i]) != null
   if(alreadyThere){
     letterMap.set(s[i], false)
   }else{
     letterMap.set(s[i], i)
   }
  }
  return Array.from(letterMap).find(([k, v]) => v !== false)?.[1] ?? -1
};