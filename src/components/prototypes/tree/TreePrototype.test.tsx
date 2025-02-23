import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TreePrototype from './TreePrototype';
import { dataStructures } from '@services/default';

interface Node {
  value: number;
  left: Node | null;
  right: Node | null;
}

const tree = dataStructures.binaryTrees[0];
const mockOnNodeClick = vi.fn();
const mockGetOptions = vi.fn();

beforeEach(() => {
  render(
    <TreePrototype
      tree={tree}
      onNodeClick={mockOnNodeClick}
      getOptions={mockGetOptions}
    />
  );
});

describe('treeprototype', () => {
  const user = userEvent.setup();
  it('renders all tree nodes', () => {
    function checkTreeNodes(root: Node): boolean {
      try {
        const left = root.left ? checkTreeNodes(root.left) : true;
        if (!left) throw new Error();
        const right = root.right ? checkTreeNodes(root.right) : true;
        if (!right) throw new Error();
        expect(screen.queryByText(root.value)).toBeInTheDocument();
        return true;
      } catch {
        return false;
      }
    }
    expect(checkTreeNodes(tree.root!)).toBeTruthy();
  });

  it('calls onNodeClick on click', async () => {
    await user.click(screen.getByText(tree.root!.value));
    expect(mockOnNodeClick).toHaveBeenCalledWith(tree.root!.value);
  });

  it('calls getOptions for each node', () => {
    function getNumberOfNodes(root: Node): number {
      const left = root.left ? getNumberOfNodes(root.left) : 0;
      const right = root.right ? getNumberOfNodes(root.right) : 0;
      return left + right + 1;
    }

    const nodesNumber = getNumberOfNodes(tree.root!);
    expect(mockGetOptions).toHaveBeenCalledTimes(nodesNumber * 2);
  });
});
