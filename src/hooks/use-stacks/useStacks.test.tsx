import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useStacks from './useStacks';

describe('usestacks', () => {
  describe('add', () => {
    it('adds new stack', () => {
      const { result } = renderHook(() => useStacks());
      const { stacks } = result.current;
      act(() => result.current.stack.add());
      expect(result.current.stacks).toHaveLength(stacks.length + 1);
    });
  });

  describe('remove', () => {
    it('removes stack from stacks', () => {
      const { result } = renderHook(() => useStacks());
      const { stacks } = result.current;
      act(() => result.current.stack.remove(0));
      expect(result.current.stacks).toHaveLength(stacks.length - 1);
    });
  });

  describe('push', () => {
    it('adds item to active stack', () => {
      const { result } = renderHook(() => useStacks());
      const stack = result.current.stacks[result.current.stack.active];
      act(() => result.current.stack.push('test'));
      expect(stack[stack.size - 1]).toBe('test');
    });
  });

  describe('pop', () => {
    it('removes last item from active stack', () => {
      const { result } = renderHook(() => useStacks());
      const stack = result.current.stacks[result.current.stack.active];
      const item = stack[stack.size - 1];
      act(() => result.current.stack.pop());
      expect(stack[stack.size - 1]).not.toBe(item);
    });
  });
});
