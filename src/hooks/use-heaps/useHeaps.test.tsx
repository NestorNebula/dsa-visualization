import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useHeaps from './useHeaps';

describe('useheaps', () => {
  describe('add', () => {
    it('adds heap', () => {
      const { result } = renderHook(() => useHeaps());
      const { heaps, heap } = result.current;
      act(() => heap.add());
      expect(result.current.heaps).toHaveLength(heaps.length + 1);
    });
  });

  describe('remove', () => {
    it('removes heap from heaps', () => {
      const { result } = renderHook(() => useHeaps());
      const { heaps, heap } = result.current;
      act(() => heap.remove(0));
      expect(result.current.heaps).toHaveLength(heaps.length - 1);
    });
  });

  describe('addValue', () => {
    it('adds value to active heap', () => {
      const newValue = 9;
      const { result } = renderHook(() => useHeaps());
      act(() => result.current.heap.addValue(newValue));
      const heap = result.current.heaps[result.current.heap.active];
      let min = heap.extractMin();
      while (heap.heap.length && min && min < newValue) {
        min = heap.extractMin();
      }
      expect(min).toBe(newValue);
    });
  });

  describe('removeValue', () => {
    it('removes value from active heap', () => {
      const { result } = renderHook(() => useHeaps());
      const value = result.current.heaps[result.current.heap.active].heap[0];
      act(() => result.current.heap.removeValue(value));
      expect(result.current.heaps[result.current.heap.active].heap[0]).not.toBe(
        value
      );
    });
  });

  describe('revert', () => {
    it('revert heap from min to max', () => {
      const { result } = renderHook(() => useHeaps());
      const heap = result.current.heaps[result.current.heap.active];
      const minValue = heap.heap[0];
      act(() => result.current.heap.revert());
      expect(heap.heap[0]).toBeGreaterThan(minValue);
      expect(heap.type).toBe('MAX');
    });
  });
});
