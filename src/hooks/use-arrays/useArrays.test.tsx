import { describe, expect, it } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useArrays from './useArrays';
import { dataStructures } from '@services/default';

describe('useArrays', () => {
  const arrays = dataStructures.arrays;

  it('keeps track of active array', () => {
    const { result } = renderHook(() => useArrays(arrays));
    expect(result.current.array.active).toBe(0);
    act(() => result.current.array.set(1));
    expect(result.current.array.active).toBe(1);
  });

  it('keeps track of active item', () => {
    const { result } = renderHook(() => useArrays(arrays));
    expect(result.current.item.active).toBeNull();
    act(() => result.current.item.set(1));
    expect(result.current.item.active).toBe(1);
  });
});
