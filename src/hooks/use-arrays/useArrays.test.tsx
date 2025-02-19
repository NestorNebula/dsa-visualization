import { describe, expect, it } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useArrays from './useArrays';

describe('useArrays', () => {
  it('keeps track of active array', () => {
    const { result } = renderHook(() => useArrays());
    expect(result.current.array.active).toBe(0);
    act(() => result.current.array.set(1));
    expect(result.current.array.active).toBe(1);
  });

  it('keeps track of active item', () => {
    const { result } = renderHook(() => useArrays());
    expect(result.current.item.active).toBeNull();
    act(() => result.current.item.set(1));
    expect(result.current.item.active).toBe(1);
  });

  it('adds array to arrays', () => {
    const { result } = renderHook(() => useArrays());
    const length = result.current.arrays.length;
    act(() => result.current.array.add());
    expect(result.current.arrays).toHaveLength(length + 1);
  });

  it('removes array from arrays', () => {
    const { result } = renderHook(() => useArrays());
    const length = result.current.arrays.length;
    act(() => result.current.array.remove(length - 1));
    expect(result.current.arrays).toHaveLength(length - 1);
  });
});
