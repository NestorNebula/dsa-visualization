import { useState } from 'react';
import useLocalStorage from '@hooks/use-local-storage/useLocalStorage';
import { Queue } from '@services/data-structures';
import methods from '@services/methods';
import { dataStructures } from '@services/default';
import type { QueueMethods } from '#types/methods';

function useQueues(): { queues: Queue[]; queue: QueueMethods } {
  const { data: queues, update } = useLocalStorage(
    'queues',
    dataStructures.queues,
    (stored) => new Queue(stored)
  );

  const [active, setActive] = useState(0);

  const addQueue = () => {
    update(methods.add(queues, () => new Queue()));
  };

  const removeQueue = (index: number) => {
    update(methods.remove(queues, index));
  };

  const enqueue = (value: any) => {
    const qs = queues.map((q) => q);
    qs[active].add(value);
    update(qs);
  };

  const dequeue = () => {
    const qs = queues.map((q) => q);
    qs[active].remove();
    update(qs);
  };

  return {
    queues,
    queue: {
      active,
      set: setActive,
      add: addQueue,
      remove: removeQueue,
      enqueue,
      dequeue,
    },
  };
}

export default useQueues;
