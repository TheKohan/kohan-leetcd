function twoSum(numbers: number[], target: number) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    const first = numbers[start];
    const second = numbers[end];
    const sum = first + second;
    if (sum === target) {
      return [start + 1, end + 1];
    }

    if (sum > target) {
      if (first > second) {
        start++;
      } else {
        end--;
      }
    }
    if (sum < target) {
      if (first < second) {
        start++;
      } else {
        end--;
      }
    }
  }
}
