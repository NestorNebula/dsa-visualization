import { useState } from 'react';
import useLocalStorage from '@hooks/use-local-storage/useLocalStorage';
import { dataStructures } from '@services/default';
import { Array } from '@services/data-structures';
import { array as methods } from '@services/methods';
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
    update(methods.add(arrays));
  };
  const removeArray = (index: number) => {
    update(methods.remove(arrays, index));
  };
  const pushItem = (value: any) => {
    arrays[array].push(value);
    update(arrays);
  };
  const shiftItem = () => {
    arrays[array].shift();
    update(arrays);
  };
  const popItem = () => {
    arrays[array].pop();
    update(arrays);
  };

  const [item, setItem] = useState<number | null>(null);
  const updateItem = (value: any) => {
    if (item) {
      arrays[array][item] = value;
      update(arrays);
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
