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

export type {
  ArrayMethods,
  ArrayItemMethods,
  LinkedListMethods,
  HashMapMethods,
  StackMethods,
  QueueMethods,
  BinaryTreeMethods,
};
