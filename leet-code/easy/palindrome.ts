function isASCIILowercasedLetterOrNumber(charcode: number) {
  return (charcode >= 97 && charcode <=122) || (charcode >=48 && charcode <=57)
}

function isPalindrome(s: string): boolean {
  const lowercased = s.toLowerCase()
  let result = true
  let startPointer = 0
  let endPointer = lowercased.length-1
  while(startPointer < endPointer){
    const firstCharcode = lowercased.charCodeAt(startPointer)
    const secondCharcode = lowercased.charCodeAt(endPointer)
    if(!isASCIILowercasedLetterOrNumber(firstCharcode)){
      startPointer++
    }else if (!isASCIILowercasedLetterOrNumber(secondCharcode)){
      endPointer--
    }else{
      if( firstCharcode !== secondCharcode){
        return false
      }else{
        startPointer++
        endPointer--
      }
    }
  }
  return result
};

