class LinkedListQuestions {
  hasLoop() {
    if (this.head === null) {
      return false;
    }
    let temp = this.head;
    for (let i = 0; i < this.length - 1; i++) {
      temp = temp.next;
    }
    if (temp.next !== null) {
      return true;
    } else {
      return false;
    }
  }

  //   LL: Find Kth Node From End
  findKthFromEnd(k) {
    if (this.head === null) {
      return undefined;
    }
  }

  //  LL: Reverse Between
  reverseBetween(m, n) {
    if (this.head === null) {
      return undefined;
    }
    //get m -1 in var
    //point m to n.next
    // swap untill n
    // point m-1 to n
    let temp = this.head;
    let mNode;
    let nNode;
    for (let i = 0; i < n; i++) {
      if (i === m) {
        mNode = temp;
      }
      temp = temp.next;
    }
  }
}
