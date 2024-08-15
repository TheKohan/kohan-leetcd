/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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

const nums = [1, 2, 3, 4];
const k = 9;

const result = productExceptSelf(nums);

console.log('Result', result);
