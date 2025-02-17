import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import DataStructures from './DataStructures';

const dataStructures = [
  'array',
  'hashmap',
  'stack',
  'queue',
  'linked list',
  'binary tree',
  'heap',
  'graph',
];

describe('datastructures', () => {
  it('renders all data structures pages', () => {
    render(
      <MemoryRouter>
        <DataStructures />
      </MemoryRouter>
    );
    expect(
      dataStructures.every((ds) =>
        expect(screen.queryByText(new RegExp(ds, 'i'))).toBeInTheDocument()
      )
    ).toBeTruthy();
  });
});
