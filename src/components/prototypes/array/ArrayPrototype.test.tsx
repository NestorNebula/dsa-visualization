import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Prototype from './ArrayPrototype';
import arrays from '@services/default/array';

describe('arrayprototype', () => {
  const array = arrays[1];
  it('renders array content correctly', () => {
    render(<Prototype array={array} />);
    for (let i = 0; i < array.length; i++) {
      expect(screen.queryByText(array[i])).toBeInTheDocument();
    }
  });

  it('renders getOptions returned content', () => {
    render(<Prototype array={array} getOptions={() => <div>Test</div>} />);
    expect(screen.queryAllByText('Test')).toHaveLength(array.length);
  });
});
