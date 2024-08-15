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

function groupAnagrams(strs: string[]): string[][] {
  const anagramMap: { [key: string]: string[] } = {};

  strs.forEach(s => {
    const key = s.split('').sort().join();
    if (anagramMap[key]) {
      anagramMap[key].push(s);
    } else {
      const arr: string[] = [];
      arr.push(s);
      anagramMap[key] = arr;
    }
  });

  return Object.values(anagramMap);
}

const nums = [1, 2, 3, 4];
const k = 9;

const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

console.log('Result', result);
