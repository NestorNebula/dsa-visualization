import type { Array, BinaryTree } from '@services/data-structures';

interface CommonMethods {
  active: number;
  set: (index: number) => void;
  add: () => void;
  remove: (index: number) => void;
}

interface ArrayMethods extends CommonMethods {
  push: (value: any) => void;
  shift: () => void;
  pop: () => void;
}

interface ArrayItemMethods extends Pick<CommonMethods, 'set'> {
  active: number | null;
  update: (value: any) => void;
}

interface LinkedListMethods extends CommonMethods {
  addItem(value: any): void;
  removeItem(value: any): void;
}

interface HashMapMethods extends CommonMethods {
  addValue(value: string): void;
  removeValue(value: string): void;
}

interface StackMethods extends CommonMethods {
  push: (value: any) => void;
  pop: () => void;
}

interface QueueMethods extends CommonMethods {
  enqueue(value: any): void;
  dequeue(): void;
}

interface BinaryTreeMethods extends CommonMethods {
  addValue(value: number): void;
  removeValue(value: number): void;
  rebalance(): void;
}

interface HeapMethods extends CommonMethods {
  addValue(value: number): void;
  extract(): void;
  revert(): void;
}

interface GraphMethods extends CommonMethods {
  addVertex(value: string | number): void;
  removeVertex(value: string | number): void;
  addEdge(firstValue: string | number, secondValue: string | number): void;
  removeEdge(firstValue: string | number, secondValue: string | number): void;
}

interface CommonSortingMethods {
  start: () => void;
  stop: () => void;
  setDelay: (delay: number) => void;
  sortedArray: Array;
  done: boolean;
}

interface BubbleSortMethods extends CommonSortingMethods {
  checkToDo: number;
  checkDone: number;
}

interface SelectionSortMethods extends CommonSortingMethods {
  index: number;
  minIndex: number;
  lastChecked: number;
}

interface InsertionSortMethods extends CommonSortingMethods {
  index: number;
  lastChecked: number;
}

interface MergeSortMethods extends CommonSortingMethods {
  levels: { array: Array; isSorted: boolean }[][];
  sortedSubarray: Array | null;
}

interface CommonSearchingMethods {
  found: boolean;
  done: boolean;
  start: () => void;
  stop: () => void;
  setDelay: (delay: number) => void;
}

interface LinearSearchMethods extends CommonSearchingMethods {
  checked: number;
}

interface BinarySearchMethods extends CommonSearchingMethods {
  checked: typeof BinaryTree.prototype.root;
}

export type {
  ArrayMethods,
  ArrayItemMethods,
  LinkedListMethods,
  HashMapMethods,
  StackMethods,
  QueueMethods,
  BinaryTreeMethods,
  HeapMethods,
  GraphMethods,
  BubbleSortMethods,
  SelectionSortMethods,
  InsertionSortMethods,
  MergeSortMethods,
  LinearSearchMethods,
  BinarySearchMethods,
};
