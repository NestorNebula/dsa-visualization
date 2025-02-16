import LinkedList from '../linked-list/linked-list';

class Queue<Type = any> {
  #queue: LinkedList<Type> = new LinkedList();
  head = this.#queue.head;
  tail = this.#queue.tail;
  add(value: Type): void {
    this.#queue.add(value);
    this.head = this.#queue.head;
    this.tail = this.#queue.tail;
  }
  remove(): Type | undefined {
    if (!this.#queue.head) return;
    const node = this.#queue.head;
    if (this.#queue.head === this.#queue.tail) {
      this.#queue.head = this.#queue.tail = null;
    } else {
      this.#queue.head = this.#queue.head.next;
    }
    this.head = this.#queue.head;
    this.tail = this.#queue.tail;
    return node.value;
  }
}

export default Queue;
