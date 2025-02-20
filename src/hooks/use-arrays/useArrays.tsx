import { useState } from 'react';
import useLocalStorage from '@hooks/use-local-storage/useLocalStorage';
import { dataStructures } from '@services/default';
import { Array } from '@services/data-structures';
import methods from '@services/methods';
import type { ArrayMethods, ArrayItemMethods } from '#types/methods';

function useArrays(): {
  arrays: Array[];
  array: ArrayMethods;
  item: ArrayItemMethods;
} {
  const { data: arrays, update } = useLocalStorage(
    'arrays',
    dataStructures.arrays,
    (stored: Array) => new Array(stored)
  );
  const [array, setArray] = useState(0);
  const addArray = () => {
    update(methods.add(arrays, () => new Array()));
  };
  const removeArray = (index: number) => {
    update(methods.remove(arrays, index));
    setArray(array - 1 >= 0 ? array - 1 : 0);
  };
  const pushItem = (value: any) => {
    const arrs = arrays.map((arr) => arr);
    arrs[array].push(value);
    update(arrs);
  };
  const shiftItem = () => {
    const arrs = arrays.map((arr) => arr);
    arrs[array].shift();
    update(arrs);
  };
  const popItem = () => {
    const arrs = arrays.map((arr) => arr);
    arrs[array].pop();
    update(arrs);
  };

  const [item, setItem] = useState<number | null>(null);
  const updateItem = (value: any) => {
    const arrs = arrays.map((arr) => arr);
    if (item) {
      arrs[array][item] = value;
      update(arrs);
    }
  };

  return {
    arrays,
    array: {
      active: array,
      set: setArray,
      add: addArray,
      remove: removeArray,
      push: pushItem,
      shift: shiftItem,
      pop: popItem,
    },
    item: { active: item, set: setItem, update: updateItem },
  };
}

export default useArrays;
