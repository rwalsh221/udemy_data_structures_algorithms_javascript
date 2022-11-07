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
    this.bottom = newNode;
    this.length = 1;
  }

  //   ADD NODE TO TOP OF STACK
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length += 1;
    return this;
  }

  //   REMOVE NODE FROM TOP OF STACK AND RETURN NODE
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const temp = this.top;
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
      temp.next = null;
    }
    this.length -= 1;
    return temp;
  }
}
