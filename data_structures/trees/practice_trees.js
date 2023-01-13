class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = nul;
  }

  insert(value) {
    // create newNode
    // if empty rot = newnode
    // temp = this.root
    // while loop
    // if newnode === temp return undefined
    // if < left else > right
    // if null insert newNode else move to next
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (temp.value === newNode.value) {
        return this;
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
    // if root === null return false
    // temp = this.root
    // while(temp)
    //if < left
    //if > right
    // esle === return true
    //temp == null return false
    if (root === null) {
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
    // get minium value in tree
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}
