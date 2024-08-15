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

function convert(s: string, numRows: number): string {
  const rowMap = {};
  let direction = 'up';
  let actualRow = 1;
  if (numRows === 1) return s;
  for (let i = 0; i <= s.length - 1; i++) {
    if (actualRow === numRows) {
      rowMap[actualRow] = (rowMap[actualRow] ?? '') + s[i];
      direction = 'down';
      actualRow--;
    } else if (actualRow === 1) {
      rowMap[actualRow] = (rowMap[actualRow] ?? '') + s[i];
      direction = 'up';
      actualRow++;
    } else if (actualRow !== numRows || actualRow !== 1) {
      rowMap[actualRow] = (rowMap[actualRow] ?? '') + s[i];
      if (direction === 'up') {
        actualRow++;
      } else {
        actualRow--;
      }
    }
  }

  return Object.values(rowMap).join('');
}

const nums = [2, 7, 11, 15];
const k = 9;

const result = convert('AB', 1);

console.log('Result', result);
