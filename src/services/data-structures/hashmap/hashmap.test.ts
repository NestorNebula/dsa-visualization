import { describe, expect, it } from 'vitest';
import HashMap from './hashmap';

describe('HashMap', () => {
  const hashMap = new HashMap();

  describe('put', () => {
    it('adds item to hashmap', () => {
      hashMap.put('Item one');
      expect(hashMap.size).toBe(1);
    });
  });

  describe('remove', () => {
    it('returns existing item after removing it', () => {
      hashMap.put('Item to remove');
      const item = hashMap.remove('Item to remove');
      expect(hashMap.size).toBe(1);
      expect(item).toBe('Item to remove');
    });

    it("returns undefined when item doesn't exist", () => {
      const item = hashMap.remove('Non-existent item');
      expect(item).toBeUndefined();
    });
  });

  describe('contains', () => {
    it('returns true when item exists', () => {
      expect(hashMap.contains('Item one')).toBeTruthy();
    });

    it("returns false when item doesn't exist", () => {
      expect(hashMap.contains('Non-existent item')).toBeFalsy();
    });
  });
});
