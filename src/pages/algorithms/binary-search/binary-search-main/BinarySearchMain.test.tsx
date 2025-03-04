import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BinarySearchMain from './BinarySearchMain';
import { dataStructures } from '@services/default';

const bst = dataStructures.binaryTrees[0];
beforeEach(() => {
  render(<BinarySearchMain bst={bst} />);
});

describe('binarysearchmain', () => {
  const user = userEvent.setup();
  it('renders bst elements with paused status', () => {
    function checkElements(subTree: NonNullable<typeof bst.root>) {
      if (subTree.left) checkElements(subTree.left);
      if (subTree.right) checkElements(subTree.right);
      expect(screen.queryByText(subTree.value)).toBeInTheDocument();
    }

    checkElements(bst.root!);
    expect(screen.queryByText('Paused')).toBeInTheDocument();
  });

  it('sets seach value', async () => {
    await user.click(screen.getByRole('button', { name: /value/i }));
    await user.type(screen.getByLabelText(/value/i), '5');
    await user.click(screen.getByRole('button', { name: /confirm/i }));
    expect(screen.queryByText(/searching: 5/i)).toBeInTheDocument();
  });

  it('starts searching value on play button click', async () => {
    await user.click(screen.getByRole('button', { name: /value/i }));
    await user.type(screen.getByLabelText(/value/i), '5');
    await user.click(screen.getByRole('button', { name: /confirm/i }));
    await user.click(screen.getByRole('button', { name: /play/i }));
    expect(screen.queryByText('Active')).toBeInTheDocument();
  });
});
