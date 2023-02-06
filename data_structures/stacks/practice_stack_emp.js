// ADD REMOVE END

class Node {
  constructor(value) {
    this.value = value;
    this.next = this.next;
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
    this.top = this.top.next;
    this.length -= 1;
    return temp;
  }
}
