import { describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useEscape from './useEscape';

const mockCallback = vi.fn();

describe('useescape', () => {
  it('calls callabck on escape click', async () => {
    renderHook(() => useEscape(mockCallback));
    const user = userEvent.setup();
    await user.keyboard('{Escape}');
    expect(mockCallback).toHaveBeenCalled();
  });
});
