class Array<Type = any> {
  length: number = 0;
  [key: number]: Type;
  push(item: Type): void {
    this[this.length] = item;
    this.length++;
  }
  pop(): Type | undefined {
    this.length--;
    const item = this[this.length];
    delete this[this.length];
    return item;
  }
  shift(): Type | undefined {
    const item = this[0];
    if (!item) return item;
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    this.length--;
    return item;
  }

  constructor(array?: Array) {
    if (array) {
      for (const key in array) {
        this[key] = array[key];
      }
      this.length = array.length;
    }
  }
}

export default Array;
