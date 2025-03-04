import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LinearSearchMain from './LinearSearchMain';
import { dataStructures } from '@services/default';

const array = dataStructures.arrays[0];
beforeEach(() => {
  render(<LinearSearchMain array={array} />);
});

describe('linearsearchmain', () => {
  const user = userEvent.setup();
  it('renders array elements with paused status', () => {
    for (let i = 0; i < array.length; i++) {
      expect(screen.queryByText(array[i])).toBeInTheDocument();
    }
    expect(screen.queryByText('Paused')).toBeInTheDocument();
  });

  it('adds value to search', async () => {
    await user.click(screen.getByRole('button', { name: /value/i }));
    await user.type(screen.getByLabelText(/value/i), '3');
    await user.click(screen.getByRole('button', { name: /confirm/i }));
    expect(screen.queryByText(/searching: 3/i)).toBeInTheDocument();
  });

  it('starts searching number when start button is clicked', async () => {
    await user.click(screen.getByRole('button', { name: /value/i }));
    await user.type(screen.getByLabelText(/value/i), '3');
    await user.click(screen.getByRole('button', { name: /confirm/i }));
    await user.click(screen.getByRole('button', { name: /play/i }));
    expect(screen.queryByText('Active')).toBeInTheDocument();
  });
});
