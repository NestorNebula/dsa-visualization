import { useState } from 'react';
import useLocalStorage from '@hooks/use-local-storage/useLocalStorage';
import { dataStructures } from '@services/default';
import methods from '@services/methods';
import { HashMap } from '@services/data-structures';
import type { HashMapMethods } from '#types/methods';

function useHashMaps(): { hashMaps: HashMap[]; hashMap: HashMapMethods } {
  const { data: hashMaps, update } = useLocalStorage(
    'hashmaps',
    dataStructures.hashMaps,
    (stored) => new HashMap(stored)
  );

  const [active, setActive] = useState(0);

  const addHashMap = () => {
    update(methods.add(hashMaps, () => new HashMap()));
  };

  const removeHashMap = (index: number) => {
    update(methods.remove(hashMaps, index));
  };

  const addValue = (value: string) => {
    const hms = hashMaps.map((hm) => hm);
    hms[active].put(value);
    update(hms);
  };

  const removeValue = (value: string) => {
    const hms = hashMaps.map((hm) => hm);
    hms[active].remove(value);
    update(hms);
  };

  return {
    hashMaps,
    hashMap: {
      active,
      set: setActive,
      add: addHashMap,
      remove: removeHashMap,
      addValue,
      removeValue,
    },
  };
}

export default useHashMaps;
