import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectionSortMain from './SelectionSortMain';
import { dataStructures } from '@services/default';

const array = dataStructures.arrays[0];
beforeEach(() => {
  render(<SelectionSortMain array={array} />);
});

describe('selectionsortmain', () => {
  it('renders array elements with paused status', () => {
    for (let i = 0; i < array.length; i++) {
      expect(screen.queryByText(array[i])).toBeInTheDocument();
    }
  });

  it('starts sorting array when clicking on play button', async () => {
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /play/i }));
    expect(screen.queryByText('Active')).toBeInTheDocument();
  });
});
