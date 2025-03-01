import { describe, expect, it, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useInterval from './useInterval';

const mockCallback = vi.fn();

const testPromise = async (cb: () => void, timeout: number) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      try {
        cb();
        resolve(true);
      } catch {
        resolve(false);
      }
    }, timeout);
  });
};

describe('useinterval', () => {
  it('calls callback function every second (default)', async () => {
    renderHook(() => useInterval(mockCallback));
    expect(
      await testPromise(() => {
        expect(mockCallback).toHaveBeenCalledTimes(2);
      }, 2050)
    ).toBeTruthy();
  });

  it('calls callback function with custom delay as interval', async () => {
    renderHook(() => useInterval(mockCallback, 100));
    expect(
      await testPromise(() => {
        expect(mockCallback).toHaveBeenCalledTimes(10);
      }, 1050)
    ).toBeTruthy();
  });

  describe('setdelay', () => {
    it('updates delay between callbacks', async () => {
      const { result } = renderHook(() => useInterval(mockCallback));
      expect(
        await testPromise(() => {
          expect(mockCallback).toHaveBeenCalledTimes(1);
          act(() => result.current.setDelay(100));
        }, 1000)
      ).toBeTruthy();
      expect(
        await testPromise(
          () => expect(mockCallback).toHaveBeenCalledTimes(10),
          1000
        )
      ).toBeTruthy();
    });
  });

  describe('stop', () => {
    it('stops interval', async () => {
      const { result } = renderHook(() => useInterval(mockCallback));
      act(() => result.current.stop());

      expect(
        await testPromise(() => {
          expect(mockCallback).not.toHaveBeenCalled();
        }, 1000)
      ).toBeTruthy();
    });
  });
});
