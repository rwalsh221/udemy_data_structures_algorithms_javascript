class Stack {
  constructor() {
    this.stackList = [];
  }

  getStackList() {
    return this.stackList;
  }

  printStack() {
    for (let i = this.stackList.length - 1; i >= 0; i--) {
      console.log(this.stackList[i]);
    }
  }

  isEmpty() {
    return this.stackList.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.stackList[this.stackList.length - 1];
    }
  }

  size() {
    return this.stackList.length;
  }

  push(value) {
    this.stackList.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.stackList.pop();
  }
}

const reverseString = (input) => {
  const newStack = new Stack();
  let reverseString = '';

  for (let i = 0; i < input.length; i++) {
    newStack.push(input.charAt(i));
    reverseString = `${newStack.pop()}${reverseString}`;
  }
  console.log(newStack.size());
  //   for (let i = newStack.size(); i > 0; i--) {
  //     reverseString = `${reverseString}${newStack.pop()}`;
  //   }

  return reverseString;
};

console.log(reverseString('abcdef'));
