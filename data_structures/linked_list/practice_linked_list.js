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
  //   ADD NODE TO END OF LINKED LIST
  push(value) {
    const newNode = new Node(value);
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
    if (this.length === 0) {
      return undefined;
    }
    const pre = this.head;
    const temp = this.head;
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
  unshift(value) {
    const newNode = new Node(value);
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
    const temp = this.head;

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
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.head;
    }
    if (index === this.length - 1) {
      return this.tail;
    }
    const temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  //   CHANGE NODE VALUE AT INDEX
  set(index, value) {
    const getIndex = this.get(index);

    if (getIndex) {
      getIndex.value = value;
      return true;
    }
    return false;
  }
  //   INSERT NODE AT INDEX
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }

    const getIndex = this.get(index - 1);

    const newNode = new Node(value);
    newNode.next = getIndex.next;
    getIndex.next = newNode;
    this.length += 1;
    return true;
  }
  //   REMOVE NODE AT INDEX AND RETURN NODE
  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }

    const getIndex = this.get(index - 1);
    const temp = getIndex.next;
    getIndex.next = temp.next;
    temp.next = null;
    this.length -= 1;
    return temp;
  }

  // REVERSE THE LINKED LIST
  reverse() {
    // switch head and tail
  }
}
