import { useState } from 'react';
import useLocalStorage from '@hooks/use-local-storage/useLocalStorage';
import { Heap } from '@services/data-structures';
import methods from '@services/methods';
import { dataStructures } from '@services/default';
import type { HeapMethods } from '#types/methods';

function useHeaps(): { heaps: Heap[]; heap: HeapMethods } {
  const { data: heaps, update } = useLocalStorage(
    'heaps',
    dataStructures.heaps,
    (stored) => new Heap(stored)
  );

  const [active, setActive] = useState(0);

  const addHeap = () => {
    update(methods.add(heaps, () => new Heap()));
  };

  const removeHeap = (index: number) => {
    update(methods.remove(heaps, index));
    if (active === index) {
      setActive(index > 0 ? index - 1 : 0);
    }
  };

  const addValue = (value: number) => {
    const hs = heaps.map((h) => h);
    hs[active].insert(value);
    update(hs);
  };

  const extract = () => {
    const hs = heaps.map((h) => h);
    if (hs[active].type === 'MIN') {
      hs[active].extractMin();
    } else {
      hs[active].extractMax();
    }
    update(hs);
  };

  const revert = () => {
    const hs = heaps.map((h) => h);
    hs[active].revert();
    update(hs);
  };

  return {
    heaps,
    heap: {
      active,
      set: setActive,
      add: addHeap,
      remove: removeHeap,
      addValue,
      extract,
      revert,
    },
  };
}

export default useHeaps;
