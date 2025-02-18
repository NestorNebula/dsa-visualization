import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

const mockSubmit = vi.fn();
beforeEach(() => {
  render(
    <Form onSubmit={mockSubmit}>
      <div>Child one</div>
      <div>Child two</div>
    </Form>
  );
});

describe('form', () => {
  it('renders children', () => {
    expect(screen.queryByText('Child one')).toBeInTheDocument();
    expect(screen.queryByText('Child two')).toBeInTheDocument();
  });

  it('calls onSubmit on submit', async () => {
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /submit/i }));
    expect(mockSubmit).toHaveBeenCalled();
  });
});
