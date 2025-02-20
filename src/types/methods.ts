interface ArrayMethods {
  active: number;
  set: (index: number) => void;
  add: () => void;
  remove: (index: number) => void;
  push: (value: any) => void;
  shift: () => void;
  pop: () => void;
}

interface ArrayItemMethods {
  active: number | null;
  set: (index: number) => void;
  update: (value: any) => void;
}

export type { ArrayMethods, ArrayItemMethods };
