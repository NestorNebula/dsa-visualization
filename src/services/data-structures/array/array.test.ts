import { describe, expect, it } from 'vitest';
import Array from './array';

describe('array', () => {
  const array: Array<string> = new Array();
  it('creates a new array', () => {
    expect(array.length).toBe(0);
    expect(array[0]).toBeUndefined();
  });

  describe('push', () => {
    it('pushes new data to the end of the array', () => {
      array.push('Test');
      expect(array.length).toBe(1);
    });
  });

  describe('pop', () => {
    it('removes item from the end of the array', () => {
      const item = array.pop();
      expect(array.length).toBe(0);
      expect(item).toBe('Test');
    });
  });

  it('lets user access an item at a particular index', () => {
    array.push('Item one');
    array.push('Item two');
    expect(array[0]).toBe('Item one');
    expect(array[1]).toBe('Item two');
  });

  describe('shift', () => {
    it('removes item from the start of the array', () => {
      const item = array.shift();
      expect(array.length).toBe(1);
      expect(item).toBe('Item one');
    });
  });

  it('updates item at a particular index', () => {
    array[0] = 'Item one';
    expect(array[0]).toBe('Item one');
  });
});
