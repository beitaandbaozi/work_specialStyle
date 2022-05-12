// 递归法
var postorderTraversal = function (root) {
  // 1.确定递归参数以及返回值
  var res = [];
  const dfs = (root) => {
    // 2.确认停止条件
    if (root === null) return;
    // 3.确定单层逻辑
    root.left && dfs(root.left);
    root.right && dfs(root.right);
    res.push(root.val);
  };
  dfs(root);
  return res;
};

// 迭代法
var postorderTraversal = function (root) {
  if (root === null) return;
  var stack = [root];
  while (stack.length) {
    let cur = stack.pop(); //中出栈
    res.push(cur.val);
    cur.left && stack.push(cur.left);
    cur.right && stack.push(cur.right);
  }
  dfs(root)
  return res.reverse()
};
