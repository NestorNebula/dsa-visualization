import { useState } from 'react';
import useLocalStorage from '@hooks/use-local-storage/useLocalStorage';
import methods from '@services/methods';
import { Stack } from '@services/data-structures';
import { dataStructures } from '@services/default';
import type { StackMethods } from '#types/methods';

function useStacks(): { stacks: Stack[]; stack: StackMethods } {
  const { data: stacks, update } = useLocalStorage(
    'stacks',
    dataStructures.stacks,
    (stored) => new Stack(stored)
  );

  const [active, setActive] = useState(0);

  const addStack = () => {
    update(methods.add(stacks, () => new Stack()));
  };

  const removeStack = (index: number) => {
    update(methods.remove(stacks, index));
  };

  const push = (value: any) => {
    const updatedStacks = stacks.map((s) => s);
    updatedStacks[active].push(value);
    update(updatedStacks);
  };

  const pop = () => {
    const updatedStacks = stacks.map((s) => s);
    updatedStacks[active].pop();
    update(updatedStacks);
  };

  return {
    stacks,
    stack: {
      active,
      set: setActive,
      add: addStack,
      remove: removeStack,
      push,
      pop,
    },
  };
}

export default useStacks;
