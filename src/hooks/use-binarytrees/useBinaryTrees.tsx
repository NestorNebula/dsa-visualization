import { useState } from 'react';
import useLocalStorage from '@hooks/use-local-storage/useLocalStorage';
import { BinaryTree } from '@services/data-structures';
import { dataStructures } from '@services/default';
import methods from '@services/methods';
import type { BinaryTreeMethods } from '#types/methods';

function useBinaryTrees(): {
  binaryTrees: BinaryTree[];
  binaryTree: BinaryTreeMethods;
} {
  const { data: binaryTrees, update } = useLocalStorage(
    'binary-trees',
    dataStructures.binaryTrees,
    (stored) => new BinaryTree(stored)
  );

  const [active, setActive] = useState(0);

  const addBinaryTree = () => {
    update(methods.add(binaryTrees, () => new BinaryTree()));
  };

  const removeBinaryTree = (index: number) => {
    update(methods.remove(binaryTrees, index));
  };

  const addValue = (value: number) => {
    const bts = binaryTrees.map((bt) => bt);
    bts[active].insert(value);
    update(bts);
  };

  const removeValue = (value: number) => {
    const bts = binaryTrees.map((bt) => bt);
    bts[active].remove(value);
    update(bts);
  };

  const rebalance = () => {
    const bts = binaryTrees.map((bt) => bt);
    bts[active].rebalance();
    update(bts);
  };

  return {
    binaryTrees,
    binaryTree: {
      active,
      set: setActive,
      add: addBinaryTree,
      remove: removeBinaryTree,
      addValue,
      removeValue,
      rebalance,
    },
  };
}

export default useBinaryTrees;
