import { describe, expect, it } from 'vitest';
import Heap from './heap';

describe('heap', () => {
  const heap = new Heap();

  describe('insert', () => {
    it('insert nodes correctly', () => {
      heap.insert(4);
      expect(heap.getMin()).toBe(4);
      heap.insert(10);
      heap.insert(3);
    });
  });

  describe('getMin', () => {
    it('returns min', () => {
      expect(heap.getMin()).toBe(3);
    });
  });

  describe('extractMin', () => {
    it('returns min and remove it', () => {
      expect(heap.extractMin()).toBe(3);
      expect(heap.getMin()).toBe(4);
    });
  });

  describe('getMax', () => {
    it('cannot be accessed while heap is minHeap', () => {
      expect(() => heap.getMax()).toThrow();
    });
  });

  describe('extractMax', () => {
    it('cannot be accessed while heap is minHeap', () => {
      expect(() => heap.extractMax()).toThrow();
    });
  });

  describe('revert', () => {
    it('reverts minHeap to maxHeap successfully', () => {
      heap.revert();
      expect(heap.getMax()).toBe(10);
      expect(heap.extractMax()).toBe(10);
      expect(heap.getMax()).toBe(4);
    });

    it('avoids access to max functions', () => {
      expect(() => heap.getMin()).toThrow();
      expect(() => heap.extractMin()).toThrow();
    });
  });
});
