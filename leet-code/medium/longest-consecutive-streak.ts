
function longestConsecutive(nums: number[]): number {
  const map = new Set<number>();
  let streak = 0;
  let longest = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    map.add(nums[i]);
  }

  const sorted = [...map.values()].sort((a, b) => a - b);

  for (let i = 0; i <= sorted.length - 1; i++) {
    const prev = sorted[i - 1];
    const curr = sorted[i];
    if (prev != null) {
      if (prev + 1 === curr) {
        streak++;
      } else {
        longest = Math.max(longest, streak);
        streak = 1;
      }
    } else {
      streak++;
    }

    if (i === sorted.length - 1) {
      longest = Math.max(longest, streak);
      streak = 0;
    }
  }
  return longest;
}