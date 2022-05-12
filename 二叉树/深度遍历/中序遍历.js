/**
 * 递归法
 */
 var inorderTraversal = function (root) {
  // 1.确定递归参数以及返回值
  var res = []
  const dfs  = (root) => {
    // 2.确定停止条件
    if(root === null) return
    // 3.确定单层逻辑
    root.left && dfs(root.left)
    res.push(root.val)
    root.right && dfs(root.right)
  }
  dfs(root)
  return res
 }

//  迭代法
//借用指针的遍历来帮助访问节点，栈则用来处理节点上的元素。
var inorderTraversal = function (root) {
  // 1.确定递归参数以及返回值
  var res = []
  const dfs  = (root) => {
    if(root === null) return
    var stack = [root]
    var cur = root
    while (stack.length || cur) {
      if(cur) {
        stack.push(cur)
        cur = cur.left
      }else {
        cur = stack.pop()
        res.push(cur.val)
        cur = cur.right
      }
    } 
  }
  dfs(root)
  return res
 }