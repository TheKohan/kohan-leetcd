function twoSum(nums: number[], target: number): number[] {
  const differencesMap = new Map<number, number[]>()

  nums.forEach((num, i) => {
    const numRecord = differencesMap.get(num)
    if(numRecord){
      differencesMap.set(num, [...numRecord, i])
    }else{
      differencesMap.set(num, [i])
    }
  })

  for(let i = 0; i <= nums.length -1; i++){
    const firstNum = nums[i]
    const numberWant = target - nums[i]
    console.log(firstNum, numberWant)
    const secondNumber = differencesMap.get(numberWant)
    const secondNumberIndex = secondNumber?.pop()
    console.log(i, secondNumberIndex)
    if(secondNumberIndex && secondNumberIndex !== i){
      return [i, secondNumberIndex]
    }
  }

  return [0,0]
};