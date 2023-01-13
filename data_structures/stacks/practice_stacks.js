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

  //   ADD NODE TO TOP OF STACK
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

  //   REMOVE NODE FROM TOP OF STACK AND RETURN NODE
  pop() {
    if (this.top === null) {
      return undefined;
    }
    let temp = this.top;
    if (this.length === 1) {
      this.top = null;
    } else {
      this.top = temp.next;
      temp.next = null;
    }
    this.length -= 1;
    return temp;
  }
}
