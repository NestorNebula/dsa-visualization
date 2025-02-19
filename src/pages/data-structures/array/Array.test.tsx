import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Array from './Array';
import arrays from '@services/default/array';

beforeEach(() => {
  render(<Array />);
});

describe('array', () => {
  const array = arrays[0];
  it('renders array content correctly', () => {
    for (let i = 0; i < array.length; i++) {
      expect(screen.queryByText(array[i])).toBeInTheDocument();
    }
  });

  it('open options on array item click', async () => {
    const user = userEvent.setup();
    const valueBox = screen.getByText(arrays[0][0]);
    await user.click(valueBox);
    expect(screen.queryByText(/update/i)).toBeInTheDocument();
    expect(screen.queryByText(/delete/i)).toBeInTheDocument();
  });

  it('updates value on update click', async () => {
    const user = userEvent.setup();
    await user.click(screen.getByText(arrays[0][0]));
    await user.click(screen.getByText(/update/i));
    await user.type(screen.getByLabelText(/update value/i), '25');
    await user.click(screen.getByRole('button', { name: /confirm update/i }));
    expect(screen.queryByText(25)).toBeInTheDocument();
  });

  it('deletes item on delete click', async () => {
    const user = userEvent.setup();
    await user.click(screen.getByText(arrays[0][0]));
    await user.click(screen.getByText(/delete/i));
    expect(screen.queryByText(arrays[0][0])).toBeNull();
  });

  it('adds value on add button click', async () => {
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /add/i }));
    await user.type(screen.getByLabelText(/new value/i), '26');
    await user.click(screen.getByRole('button', { name: /confirm/ }));
    expect(screen.queryByText(26)).toBeInTheDocument();
  });
});
