function removeDuplicates(nums: number[]): number {
  const itemsMap = new Map<number, number>()

  for(let i = nums.length - 1; i >= 0 ; i--){
    const n = nums[i]
    const wasHerePreviously = itemsMap.get(n)
    if(wasHerePreviously != undefined){
      nums.splice(i, 1)
    }else{
      itemsMap.set(n, n)
    }
  }
  return nums.length
}

removeDuplicates([0,0,1,1,1,2,2,3,3,4])