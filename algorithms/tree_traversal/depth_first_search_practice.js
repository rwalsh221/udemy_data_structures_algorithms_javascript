class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) {
        return undefined;
      }
      if (newNode.value < temp.value) {
        // if newnode value < temp value go left
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        // if newnode.value > temp.value go right
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
    // create newNode
    // if empty rot = newnode
    // temp = this.root
    // while loop
    // if newnode === temp return undefined
    // if < left else > right
    // if null insert newNode else move to next
  }

  contains(value) {
    if (this.root === null) {
      return false;
    }
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
    // if root === null return false
    // temp = this.root
    // while(temp)
    //if < left
    //if > right
    // esle === return true
    //temp == null return false
  }

  minValueNode(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  depthFirstSearchPreOrder() {
    const results = [];
    const traverse = (currentNode) => {
      results.push(currentNode.value);
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
    };
    traverse(this.root);
    return results;
  }

  depthFirstSearchPostOrder() {
    const results = [];

    const traverse = (currentNode) => {
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
      results.push(currentNode.value);
    };

    traverse(this.root);
    return results;
  }

  depthFirstSearchInOrder() {
    const results = [];

    const traverse = (currentNode) => {
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      results.push(currentNode.value);
      if (currentNode.right) {
        traverse(currentNode.right);
      }
    };
    traverse(this.root);
    return results;
  }
}

const myTree = new BinarySearchTree();
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);
console.log(myTree);
console.log(myTree.depthFirstSearchPreOrder());
console.log(myTree.depthFirstSearchPostOrder());
console.log(myTree.depthFirstSearchInOrder());
