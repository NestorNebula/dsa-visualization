import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StructureList from './StructureList';

const mockSetActive = vi.fn();
const mockAdd = vi.fn();
const mockRemove = vi.fn();
beforeEach(() => {
  render(
    <StructureList
      active={0}
      setActive={mockSetActive}
      add={mockAdd}
      remove={mockRemove}
    >
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
    const buttons = screen.getAllByRole('button', { name: /active/i });
    await user.click(buttons[0]);
    expect(mockSetActive).not.toHaveBeenCalled();
    await user.click(buttons[1]);
    expect(mockSetActive).toHaveBeenCalled();
  });

  it('calls add on add button click', async () => {
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: /add/i });
    await user.click(button);
    expect(mockAdd).toHaveBeenCalled();
  });

  it('calls remove when clicking on delete button', async () => {
    const user = userEvent.setup();
    const buttons = screen.getAllByRole('button', { name: /delete/i });
    expect(buttons).toHaveLength(2);
    await user.click(buttons[0]);
    expect(mockRemove).toHaveBeenCalled();
  });
});
