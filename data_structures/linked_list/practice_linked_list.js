class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  createNode(value) {
    return new Node(value);
  }

  //   ADD NODE TO END OF LINKED LIST
  push(value) {
    const newNode = this.createNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  //   REMOVE NODE FROM END OF LINKED LIST AND RETURN NODE
  pop() {
    if (this.head === null) {
      return undefined;
    }
    let pre = null;
    let temp = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
  // ADD NODE TO BEGINNING OF LINKED LIST
  unshift(value) {
    const newNode = this.createNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }
  // REMOVE NODE FROM BEGINNING OF LINKED LIST AND RETURN NODE
  shift() {
    if (this.head === null) {
      return undefined;
    }
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      temp.next = null;
    }
    this.length -= 1;
    return temp;
  }
  // RETURN NODE AT INDEX
  get(index) {
    if (index === 0) {
      return this.head;
    }
    if (index === this.length - 1) {
      return this.tail;
    }
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let temp = this.head;
    for (let i = 0; i < index; i += 1) {
      temp = temp.next;
    }
    return temp;
  }

  //   CHANGE NODE VALUE AT INDEX
  set(index, value) {
    const nodeAtIndex = this.get(index);
    if (nodeAtIndex) {
      nodeAtIndex.value = value;
      return true;
    }
    return false;
  }

  //   INSERT NODE AT INDEX
  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }
    if (index < 0 || index > this.length) {
      return undefined;
    }
    const newNode = this.createNode(value);
    const nodeAtIndex = this.get(index - 1);

    newNode.next = nodeAtIndex.next;
    nodeAtIndex.next = newNode;
    this.length += 1;
    return this;
  }

  //   REMOVE NODE AT INDEX AND RETURN NODE
  remove(index) {
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    const pre = this.get(index - 1);
    const temp = pre.next;

    pre.next = temp.next;
    temp.next = null;

    this.length -= 1;

    return temp;
  }

  // REVERSE THE LINKED LIST
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let pre = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = pre;
      pre = temp;
      temp = next;
    }
  }
}

const myLinkedList = new LinkedList(3);
console.log(myLinkedList.head);
if (myLinkedList.head === myLinkedList.tail) {
  console.log(true);
}
myLinkedList.push(4);
myLinkedList.push(5);
console.log(myLinkedList);
