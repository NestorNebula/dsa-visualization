import { beforeEach, describe, expect, it } from 'vitest';
import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HashMapMain from './HashMapMain';
import { useHashMaps } from '@hooks';
import { LinkedList } from '@services/data-structures';

const { result } = renderHook(() => useHashMaps());
const { hashMaps, hashMap } = result.current;
beforeEach(() => {
  render(<HashMapMain hashMaps={hashMaps} hashMap={hashMap} />);
});

describe('hashmapmain', () => {
  it('renders active hashmap', () => {
    const hm = hashMaps[result.current.hashMap.active];
    for (const key in hm) {
      if (hm[key] instanceof LinkedList) {
        let node = hm[key].head;
        while (node) {
          expect(screen.queryByText(node.value)).toBeInTheDocument();
          node = node.next;
        }
      }
    }
  });

  it('adds value to the hashmap', async () => {
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /add value/i }));
    await user.type(screen.getByLabelText(/add value/i), 'new value');
    await user.click(screen.getByRole('button', { name: /confirm/i }));
    expect(screen.queryByText('new value')).toBeInTheDocument();
  });

  it('removes existing value from hashmap', async () => {
    const user = userEvent.setup();
    const hm = hashMaps[result.current.hashMap.active];
    for (const key in hm) {
      if (hm[key] instanceof LinkedList) {
        let node = hm[key].head;
        if (node?.value) {
          await user.click(
            screen.getByRole('button', { name: /remove value/ })
          );
          await user.type(screen.getByLabelText(/remove value/i), node.value);
          await user.click(screen.getByRole('button', { name: /confirm/i }));
          expect(screen.queryByText(node.value)).not.toBeInTheDocument();
          break;
        }
      }
    }
  });
});
