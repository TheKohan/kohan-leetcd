function longestCommonPrefix(strs: string[]): string {
  let prefix = ''
  let stop = false;
  let i = 0;
  while(!stop){
    const letter = strs[0][i]
    if(strs.every((word) => word[i] === letter) && letter){
      prefix = prefix + letter
      i++
    }else{
      stop = true
    }
  }
  return prefix
};

longestCommonPrefix(["flower","flow","flight"])