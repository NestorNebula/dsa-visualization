import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SpeedBar from './SpeedBar';

const mockSetStatus = vi.fn();

describe('speedbar', () => {
  it('renders status', () => {
    render(<SpeedBar status="Active" setStatus={mockSetStatus} />);
    expect(screen.queryByText('Active')).toBeInTheDocument();
  });

  it('calls update status correctly', async () => {
    const user = userEvent.setup();
    const page = render(<SpeedBar status="Active" setStatus={mockSetStatus} />);
    await user.click(screen.getByRole('button', { name: /pause/i }));
    expect(mockSetStatus).toHaveBeenCalledWith('Paused');
    page.rerender(<SpeedBar status="Paused" setStatus={mockSetStatus} />);
    await user.click(screen.getByRole('button', { name: /play/i }));
    expect(mockSetStatus).toHaveBeenLastCalledWith('Active');
    await user.click(screen.getByRole('button', { name: /faster/i }));
    expect(mockSetStatus).toHaveBeenLastCalledWith('Faster');
  });
});
