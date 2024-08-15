function productExceptSelf(nums: number[]): number[] {
  const leftResultMap = {};
  const rightResultMap = {};
  const result = [];
  for (let i = 0; i <= nums.length - 1; i++) {
    leftResultMap[i] = (leftResultMap[i - 1] ?? 1) * nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    rightResultMap[i] = (rightResultMap[i + 1] ?? 1) * nums[i];
  }

  for (let i = 0; i <= nums.length - 1; i++) {
    const letMultiplication = leftResultMap[i - 1] ?? 1;
    const rightMultiplication = rightResultMap[i + 1] ?? 1;
    result.push(letMultiplication * rightMultiplication);
  }
  return result;
}