import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useSelectionSort from './useSelectionSort';
import { Array } from '@services/data-structures';
import timeoutTest from '@services/timeout-test';

const array = new Array([4, 2, 3, 1]);
const sortedArray = new Array([1, 2, 3, 4]);

describe('useselectionsort', () => {
  it("doesn't do anything while start hasn't been called", async () => {
    const { result } = renderHook(() => useSelectionSort(array, 100));
    expect(
      await timeoutTest(
        () =>
          expect(JSON.stringify(result.current.sortedArray)).toBe(
            JSON.stringify(array)
          ),
        200
      )
    ).toBeTruthy();
  });

  it('sorts array after calling start', async () => {
    const { result } = renderHook(() => useSelectionSort(array, 10));
    act(() => result.current.start());
    while (!result.current.done) {
      await act(async () => await timeoutTest(() => undefined, 20));
    }
    expect(JSON.stringify(result.current.sortedArray)).toBe(
      JSON.stringify(sortedArray)
    );
  });

  it('stops sorting array after calling stop', async () => {
    const { result } = renderHook(() => useSelectionSort(array, 10));
    act(() => result.current.start());
    await act(async () => await timeoutTest(() => result.current.stop(), 100));
    expect(JSON.stringify(result.current.sortedArray)).not.toBe(
      JSON.stringify(sortedArray)
    );
  });
});
