import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SpeedBar from './SpeedBar';

const mockSetStatus = vi.fn();
beforeEach(() => {
  render(<SpeedBar status="Active" setStatus={mockSetStatus} />);
});

describe('speedbar', () => {
  it('renders status', () => {
    expect(screen.queryByText('Active')).toBeInTheDocument();
  });

  it('calls update status correctly', async () => {
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /pause/i }));
    expect(mockSetStatus).toHaveBeenCalledWith('Paused');
    await user.click(screen.getByRole('button', { name: /play/i }));
    expect(mockSetStatus).toHaveBeenLastCalledWith('Active');
    await user.click(screen.getByRole('button', { name: /faster/i }));
    expect(mockSetStatus).toHaveBeenLastCalledWith('Faster');
  });
});
