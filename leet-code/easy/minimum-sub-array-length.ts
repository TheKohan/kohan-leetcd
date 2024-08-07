function minSubArrayLen(target: number, nums: number[]): number {
  let startIndex = 0
  let sum = 0;
  let minLength = Infinity

  for(let endIndex = 0; endIndex <= nums.length -1; endIndex ++){
    const num = nums[endIndex]
    sum += num
    console.log('sum', sum)
    while(startIndex <= endIndex && sum >= target){
      minLength = Math.min(minLength, endIndex - startIndex + 1)
      console.log(minLength)
      sum -= nums[startIndex]
      startIndex++
    }
  }
  
  if(minLength === Infinity) return 0

  return minLength
}