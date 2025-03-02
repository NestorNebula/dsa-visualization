import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BubbleSortMain from './BubbleSortMain';
import { dataStructures } from '@services/default';
import timeoutTest from '@services/timeout-test';

const array = dataStructures.arrays[0];

beforeEach(() => {
  render(<BubbleSortMain array={array} />);
});

describe('bubblesortmain', () => {
  const user = userEvent.setup();
  it('renders array with paused status', () => {
    for (let i = 0; i < array.length; i++) {
      expect(screen.queryByText(array[i])).toBeInTheDocument();
    }
    expect(screen.queryByText('Paused')).toBeInTheDocument();
  });

  it('starts sorting array on play click', async () => {
    await user.click(screen.getByRole('button', { name: /play/i }));
    expect(screen.queryByText('Active')).toBeInTheDocument();
  });

  it('renders done after sorting array', async () => {
    await user.click(screen.getByRole('button', { name: /play/i }));
    await timeoutTest(() => undefined, 3000);
    expect(screen.queryByText('Done')).toBeInTheDocument();
  });
});
