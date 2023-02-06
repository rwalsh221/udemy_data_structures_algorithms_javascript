// insert / contains / min value

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
      if (temp.value === newNode.value) {
        return undefined;
      }

      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return true;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return true;
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
      if (temp.value === value) {
        return true;
      }
      if (value < temp.value) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }
    return undefined;
  }

  minValueNode(currentNode = this.root) {
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}
