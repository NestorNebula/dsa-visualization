import { describe, it, expect } from 'vitest';
import { render, renderHook, screen } from '@testing-library/react';
import ArraySidebar from './ArraySidebar';
import { useArrays } from '@hooks';

describe('array-sidebar', () => {
  it('renders all array items', () => {
    const { result } = renderHook(() => useArrays());
    const { arrays, array } = result.current;
    render(<ArraySidebar arrays={[arrays[0]]} array={array} />);
    for (let i = 0; i < arrays[0].length; i++) {
      expect(screen.queryByText(arrays[0][i])).toBeInTheDocument();
    }
  });
});
