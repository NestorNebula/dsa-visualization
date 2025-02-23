import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BinaryTreeMain from './BinaryTreeMain';
import { useBinaryTrees } from '@hooks';

interface Node {
  value: number;
  left: Node | null;
  right: Node | null;
}

const { result } = renderHook(() => useBinaryTrees());
const { binaryTrees, binaryTree } = result.current;
beforeEach(() => {
  render(<BinaryTreeMain binaryTrees={binaryTrees} binaryTree={binaryTree} />);
});

describe('binarytreemain', () => {
  const user = userEvent.setup();

  it("renders all active tree's nodes", () => {
    function checkTreeNodes(root: Node): boolean {
      try {
        expect(screen.queryByText(root.value)).toBeInTheDocument();
        const left = root.left ? checkTreeNodes(root.left) : true;
        if (!left) return false;
        const right = root.right ? checkTreeNodes(root.right) : true;
        return right;
      } catch {
        return false;
      }
    }
    expect(checkTreeNodes(binaryTrees[binaryTree.active].root!)).toBeTruthy();
  });

  it('adds node to the tree', async () => {
    await user.click(screen.getByRole('button', { name: /add value/i }));
    await user.type(screen.getByLabelText(/add value/i), '48');
    await user.click(screen.getByRole('button', { name: /confirm/i }));
    expect(screen.getByText('48')).toBeInTheDocument();
  });

  it('removes node from the tree', async () => {
    const value = binaryTrees[binaryTree.active].root!.value;
    await user.click(screen.getByText(value));
    await user.click(screen.getByRole('button', { name: /remove/i }));
    expect(screen.queryByText(value)).not.toBeInTheDocument();
  });

  it('calls rebalance for active tree', async () => {
    binaryTrees[binaryTree.active].rebalance = vi.fn();
    await user.click(screen.getByRole('button', { name: /rebalance/i }));
    expect(binaryTrees[binaryTree.active].rebalance).toHaveBeenCalled();
  });
});
