import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import HashMapPrototype from './HashMapPrototype';
import { dataStructures } from '@services/default';
import { LinkedList } from '@services/data-structures';

const hashMap = dataStructures.hashMaps[0];
beforeEach(() => {
  render(<HashMapPrototype hashMap={hashMap} />);
});

describe('hashmapprototype', () => {
  it('renders all hashMap keys', () => {
    for (const key in hashMap) {
      if (hashMap[key] instanceof LinkedList) {
        expect(screen.queryByText(key)).toBeInTheDocument();
      }
    }
  });

  it('renders all list content', () => {
    for (const key in hashMap) {
      if (hashMap[key] instanceof LinkedList) {
        let node = hashMap[key].head;
        while (node) {
          expect(screen.queryByText(node.value)).toBeInTheDocument();
          node = node.next;
        }
      }
    }
  });
});
