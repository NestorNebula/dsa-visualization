class Stack<Type = any> {
  size: number = 0;
  [key: number]: Type | undefined;
  push(value: Type) {
    this[this.size] = value;
    this.size++;
  }
  pop(): Type | undefined {
    if (this.size) {
      this.size--;
      const item = this[this.size];
      delete this[this.size];
      return item;
    }
  }

  constructor(stack?: Stack) {
    if (stack) {
      for (const key in stack) {
        this[key] = stack[key];
      }
      this.size = stack.size;
    }
  }
}

export default Stack;
