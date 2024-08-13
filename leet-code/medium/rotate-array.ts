function rotate(nums: number[], k: number): void {
  const effRotat = k % nums.length
  const newArr = [...nums.slice(nums.length - effRotat, nums.length), ...nums.slice(0, nums.length-effRotat)]
  for(let i = 0;i <= nums.length -1; i++){
    nums[i] = newArr[i]
  }
}