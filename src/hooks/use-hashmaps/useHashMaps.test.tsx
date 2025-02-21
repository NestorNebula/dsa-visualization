import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useHashMaps from './useHashMaps';

describe('usehashmaps', () => {
  describe('add', () => {
    it('add hashmap', () => {
      const { result } = renderHook(() => useHashMaps());
      const { hashMaps } = result.current;
      act(() => result.current.hashMap.add());
      expect(result.current.hashMaps.length).toBe(hashMaps.length + 1);
    });
  });

  describe('remove', () => {
    it('removes hashmap', () => {
      const { result } = renderHook(() => useHashMaps());
      const { hashMaps } = result.current;
      act(() => result.current.hashMap.remove(0));
      expect(result.current.hashMaps.length).toBe(hashMaps.length - 1);
    });
  });

  describe('addValue', () => {
    it('adds value to active hashmap', () => {
      const { result } = renderHook(() => useHashMaps());
      act(() => result.current.hashMap.addValue('test'));
      expect(
        result.current.hashMaps[result.current.hashMap.active].contains('test')
      ).toBeTruthy();
    });
  });

  describe('removeValue', () => {
    it('removes value from active hashmap', () => {
      const { result } = renderHook(() => useHashMaps());
      act(() => result.current.hashMap.removeValue('test'));
      expect(
        result.current.hashMaps[result.current.hashMap.active].contains('test')
      ).toBeFalsy();
    });
  });
});
