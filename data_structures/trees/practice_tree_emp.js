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
      return true;
    }

    let temp = this.root;
    while (true) {
      if (temp.value === newNode.value) {
        return undefined;
      }
      if (newNode.value < temp.value) {
        if (temp.left) {
          temp = temp.left;
        }
        temp.left = newNode;
        return true;
      } else {
        if (temp.right) {
          temp = temp.right;
        }
        temp.right = newNode;
        return true;
      }
    }
  }

  contains(value) {
    if (this.root === null) {
      return false;
    }

    let temp = this.root;
    while (temp) {
      if (temp.value === value) {
        return true;
      }
      if (value < temp.value) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }
    return false;
  }

  minValueNode(currentNode = this.root) {
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  BFS() {
    let currentNode = this.root;
    const queue = [];
    const results = [];
    queue.push(currentNode);
    while (queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return results;
  }

  DFSPreOrder() {
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
  DFSPostOrder() {
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
  DFSInOrder() {
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
