class Array<Type = any> {
  length: number = 0;
  [key: number]: Type | undefined;
  push(item: Type): void {
    this[this.length] = item;
    this.length++;
  }
  pop(): Type | undefined {
    this.length--;
    return this[this.length];
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
}

export default Array;
