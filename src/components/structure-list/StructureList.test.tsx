import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StructureList from './StructureList';

const mockSetActive = vi.fn();
beforeEach(() => {
  render(
    <StructureList active={0} setActive={mockSetActive}>
      <div>Item one</div>
      <div>Item two</div>
    </StructureList>
  );
});

describe('structurelist', () => {
  it('renders all elements', () => {
    expect(screen.queryByText('Item one')).toBeInTheDocument();
    expect(screen.queryByText('Item two')).toBeInTheDocument();
  });

  it('renders each structure inside button', () => {
    expect(screen.queryAllByRole('button', { name: /active/i })).toHaveLength(
      2
    );
  });

  it('calls setActive for inactive structures', async () => {
    const user = userEvent.setup();
    const buttons = screen.queryAllByRole('button', { name: /active/i });
    await user.click(buttons[0]);
    expect(mockSetActive).not.toHaveBeenCalled();
    await user.click(buttons[1]);
    expect(mockSetActive).toHaveBeenCalled();
  });
});
