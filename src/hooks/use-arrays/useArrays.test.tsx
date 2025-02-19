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

  it('adds item to the end of array', () => {
    const { result } = renderHook(() => useArrays());
    act(() => result.current.array.push('val'));
    expect(result.current.arrays[0][result.current.arrays[0].length - 1]).toBe(
      'val'
    );
  });

  it('removes item from the beginning of array', () => {
    const { result } = renderHook(() => useArrays());
    const prev = result.current.arrays[result.current.array.active][1];
    act(() => result.current.array.shift());
    expect(result.current.arrays[result.current.array.active][0]).toBe(prev);
  });

  it('removes item from the end of array', () => {
    const { result } = renderHook(() => useArrays());
    const length = result.current.arrays[result.current.array.active].length;
    act(() => result.current.array.pop());
    expect(result.current.arrays[result.current.array.active]).toHaveLength(
      length - 1
    );
  });
});
