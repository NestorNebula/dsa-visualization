import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useMergeSort from './useMergeSort';
import timeoutTest from '@services/timeout-test';
import { Array } from '@services/data-structures';

const array = new Array([4, 2, 3, 1, 0]);
const sortedArray = new Array([0, 1, 2, 3, 4]);

describe('usemergesort', () => {
  it("doesn't do anything while start hasn't been called", async () => {
    const { result } = renderHook(() => useMergeSort(array, 10));
    await timeoutTest(() => undefined, 100);
    expect(JSON.stringify(result.current.sortedArray)).toBe(
      JSON.stringify(array)
    );
  });

  it('sorts array after calling start', async () => {
    const { result } = renderHook(() => useMergeSort(array, 10));
    act(() => result.current.start);
    while (!result.current.done) {
      await act(async () => await timeoutTest(() => undefined, 20));
    }
    expect(JSON.stringify(result.current.sortedArray)).toBe(
      JSON.stringify(sortedArray)
    );
  });

  it('stops sorting array after calling stop', async () => {
    const { result } = renderHook(() => useMergeSort(array, 100));
    act(() => result.current.start());
    await act(async () => await timeoutTest(() => result.current.stop(), 300));
    expect(JSON.stringify(result.current.sortedArray)).not.toBe(
      JSON.stringify(sortedArray)
    );
  });
});
