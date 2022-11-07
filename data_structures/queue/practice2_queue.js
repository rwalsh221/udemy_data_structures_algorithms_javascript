// ENQUEUE - DEQUEUE
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.front = newNode;
    this.back = newNode;
    this.length = 1;
  }

  createNode(value) {
    return new Node(value);
  }

  enqueue(value) {
    const newNode = this.createNode(value);
    if (this.length === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.length += 1;
    return this;
  }

  dequeue() {
    if (this.front === null) {
      return undefined;
    }
    const temp = this.front;
    if (this.length === 1) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
      temp.next = null;
    }
    this.length -= 1;
    return temp;
  }
}
