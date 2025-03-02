import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useBubbleSort from './useBubbleSort';
import { Array } from '@services/data-structures';
import timeoutTest from '@services/timeout-test';

const array = new Array([4, 2, 3, 1]);
const sortedArray = [1, 2, 3, 4];

describe('usebubblesort', () => {
  it("doesn't do anything while start hasn't been called", async () => {
    const { result } = renderHook(() => useBubbleSort(array, 100));
    expect(
      await timeoutTest(() => {
        expect(JSON.stringify(result.current.sortedArray)).toBe(
          JSON.stringify(array)
        );
      }, 200)
    ).toBeTruthy();
  });

  it('sorts array after clicking on start', async () => {
    const { result } = renderHook(() => useBubbleSort(array, 100));
    act(() => result.current.start());
    let count = 0;
    while (!result.current.done && count < 3) {
      await act(async () => {
        await timeoutTest(() => count++, 1000);
      });
    }
    expect(result.current.done).toBeTruthy();
    expect(JSON.stringify(result.current.sortedArray)).toBe(
      JSON.stringify(sortedArray)
    );
  });

  it('stops sorting when stop is called', async () => {
    const { result } = renderHook(() => useBubbleSort(array, 100));
    act(() => result.current.start());
    await act(
      async () =>
        await timeoutTest(() => {
          act(() => result.current.stop());
        }, 200)
    );
    expect(result.current.sortedArray[0]).toBe(array[1]);
    expect(JSON.stringify(result.current.sortedArray)).not.toBe(
      JSON.stringify(sortedArray)
    );
  });
});
