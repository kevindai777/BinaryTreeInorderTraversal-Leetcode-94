//Objective is to do an inorder traversal of a binary tree. Do it recursively
//and iteratively

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(3)
tree.addLeftNode(tree.root, 1)
tree.addRightNode(tree.root.left, 2)
tree.addRightNode(tree.root, 4)


//O(n) recursive solution.

let arr = []

function dfs(node) {
    if (!node) {
        return
    }
    dfs(node.left)
    arr.push(node.val)
    dfs(node.right)
}
dfs(tree.root)

return arr


//O(n) iterative solution.

let result = []
let stack = []

let curr = tree.root 

while (curr || stack.length > 0) {
    while (curr) {
        stack.push(curr)
        curr = curr.left
    }
    curr = stack.pop()
    result.push(curr.val)
    curr = curr.right
}

return result
