import { useState } from 'react';
import useLocalStorage from '@hooks/use-local-storage/useLocalStorage';
import { dataStructures } from '@services/default';
import { array as methods } from '@services/methods';
import type { Array } from '@services/data-structures';

function useArrays() {
  const { data: arrays, update } = useLocalStorage(
    'arrays',
    dataStructures.arrays
  );
  const [array, setArray] = useState(0);
  const addArray = () => {
    update(methods.add(arrays));
  };
  const removeArray = (index: number) => {
    update(methods.remove(arrays, index));
  };

  const [item, setItem] = useState<number | null>(null);

  return {
    arrays,
    array: { active: array, set: setArray, add: addArray, remove: removeArray },
    item: { active: item, set: setItem },
  };
}

export default useArrays;
