import { describe, expect, it } from 'vitest';
import methods from './index';

class Obj {
  value = 'test';
  constructor(value: string) {
    this.value = value;
  }
}

describe('methods', () => {
  const objects: Obj[] = [new Obj('First obj')];

  describe('add', () => {
    it('adds new object to array', () => {
      const result = methods.add(objects, () => new Obj('Test obj'));
      expect(result).toHaveLength(objects.length + 1);
      expect(result[result.length - 1].value).toBe('Test obj');
    });
  });

  describe('remove', () => {
    it('removes object from array', () => {
      const result = methods.remove(objects, 0);
      expect(result).toHaveLength(objects.length - 1);
    });

    it("doesn't remove anything when index is incorrect", () => {
      expect(methods.remove(objects, 2)).toHaveLength(objects.length);
    });
  });
});
