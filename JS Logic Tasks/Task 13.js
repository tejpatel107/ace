// Task 13 - Level-Order Traversal of a Binary Tree

function levelOrderTraversal(root) {
  const levels = [];
  res = [];

  if (root === null) {
    return [];
  }

  levels.push([root]);

  while (levels.length > 0) {
    const levelList = levels[0];
    const nextLevelList = [];

    for (let i = 0; i < levelList.length; i++) {
      if (levelList[i].left !== null) {
        nextLevelList.push(levelList[i].left);
      }

      if (levelList[i].right !== null) {
        nextLevelList.push(levelList[i].right);
      }
    }

    if (nextLevelList.length > 0) {
      levels.push(nextLevelList);
    }

    const temp = levels.shift();
    res.push(temp.map((node) => node.val));
  }

  // console.log(res);
  return res;
}
