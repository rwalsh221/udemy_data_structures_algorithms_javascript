class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  //   ADD TO END OF QUEUE
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //   newNode.next = this.last; WRONG THIS.LAST.NEXT SHOULD BE NULL AS QUEUE ENDS IN NULL
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length += 1;
    return this;
  }

  //   REMOVE NODE FROM BEGINNING OF QUEUE AND RETURN NODE
  dequeue() {
    if (this.length === 0) {
      return undefined;
    }
    const temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length -= 1;
    return temp;
  }
}

const myQueue = new Queue(4);

console.log(myQueue);
console.log(myQueue.enqueue(5));
console.log(myQueue.enqueue(6));
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
