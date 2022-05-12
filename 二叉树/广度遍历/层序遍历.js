var levelOrder = function (root) {
  // 队列
  var queue = [];
  var res = [];
  queue.push(root);
  if (root == null) return res;
  while (queue.length) {
      let levelvCount = queue.length;
      let levelArr = [];
      for (var i = 0; i < levelvCount; i++) {
          let node = queue.shift();
          levelArr.push(node.val)
          // 计算这一层中子树的左子树和右子树
          node.left && queue.push(node.left)
          node.right && queue.push(node.right)
      }
      res.push(levelArr)
  }
  return res
};