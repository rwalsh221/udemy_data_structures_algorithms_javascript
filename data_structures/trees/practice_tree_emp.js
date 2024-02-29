// insert / contains / min value / BFS / DFS PRE POST IN
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
      return;
    }

    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) {
        return undefined;
      }
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) {
      return undefined;
    }

    let temp = this.root;

    while (temp) {
      if (value === temp.value) {
        return true;
      }
      if (value < temp.value) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
      return false;
    }
  }

  minValueNode(currentNode = this.root) {
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  BFS() {
    const result = [];
    const queue = [];

    queue.push(this.root);
    while (queue.length) {
      const currentNode = queue.shift();
      result.push = currentNode.value;
      if (currentNode.left) {
        queue.push(currentNode.left);
      } else {
        queue.push(currentNode.right);
      }
    }
    return result;
  }

  DFSPreOrder() {
    const result = [];

    const traverse = (currentNode) => {
      result.push(currentNode.value);
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
    };

    traverse(currentNode);
    return result;
  }

  DFSPostOrder() {
    const result = [];

    const traverse = (currentNode) => {
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
      result.push(currentNode.value);
    };

    traverse(this.root);
    return result;
  }
}
