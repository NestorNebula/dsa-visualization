import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useLocalStorage from './useLocalStorage';

describe('uselocalstorage', () => {
  it('returns default when nothing is stored in local storage', () => {
    const { result } = renderHook(() =>
      useLocalStorage('non existent key', [0])
    );
    const { data } = result.current;
    expect(data).toEqual([0]);
  });

  it('returns default when local storage value is empty', () => {
    localStorage.setItem('empty', JSON.stringify([]));
    const { result } = renderHook(() => useLocalStorage('empty', [0]));
    const { data } = result.current;
    expect(data).toEqual([0]);
  });

  it('returns stored data', () => {
    localStorage.setItem('data', JSON.stringify([0, 1, 2]));
    const { result } = renderHook(() => useLocalStorage('data', [0]));
    const { data } = result.current;
    expect(data).toEqual([0, 1, 2]);
  });

  it('updates data on update call', () => {
    const { result } = renderHook(() => useLocalStorage('data', [0]));
    const { update } = result.current;
    act(() => update([1, 2, 3]));
    expect(result.current.data).toEqual([1, 2, 3]);
  });

  it("sets data to default value instead of stored one if stored one doesn't have correct type", () => {
    const { result } = renderHook(() => useLocalStorage('data', ['0']));
    const { data } = result.current;
    expect(data).toEqual(['0']);
  });
});
