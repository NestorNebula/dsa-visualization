import LinkedList from '../linked-list/linked-list';

class HashMap {
  [key: string]: LinkedList<string> | any;
  size: number = 0;
  put(value: string): void {
    const char = value.toLowerCase()[0];
    if (this[char] instanceof LinkedList) {
      this[char].add(value);
      this.size++;
    }
  }
  remove(value: string): string | undefined {
    const char = value.toLowerCase()[0];
    if (this[char] instanceof LinkedList) {
      const node = this[char].remove(value);
      if (node) {
        this.size--;
      }
      return node?.value;
    }
  }
  contains(value: string): boolean {
    const char = value.toLowerCase()[0];
    if (this[char] instanceof LinkedList) {
      return this[char].contains(value);
    }
    return false;
  }

  constructor(hashMap?: HashMap) {
    for (let i = 97; i <= 122; i++) {
      this[String.fromCharCode(i)] = new LinkedList();
    }

    if (hashMap) {
      for (const key in hashMap) {
        if ((hashMap[key] as LinkedList).head) {
          this[key] = new LinkedList(hashMap[key]);
        }
      }
      this.size = hashMap.size;
    }
  }
}

export default HashMap;
