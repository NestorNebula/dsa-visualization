import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useQueues from './useQueues';

describe('usequeues', () => {
  describe('add', () => {
    it('adds new queue', () => {
      const { result } = renderHook(() => useQueues());
      const { queues, queue } = result.current;
      act(() => queue.add());
      expect(result.current.queues).toHaveLength(queues.length + 1);
    });
  });

  describe('remove', () => {
    it('removes queue from queues', () => {
      const { result } = renderHook(() => useQueues());
      const { queues, queue } = result.current;
      act(() => queue.remove(0));
      expect(result.current.queues).toHaveLength(queues.length - 1);
    });
  });

  describe('enqueue', () => {
    it('adds element to the active queue', () => {
      const { result } = renderHook(() => useQueues());
      act(() => result.current.queue.enqueue('test'));
      const queue = result.current.queues[result.current.queue.active];
      expect(queue.tail?.value).toBe('test');
    });
  });

  describe('dequeue', () => {
    it('removes first element of the active queue', () => {
      const { result } = renderHook(() => useQueues());
      const queue = result.current.queues[result.current.queue.active];
      const elementValue = queue.head?.value;
      act(() => result.current.queue.dequeue());
      expect(queue.head?.value).not.toBe(elementValue);
    });
  });
});
