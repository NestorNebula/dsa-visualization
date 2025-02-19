import { useState } from 'react';
import type { Array } from '@services/data-structures';

function useArrays(arrays: Array[]) {
  const [array, setArray] = useState(0);
  const [item, setItem] = useState<number | null>(null);

  return {
    array: { active: array, set: setArray },
    item: { active: item, set: setItem },
  };
}

export default useArrays;
