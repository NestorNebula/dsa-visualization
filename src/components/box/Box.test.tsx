import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Box from './Box';

const mockClick = vi.fn();

beforeEach(() => {
  render(<Box value={1} onClick={mockClick} />);
});

describe('box', () => {
  it("renders box's value", () => {
    expect(screen.queryByText(1)).toBeInTheDocument();
  });

  it('calls onClick on click', async () => {
    const user = userEvent.setup();
    await user.click(screen.getByText(1));
    expect(mockClick).toHaveBeenCalled();
  });
});
