import { describe, expect, it } from 'vitest';
import BinaryTree from './binary-tree';

describe('binary tree', () => {
  const binaryTree = new BinaryTree();

  describe('insert', () => {
    it('insert nodes into the tree correctly', () => {
      binaryTree.insert(1);
      expect(binaryTree.root?.value).toBe(1);
      binaryTree.insert(2);
      expect(binaryTree.root?.right?.value).toBe(2);
      binaryTree.insert(0);
      expect(binaryTree.root?.left?.value).toBe(0);
    });
  });

  describe('remove', () => {
    it('returns deleted node', () => {
      expect(binaryTree.remove(0)?.value).toBe(0);
      expect(binaryTree.root?.left).toBeNull();
    });

    it("returns undefined when value isn't in the tree", () => {
      expect(binaryTree.remove(-1)).toBeUndefined();
    });
  });

  describe('rebalance', () => {
    it('rebalances the tree correctly', () => {
      binaryTree.insert(3);
      binaryTree.rebalance();
      expect(binaryTree.root?.value).toBe(2);
      expect(binaryTree.root?.left?.value).toBe(1);
      expect(binaryTree.root?.right?.value).toBe(3);
    });
  });

  describe('contains', () => {
    it('returns true if the node is in the tree', () => {
      expect(binaryTree.contains(2)).toBeTruthy();
    });

    it("returns false when node isn't in the tree", () => {
      expect(binaryTree.contains(-1)).toBeFalsy();
    });
  });
});
