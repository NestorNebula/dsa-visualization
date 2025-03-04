import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useLinearSearch from './useLinearSearch';
import timeoutTest from '@services/timeout-test';
import { Array } from '@services/data-structures';

const array = new Array([4, 2, 3, 1]);

describe('uselinearsearch', () => {
  it("doesn't do anything while start hasn't been called", () => {
    const { result } = renderHook(() => useLinearSearch(array, 1, 0));
    expect(result.current.done).toBeFalsy();
  });

  it('tries to find the number/string when start is called', async () => {
    const { result } = renderHook(() => useLinearSearch(array, 1, 10));
    act(() => result.current.start());
    while (!result.current.done) {
      await act(async () => await timeoutTest(() => undefined, 10));
    }
  });

  it('stops searching the value when stop is called', async () => {
    const { result } = renderHook(() => useLinearSearch(array, 1, 10));
    act(() => result.current.start());
    await act(async () => await timeoutTest(() => result.current.stop(), 30));
    expect(result.current.done).toBeFalsy();
  });

  it('finds value', async () => {
    const { result } = renderHook(() => useLinearSearch(array, 1, 10));
    act(() => result.current.start());
    while (!result.current.done) {
      await act(async () => await timeoutTest(() => undefined, 10));
    }
    expect(result.current.found).toBeTruthy();
    expect(result.current.checked).toBe(3);
  });

  it("can't find non-existent value", async () => {
    const { result } = renderHook(() => useLinearSearch(array, 5, 10));
    act(() => result.current.start());
    while (!result.current.done) {
      await act(async () => await timeoutTest(() => undefined, 10));
    }
    expect(result.current.found).toBeFalsy();
    expect(result.current.checked).toBe(4);
  });
});
