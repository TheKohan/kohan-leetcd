function isSymmetric(root: TreeNode | null): boolean {
  return isMirror(root, root)
}

function isMirror(t1: TreeNode | null, t2: TreeNode | null): boolean {
  if (t1 == null && t2 == null) return true
  if (t1 == null || t2 == null) return false

  return (t1.val == t2.val) && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)
}