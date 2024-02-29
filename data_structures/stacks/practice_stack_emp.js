// ADD REMOVE front

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.top === null) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.top === null) {
      return undefined;
    }
    const temp = this.top;
    if (this.length === 1) {
      this.top = null;
      return temp;
    } else {
      this.top = temp.next;
      temp.next = null;
    }
    this.length -= 1;
    return this;
  }
}
