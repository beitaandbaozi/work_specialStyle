/**
 * 递归法
 * 1、确定递归参数以及返回值
 * 2、确实停止条件
 * 3、确定单层逻辑
 */
var preorderTraversal = function(root)  {
  var res = []
  const dfs = (root) => {
    if (root == null) return
    res.push(root.val)
    root.left && dfs(root.left)
    root.right && dfs(root.right)
  }
  dfs(root)
  return res
}

/**
 * 迭代法（用栈模拟递归）
 * 入栈：中->右->左
 * 出栈：中->左->右
 */
 var preorderTraversal = function(root)  {
  var res = []
  const dfs = (root) => {
    if(root == null) return
    // 根节点入栈
    var stack = [root]
    while (stack.length) {
      // 根出栈
      var cur = stack.pop()
      res.push(cur.val)
      // 右子树入栈
      cur.right && stack.push(cur.right)
      // 左子树入栈
      cur.left &&  stack.push(cur.left) 
    }

  }
  dfs(root)
  return res 
}
