import { describe, expect, it } from 'vitest';
import methods from './Array';
import { dataStructures } from '@services/default';

describe('array methods', () => {
  const arrays = dataStructures.arrays;

  describe('add', () => {
    it('adds new array to arrays', () => {
      const result = methods.add(arrays);
      expect(result).toHaveLength(arrays.length + 1);
      expect(result[result.length - 1]).toHaveLength(0);
    });
  });

  describe('remove', () => {
    it('removes array from arrays', () => {
      const result = methods.remove(arrays, 1);
      expect(result).toHaveLength(arrays.length - 1);
      expect(result[0]).toEqual(arrays[0]);
    });

    it("doesn't remove anything when index is incorrect", () => {
      expect(methods.remove(arrays, 2)).toHaveLength(arrays.length);
    });
  });

  describe('addItem', () => {
    it('adds item to the correct array', () => {
      const result = methods.addItem(arrays, 0, 3);
      expect(result[0].length).toBe(arrays[0].length + 1);
      expect(result[0][result[0].length - 1]).toBe(3);
    });

    it("doesn't do anything when index is incorrect", () => {
      expect(methods.addItem(arrays, 2, 3)).toEqual(arrays);
    });
  });

  describe('updateItem', () => {
    it('updates item correctly', () => {
      const result = methods.updateItem(arrays, 0, 1, 3);
      expect(result[0][1]).toBe(3);
    });

    it("doesn't do anything when any index is incorrect", () => {
      expect(methods.updateItem(arrays, 2, 4, 3)).toEqual(arrays);
    });
  });
});
