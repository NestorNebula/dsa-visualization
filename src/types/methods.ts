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

export type { ArrayMethods, ArrayItemMethods, LinkedListMethods };
