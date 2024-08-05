

function isSameTree(p: TreeNode | null | undefined, q: TreeNode | null | undefined): boolean {
  if(!p && !q) return true
  if(!p || !q) return false

  const leftResult = isSameTree(p?.left, q?.left)
  const rightResult = isSameTree(p?.right, q?.right)
    
  return p?.val === q?.val && leftResult && rightResult
};