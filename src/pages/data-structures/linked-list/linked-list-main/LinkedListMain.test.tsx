import { describe, expect, it, vi } from 'vitest';
import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LinkedListMain from './LinkedListMain';
import { useLinkedLists } from '@hooks';

describe('linkedlistmain', () => {
  const { result } = renderHook(() => useLinkedLists());
  const { linkedLists, linkedList } = result.current;
  linkedList.addItem = vi.fn();
  linkedList.removeItem = vi.fn();
  const ll = linkedLists[linkedList.active];

  it('renders active list', () => {
    render(
      <LinkedListMain linkedLists={linkedLists} linkedList={linkedList} />
    );
    let item = ll.head;
    while (item) {
      expect(screen.queryByText(item.value)).toBeInTheDocument();
      item = item.next;
    }
  });

  it('calls addItem with typed value', async () => {
    render(
      <LinkedListMain linkedLists={linkedLists} linkedList={linkedList} />
    );
    const user = userEvent.setup();
    await user.click(screen.getByLabelText(/add item/i));
    await user.type(screen.getByLabelText(/add item/i), '50');
    await user.click(screen.getByRole('button', { name: /confirm/i }));
    expect(linkedList.addItem).toHaveBeenCalledWith('50');
  });

  it('calls removeItem with typed value', async () => {
    render(
      <LinkedListMain linkedLists={linkedLists} linkedList={linkedList} />
    );
    const user = userEvent.setup();
    await user.click(screen.getByText(/remove item/i));
    await user.type(screen.getByLabelText(/remove item/i), '33');
    await user.click(screen.getByRole('button', { name: /confirm/i }));
    expect(linkedList.addItem).toHaveBeenCalledWith('33');
  });
});
