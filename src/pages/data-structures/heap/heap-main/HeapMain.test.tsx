import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeapMain from './HeapMain';
import { useHeaps } from '@hooks';

const { result } = renderHook(() => useHeaps());
const { heaps, heap } = result.current;
heaps[heap.active].revert = vi.fn();
heaps[heap.active].extractMin = vi.fn();
beforeEach(() => {
  render(<HeapMain heaps={heaps} heap={heap} />);
});

describe('heapmain', () => {
  const user = userEvent.setup();

  it('renders all heaps nodes', () => {
    for (let i = 0; i < heaps[heap.active].heap.length; i++) {
      expect(
        screen.queryByText(heaps[heap.active].heap[i])
      ).toBeInTheDocument();
    }
  });

  it('adds value to the heap', async () => {
    await user.click(screen.getByRole('button', { name: /add value/i }));
    await user.type(screen.getByLabelText(/add value/i), '78');
    await user.click(screen.getByRole('button', { name: /confirm/i }));
  });

  it('calls extract function on extract button click', async () => {
    await user.click(screen.getByRole('button', { name: /extract/i }));
    expect(heaps[heap.active].extractMin).toHaveBeenCalled();
  });

  it('calls revert on revert button click', async () => {
    await user.click(screen.getByRole('button', { name: /revert/i }));
    expect(heaps[heap.active].revert).toHaveBeenCalled();
  });
});
