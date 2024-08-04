function summaryRanges(nums: number[]): string[] {
  const result: string[] = []

  let rangeStartNum: number | undefined = undefined

  for(let i = 0; i <= nums.length -1; i ++){
    const currNum = nums[i]
    const nextItem = nums[i+1]

    if(rangeStartNum === undefined){
      rangeStartNum = currNum
    }

    if(nextItem !== undefined){
      console.log(currNum, nextItem)
      if ((nextItem - 1) !== currNum){
        if(rangeStartNum === currNum) {result.push(String(currNum))}else{
          result.push(`${rangeStartNum}->${currNum}`)

        }
        rangeStartNum = undefined
      }
    }else{
      if(rangeStartNum === currNum){
        result.push(String(currNum))
      }else{
        result.push(`${rangeStartNum}->${currNum}`)
      }
    }

  }

  return result
};
