import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useBinarySearch from './useBinarySearch';
import { BinaryTree } from '@services/data-structures';
import timeoutTest from '@services/timeout-test';

const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);

describe('usebinarysearch', () => {
  it("doesn't do anything while start hasn't been called", () => {
    const { result } = renderHook(() => useBinarySearch(binaryTree, 15, 1));
    expect(result.current.done).toBeFalsy();
    expect(result.current.checked).toEqual(binaryTree.root);
  });

  it('tries to find the value when start is called', async () => {
    const { result } = renderHook(() => useBinarySearch(binaryTree, 15, 10));
    act(() => result.current.start());
    while (!result.current.done) {
      await act(async () => await timeoutTest(() => undefined, 10));
    }
  });

  it('stops searching value when stop is called', async () => {
    const { result } = renderHook(() => useBinarySearch(binaryTree, 15, 100));
    act(() => result.current.start());
    await act(async () => await timeoutTest(() => result.current.stop(), 200));
    expect(result.current.done).toBeFalsy();
  });

  it('finds value', async () => {
    const { result } = renderHook(() => useBinarySearch(binaryTree, 15, 10));
    act(() => result.current.start());
    while (!result.current.done) {
      await act(async () => await timeoutTest(() => undefined, 10));
    }
    expect(result.current.found).toBeTruthy();
  });

  it("can't find non-existent value", async () => {
    const { result } = renderHook(() => useBinarySearch(binaryTree, 25, 10));
    act(() => result.current.start());
    while (!result.current.done) {
      await act(async () => await timeoutTest(() => undefined, 10));
    }
    expect(result.current.found).toBeFalsy();
  });
});
