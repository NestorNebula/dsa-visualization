import { describe, expect, it } from 'vitest';
import LinkedList from './linked-list';

describe('linked list', () => {
  const linkedList = new LinkedList();
  describe('add', () => {
    it('adds item as first node when list is empty', () => {
      linkedList.add('Head node');
      expect(linkedList.head).toBe(linkedList.tail);
      expect(linkedList.head!.value).toBe('Head node');
    });

    it("adds item to the tail when list isn't empty", () => {
      linkedList.add('Tail node');
      expect(linkedList.head).not.toBe(linkedList.tail);
      expect(linkedList.tail!.value).toBe('Tail node');
    });
  });

  describe('remove', () => {
    it('removes existing node', () => {
      linkedList.add('Node to remove');
      const node = linkedList.remove('Node to remove');
      expect(node!.value).toBe('Node to remove');
    });

    it("returns undefined when node doesn't exist", () => {
      const node = linkedList.remove('Not an existing node');
      expect(node).toBeUndefined();
    });
  });

  describe('contains', () => {
    it('returns true when node exists', () => {
      expect(linkedList.contains('Tail node')).toBeTruthy();
    });

    it("returns false when node doesn't exist", () => {
      expect(linkedList.contains('Not an existing node')).toBeFalsy();
    });
  });
});
