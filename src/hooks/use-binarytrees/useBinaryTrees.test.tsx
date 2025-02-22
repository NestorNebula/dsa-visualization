import { describe, expect, it, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useBinaryTrees from './useBinaryTrees';

describe('usebinarytrees', () => {
  describe('add', () => {
    it('adds binaryTree', () => {
      const { result } = renderHook(() => useBinaryTrees());
      const { binaryTrees, binaryTree } = result.current;
      act(() => binaryTree.add());
      expect(result.current.binaryTrees).toHaveLength(binaryTrees.length + 1);
    });
  });

  describe('remove', () => {
    it('removes binaryTree from binaryTrees', () => {
      const { result } = renderHook(() => useBinaryTrees());
      const { binaryTrees, binaryTree } = result.current;
      act(() => binaryTree.remove(0));
      expect(result.current.binaryTrees).toHaveLength(binaryTrees.length - 1);
    });
  });

  describe('addValue', () => {
    it('adds value to active binaryTree', () => {
      const { result } = renderHook(() => useBinaryTrees());
      act(() => result.current.binaryTree.addValue(17));
      expect(
        result.current.binaryTrees[result.current.binaryTree.active].contains(
          17
        )
      ).toBeTruthy();
    });
  });

  describe('removeValue', () => {
    it('removes value from active binaryTree', () => {
      const { result } = renderHook(() => useBinaryTrees());
      const { binaryTrees, binaryTree } = result.current;
      const value = binaryTrees[binaryTree.active].root!.value;
      act(() => binaryTree.removeValue(value));
      expect(binaryTrees[binaryTree.active].root!.value).not.toBe(value);
    });
  });

  describe('rebalance', () => {
    it('calls active tree rebalance method', () => {
      const { result } = renderHook(() => useBinaryTrees());
      const { binaryTrees, binaryTree } = result.current;
      binaryTrees[binaryTree.active].rebalance = vi.fn();
      act(() => binaryTree.rebalance());
      expect(binaryTrees[binaryTree.active].rebalance).toHaveBeenCalled();
    });
  });
});
