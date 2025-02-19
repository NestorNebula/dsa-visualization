import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Prototype from './ArrayPrototype';
import arrays from '@services/default/array';

const mockClick = vi.fn();

describe('arrayprototype', () => {
  const array = arrays[1];
  it('renders array content correctly', () => {
    render(<Prototype array={array} onItemClick={mockClick} />);
    for (let i = 0; i < array.length; i++) {
      expect(screen.queryByText(array[i])).toBeInTheDocument();
    }
  });

  it('renders getOptions returned content', () => {
    render(
      <Prototype
        array={array}
        onItemClick={mockClick}
        getOptions={() => <div>Test</div>}
      />
    );
    expect(screen.queryAllByText('Test')).toHaveLength(array.length);
  });

  it('calls onItemClick after click on item', async () => {
    render(<Prototype array={array} onItemClick={mockClick} />);
    const user = userEvent.setup();
    await user.click(screen.getByText(array[0]));
    expect(mockClick).toHaveBeenCalled();
  });
});
