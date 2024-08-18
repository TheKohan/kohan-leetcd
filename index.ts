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

const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

const result = longestConsecutive(nums);

console.log('Result', result);
