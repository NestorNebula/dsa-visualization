import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Node from './Node';

const mockClick = vi.fn();
beforeEach(() => {
  render(<Node value={3} onClick={mockClick} />);
});

describe('node', () => {
  const user = userEvent.setup();

  it('renders node value', () => {
    expect(screen.queryByText(3)).toBeInTheDocument();
  });

  it('calls onClick on click', async () => {
    await user.click(screen.getByText(3));
    expect(mockClick).toHaveBeenCalled();
  });
});
