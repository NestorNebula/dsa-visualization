import { FrontendSperror } from 'sperror';

type HeapType = 'MIN' | 'MAX';

class Heap {
  #heap: number[] = [];
  #type: HeapType = 'MIN';
  #getParent = (i: number) => Math.floor((i - 1) / 2);
  #getLeftChild = (i: number) => i * 2 + 1;
  #getRightChild = (i: number) => i * 2 + 2;
  #reorganizeValue(index: number, type: HeapType): void {
    let left = this.#getLeftChild(index);
    let right = this.#getRightChild(index);
    while (
      (type === 'MIN' &&
        (this.#heap[left] < this.#heap[index] ||
          this.#heap[right] < this.#heap[index])) ||
      (type === 'MAX' &&
        (this.#heap[left] > this.#heap[index] ||
          this.#heap[right] > this.#heap[index]))
    ) {
      const swap =
        (type === 'MIN' &&
          this.#heap[right] &&
          this.#heap[right] < this.#heap[left]) ||
        (type === 'MAX' &&
          this.#heap[right] &&
          this.#heap[right] > this.#heap[left])
          ? right
          : left;
      [this.#heap[swap], this.#heap[index]] = [
        this.#heap[index],
        this.#heap[swap],
      ];
      index = swap;
      left = this.#getLeftChild(index);
      right = this.#getRightChild(index);
    }
  }
  #reorganize(type: HeapType): void {
    for (let i = this.#heap.length - 1; i >= 0; i--) {
      this.#reorganizeValue(i, type);
    }
  }
  insert(value: number): void {
    let index = this.#heap.length;
    this.#heap.push(value);
    let parent = this.#getParent(index);
    while (
      (this.#type === 'MIN' && this.#heap[index] < this.#heap[parent]) ||
      (this.#type === 'MAX' && this.#heap[index] > this.#heap[parent])
    ) {
      [this.#heap[index], this.#heap[parent]] = [
        this.#heap[parent],
        this.#heap[index],
      ];
      index = parent;
      parent = this.#getParent(index);
    }
  }
  getMin(): number | undefined {
    if (this.#type === 'MAX')
      throw new FrontendSperror(
        'Bad method call',
        "You can't call getMin on maxHeap"
      );
    return this.#heap[0];
  }
  extractMin(): number | undefined {
    if (this.#type === 'MAX')
      throw new FrontendSperror(
        'Bad method call',
        "You can't call extractMin on maxHeap"
      );
    [this.#heap[0], this.#heap[this.#heap.length - 1]] = [
      this.#heap[this.#heap.length - 1],
      this.#heap[0],
    ];
    const min = this.#heap.pop();
    this.#reorganizeValue(0, 'MIN');
    return min;
  }
  getMax(): number | undefined {
    if (this.#type === 'MIN')
      throw new FrontendSperror(
        'Bad method call',
        "You can't call getMax on minHeap"
      );
    return this.#heap[0];
  }
  extractMax(): number | undefined {
    if (this.#type === 'MIN')
      throw new FrontendSperror(
        'Bad method call',
        "You can't call extractMax on minHeap"
      );
    [this.#heap[0], this.#heap[this.#heap.length - 1]] = [
      this.#heap[this.#heap.length - 1],
      this.#heap[0],
    ];
    const max = this.#heap.pop();
    this.#reorganizeValue(0, 'MAX');
    return max;
  }
  revert(): void {
    if (this.#type === 'MIN') {
      this.#type = 'MAX';
      this.#reorganize('MAX');
    } else {
      this.#type = 'MIN';
      this.#reorganize('MIN');
    }
  }
}
export default Heap;
