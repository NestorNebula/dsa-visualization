import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MergeSortMain from './MergeSortMain';
import { dataStructures } from '@services/default';

const array = dataStructures.arrays[0];
beforeEach(() => {
  render(<MergeSortMain array={array} />);
});

describe('mergesortmain', () => {
  it('renders array elements with paused status', () => {
    for (let i = 0; i < array.length; i++) {
      expect(screen.queryAllByText(array[i])).toHaveLength(2);
    }
    expect(screen.queryByText('Paused')).toBeInTheDocument();
  });

  it('starts sorting array on play button click', async () => {
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /play/i }));
    expect(screen.queryByText('Active')).toBeInTheDocument();
  });
});
