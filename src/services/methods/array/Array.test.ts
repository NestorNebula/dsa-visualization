import { describe, expect, it } from 'vitest';
import methods from './array';
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
});
