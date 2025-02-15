import { describe, expect, it } from 'vitest';
import Stack from './stack';

describe('stack', () => {
  const stack = new Stack();

  describe('push', () => {
    it('adds items to the stack', () => {
      stack.push('Item One');
      stack.push('Item Two');
      expect(stack.size).toBe(2);
    });
  });

  describe('pop', () => {
    it('removes item from last to first', () => {
      expect(stack.pop()).toBe('Item Two');
      expect(stack.pop()).toBe('Item One');
      expect(stack.size).toBe(0);
    });

    it('returns undefined when stack is empty', () => {
      expect(stack.pop()).toBeUndefined();
    });
  });
});
