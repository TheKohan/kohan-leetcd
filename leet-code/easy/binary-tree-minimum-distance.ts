function getMinimumDifference(root: TreeNode | null): number {
  const stack: Array<TreeNode | null> = [root]
  const values: Array<number> = []

  while(stack.length){
    for(let i = 0; i <= stack.length -1; i++){
      const node = stack[i]
      if(node) values.push(node.val)
      if(node?.left) stack.push(node.left)
      if(node?.right) stack.push(node.right)
      stack.splice(i , 1)
    }
  }
  

  const sortedArr = values.sort((a,b) => a-b)


  if(sortedArr.length === 0) return 0
  if(sortedArr.length === 1) return sortedArr[0]

  let result = 0;

  for(let i = 0; i <= sortedArr.length -1; i++) {
    const actuall = sortedArr[i]
    const next = sortedArr[i+1]
    if(actuall != undefined && next != undefined){
      const diff = Math.abs(sortedArr[i] - sortedArr[i +1])
      if(result === 0 || result > diff) result = diff
    }
  }

  return result
};
