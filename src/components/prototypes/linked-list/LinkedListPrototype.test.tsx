import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import LinkedListPrototype from './LinkedListPrototype';
import { dataStructures } from '@services/default';

describe('linkedlistprototype', () => {
  const linkedList = dataStructures.linkedLists[0];
  it('renders all list items', () => {
    render(<LinkedListPrototype linkedList={linkedList} />);
    let item = linkedList.head;
    while (item) {
      expect(screen.queryByText(item.value)).toBeInTheDocument();
      item = item.next;
    }
  });
});
