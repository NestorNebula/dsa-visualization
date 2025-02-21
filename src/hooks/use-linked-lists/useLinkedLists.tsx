import { useState } from 'react';
import useLocalStorage from '@hooks/use-local-storage/useLocalStorage';
import { LinkedList } from '@services/data-structures';
import { dataStructures } from '@services/default';
import methods from '@services/methods';
import type { LinkedListMethods } from '#types/methods';

function useLinkedLists(): {
  linkedLists: LinkedList[];
  linkedList: LinkedListMethods;
} {
  const { data: linkedLists, update } = useLocalStorage(
    'linked-lists',
    dataStructures.linkedLists,
    (stored: LinkedList) => new LinkedList(stored)
  );

  const [active, setActive] = useState(0);

  const addLinkedList = () => {
    update(methods.add(linkedLists, () => new LinkedList()));
  };

  const removeLinkedList = (index: number) => {
    update(methods.remove(linkedLists, index));
    if (index === active) {
      setActive(index - 1 >= 0 ? 0 : 0);
    }
  };

  const addItem = (value: any) => {
    linkedLists[active].add(value);
    const lls = linkedLists.map((l) => l);
    update(lls);
  };

  const removeItem = (value: any) => {
    linkedLists[active].remove(value);
    const lls = linkedLists.map((l) => l);
    update(lls);
  };

  return {
    linkedLists,
    linkedList: {
      active,
      set: setActive,
      add: addLinkedList,
      remove: removeLinkedList,
      addItem,
      removeItem,
    },
  };
}

export default useLinkedLists;
