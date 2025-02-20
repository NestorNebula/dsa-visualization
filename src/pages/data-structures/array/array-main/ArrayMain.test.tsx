import { describe, expect, it, vi } from 'vitest';
import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ArrayMain from './ArrayMain';
import { useArrays } from '@hooks';

const { result } = renderHook(() => useArrays());
const { arrays, array: arr, item } = result.current;
arr.push = vi.fn();
arr.shift = vi.fn();
item.set = vi.fn();
item.update = vi.fn();

describe('array', () => {
  const array = arrays[0];
  it('renders array content correctly', () => {
    render(<ArrayMain arrays={[arrays[0]]} array={arr} item={item} />);
    for (let i = 0; i < array.length; i++) {
      expect(screen.queryByText(array[i])).toBeInTheDocument();
    }
  });

  it('open options on array item click', async () => {
    render(<ArrayMain arrays={[arrays[0]]} array={arr} item={item} />);
    const user = userEvent.setup();
    const valueBox = screen.getByText(arrays[0][0]);
    await user.click(valueBox);
    expect(item.set).toHaveBeenCalled();
  });

  it('renders options for active item', async () => {
    render(
      <ArrayMain
        arrays={[arrays[0]]}
        array={arr}
        item={{ ...item, active: 0 }}
      />
    );
    expect(screen.queryByText(/update/i)).toBeInTheDocument();
    expect(screen.queryByText(/delete/i)).toBeInTheDocument();
  });

  it('updates value on update click', async () => {
    render(
      <ArrayMain
        arrays={[arrays[0]]}
        array={arr}
        item={{ ...item, active: 0 }}
      />
    );
    const user = userEvent.setup();
    await user.click(screen.getByText(/update/i));
    await user.type(screen.getByLabelText(/update value/i), '25');
    await user.click(screen.getByRole('button', { name: /confirm update/i }));
    expect(item.update).toHaveBeenCalled();
  });

  it('deletes item on delete click', async () => {
    render(
      <ArrayMain
        arrays={[arrays[0]]}
        array={arr}
        item={{ ...item, active: 0 }}
      />
    );
    const user = userEvent.setup();
    await user.click(screen.getByText(/delete/i));
    expect(arr.shift).toHaveBeenCalled();
  });

  it('adds value on add button click', async () => {
    render(
      <ArrayMain
        arrays={[arrays[0]]}
        array={arr}
        item={{ ...item, active: 0 }}
      />
    );
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /add/i }));
    await user.type(screen.getByLabelText(/add item/i), '26');
    await user.click(screen.getByRole('button', { name: /confirm/i }));
    expect(arr.push).toHaveBeenCalledWith('26');
  });
});
