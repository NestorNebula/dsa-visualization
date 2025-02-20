import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useLinkedLists from './useLinkedLists';

describe('uselinkedlists', () => {
  describe('add', () => {
    it('adds linked list', () => {
      const { result } = renderHook(() => useLinkedLists());
      const { linkedLists, linkedList } = result.current;
      act(() => linkedList.add());
      expect(result.current.linkedLists).toHaveLength(linkedLists.length + 1);
    });
  });

  describe('remove', () => {
    it('removes linked list', () => {
      const { result } = renderHook(() => useLinkedLists());
      const { linkedLists, linkedList } = result.current;
      act(() => linkedList.remove(0));
      expect(result.current.linkedLists).toHaveLength(linkedLists.length - 1);
    });
  });

  describe('addItem', () => {
    it('adds item to active linked list', () => {
      const { result } = renderHook(() => useLinkedLists());
      const { linkedLists, linkedList } = result.current;
      act(() => linkedList.addItem(4));
      expect(linkedLists[linkedList.active].tail?.value).toBe(4);
    });
  });

  describe('removeItem', () => {
    it('removes item to active linked list', () => {
      const { result } = renderHook(() => useLinkedLists());
      const { linkedLists, linkedList } = result.current;
      const secondValue =
        linkedLists[result.current.linkedList.active].head?.next?.value;
      act(() =>
        linkedList.removeItem(linkedLists[linkedList.active].head?.value)
      );
      expect(
        result.current.linkedLists[result.current.linkedList.active].head?.value
      ).toBe(secondValue);
    });
  });
});
