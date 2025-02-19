import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddButton from './AddButton';

const mockAdd = vi.fn();

describe('addbutton', () => {
  it('renders button', () => {
    render(<AddButton add={mockAdd} />);
    expect(screen.queryByRole('button', { name: /add/i })).toBeInTheDocument();
  });

  it('renders button in text version when prop exists', () => {
    render(<AddButton add={mockAdd} textVersion />);
    expect(screen.queryByText('Add')).toBeInTheDocument();
  });

  it('calls add on click', async () => {
    render(<AddButton add={mockAdd} />);
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /add/i }));
    expect(mockAdd).toHaveBeenCalled();
  });
});
