function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = new Map<number, number>()

    for(let i = 0; i <= nums.length -1; i++){
      const num = nums[i]
      const previouslyFoundIndex = map.get(num)

      if(previouslyFoundIndex !== undefined && Math.abs(i - previouslyFoundIndex) <= k){
        return true
      }
      map.set(num, i)
    }

  return false
};

console.log(containsNearbyDuplicate([1,2,3,1], 3))