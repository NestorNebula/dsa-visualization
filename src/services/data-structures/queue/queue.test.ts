import { describe, expect, it } from 'vitest';
import Queue from './queue';

describe('queue', () => {
  const queue = new Queue();
  describe('add', () => {
    it('adds elements at the end of the queue', () => {
      queue.add('Item one');
      expect(queue.head!.value).toBe('Item one');
      expect(queue.head).toBe(queue.tail);
      queue.add('Item two');
      expect(queue.head!.value).toBe('Item one');
      expect(queue.tail!.value).toBe('Item two');
    });
  });

  describe('remove', () => {
    it('returns the first element of the queue', () => {
      expect(queue.remove()).toBe('Item one');
      expect(queue.remove()).toBe('Item two');
    });

    it('returns undefined when no item is in the queue', () => {
      expect(queue.remove()).toBeUndefined();
    });
  });
});
