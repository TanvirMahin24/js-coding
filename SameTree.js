function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isSameTree = function (p, q) {
  if (p && q) {
    if (p.val !== q.val) {
      return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  return !p && !q;
};

const traverse = (p) => {
  //console.log(p)
  if (p) {
    console.log(p.val);
    traverse(p.left);
    traverse(p.right);
    return;
  }
  return;
};

const tree1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree3 = new TreeNode(1, new TreeNode(2));
const tree4 = new TreeNode(1, new TreeNode(null, new TreeNode(2)));
const tree5 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(3)),
  new TreeNode(2, new TreeNode(3), new TreeNode(4))
);

console.log(isSameTree(tree1, tree2));
console.log(isSameTree(tree3, tree4));

console.log(traverse(tree1));

var isSymmetric = function (root) {
  console.log(root.left.val, root.right.val);
  if (root) {
    if (root.left && root.right) {
      if (root.left.val !== root.right.val) {
        return false;
      }
      return isSymmetric(root.left) && isSymmetric(root.right);
    } else return true;
  }
  return true;
};

console.log(isSymmetric(tree1));
// console.log(isSymmetric(tree5));
