import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

const mockUpdate = vi.fn();

beforeEach(() => {
  render(<Input name="test" value="test value" updateValue={mockUpdate} />);
});

describe('input', () => {
  it('renders input correctly', () => {
    expect(screen.getByLabelText('test')).toHaveValue('test value');
  });

  it('calls updateValue on change', async () => {
    const user = userEvent.setup();
    await user.type(screen.getByLabelText('test'), 'test');
    expect(mockUpdate).toHaveBeenCalled();
  });
});
