import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import Prototype from '@components/prototypes/array/ArrayPrototype';
import { dataStructures } from '@services/default';

const arrays = dataStructures.arrays;
const active = 0;
const mockSet = vi.fn();
const mockRemove = vi.fn();
const mockAdd = vi.fn();
const mockGetPrototype = vi.fn((a: (typeof arrays)[0], index: number) => {
  return <Prototype key={`ds-${index}`} array={a} />;
});

beforeEach(() => {
  render(
    <Sidebar
      dataStructures={[arrays[0]]}
      methods={{ active, set: mockSet, remove: mockRemove, add: mockAdd }}
      getPrototype={mockGetPrototype}
    />
  );
});

describe('sidebar', () => {
  it('renders all elements', () => {
    for (let i = 0; i < arrays[0].length; i++) {
      expect(screen.queryByText(arrays[0][i])).toBeInTheDocument();
    }
  });

  it('calls getPrototype for array', () => {
    expect(mockGetPrototype).toHaveBeenCalled();
  });
});
