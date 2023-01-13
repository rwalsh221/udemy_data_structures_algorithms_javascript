class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length += 1;
  }
  // ADD NODE TO END OF DOUBLY LINKED LIST
  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  // REMOVE NODE FROM END OF DOUBLY LINKED LIST AND RETURN NODE
  pop() {
    if (this.head === null) {
      return undefined;
    }
    const temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length -= 1;
    return temp;
  }
  //   ADD NODE TO BEGINNING OF DOUBLY LINKED LIST
  unshift(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }
  // REMOVE NODE FROM BEGINNING OF DOUBLY LINKED LIST AND RETURN NODE
  shift() {
    if (this.head === null) {
      return undefined;
    }
    const temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
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
    let temp;
    if (index < this.length / 2) {
      temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length; index > i; i--) {
        temp = temp.prev;
      }
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
      return false;
    }
    const newNode = new Node(value);
    const nodeAtIndex = this.get(index);

    newNode.prev = nodeAtIndex.prev;
    nodeAtIndex.prev.next = newNode;
    newNode.next = nodeAtIndex;
    nodeAtIndex.prev = newNode;

    this.length += 1;
    return true;
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

    const nodeAtIndex = this.get(index);

    nodeAtIndex.next.prev = nodeAtIndex.prev;
    nodeAtIndex.prev.next = nodeAtIndex.next;

    nodeAtIndex.next = null;
    nodeAtIndex.prev = null;
    this.length -= 1;
    return nodeAtIndex;
  }
}
