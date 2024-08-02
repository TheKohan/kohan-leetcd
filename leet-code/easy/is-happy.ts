function isHappy(n: number): boolean {
  let sum = n
  const resultsMap = new Map<number, number>()
  
  while(sum !== 1){
    // Remove this line
    // console.log(String(sum).split(''))
    const newSum = String(sum).split('').reduce((akk, next) => {
      akk = akk + Math.pow(Number(next), 2)
      return akk
    }, 0)

    if(resultsMap.get(newSum) !== undefined){
      return false
    }else{
      resultsMap.set(newSum, newSum)
    }
    sum = newSum
  }
  return true
};