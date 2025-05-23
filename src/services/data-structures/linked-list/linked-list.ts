class Node<Type> {
  value: Type;
  next: Node<Type> | null = null;

  constructor(value: Type) {
    this.value = value;
  }
}

class LinkedList<Type = any> {
  head: Node<Type> | null = null;
  tail: Node<Type> | null = null;
  add(value: Type): void {
    const node = new Node(value);
    if (!this.head || !this.tail) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  remove(value: Type): Node<Type> | undefined {
    let previous: Node<Type> | null = null;
    let node: Node<Type> | null = this.head;
    while (node) {
      if (node.value === value || node.value === +value) {
        if (previous) {
          previous.next = node.next;
        } else {
          this.head = node.next;
        }
        if (!node.next) {
          this.tail = previous ?? null;
        }
        return node;
      }
      previous = node;
      node = node.next;
    }
  }
  contains(value: Type): boolean {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  constructor(linkedList?: LinkedList) {
    if (linkedList) {
      let node = linkedList.head;
      while (node) {
        const newNode = new Node(node.value);
        newNode.next = node.next;
        if (!this.head || !this.tail) {
          this.head = this.tail = newNode;
        } else {
          this.tail.next = newNode;
          this.tail = newNode;
        }
        node = node.next;
      }
    }
  }
}

export default LinkedList;
