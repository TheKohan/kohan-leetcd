function maxDepth(root: TreeNode | null): number  {
  if (!root) return 0

  let leftSubHeight = maxDepth(root.left)
  let rightSubHeight = maxDepth(root.right)
  
  return Math.max(leftSubHeight, rightSubHeight) + 1
};

