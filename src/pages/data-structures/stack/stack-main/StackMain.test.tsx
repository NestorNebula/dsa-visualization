import { describe, expect, it } from 'vitest';
import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StackMain from './StackMain';
import { useStacks } from '@hooks';

const { result } = renderHook(() => useStacks());
const { stacks, stack } = result.current;

describe('stackmain', () => {
  it("renders active stack's items", () => {
    render(<StackMain stacks={stacks} stack={stack} />);
    for (let i = 0; i < stacks[stack.active].size; i++) {
      expect(screen.queryByText(stacks[stack.active][i])).toBeInTheDocument();
    }
  });

  it('adds item to the stack', async () => {
    render(<StackMain stacks={stacks} stack={stack} />);
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /add item/i }));
    await user.type(screen.getByLabelText(/add item/i), 'test');
    await user.click(screen.getByRole('button', { name: /confirm/i }));
    expect(screen.queryByText('test')).toBeInTheDocument();
  });

  it("removes stack's last item", async () => {
    const page = render(<StackMain stacks={stacks} stack={stack} />);
    const user = userEvent.setup();
    const lastItem = stacks[stack.active][stacks[stack.active].size - 1];
    await user.click(screen.getByRole('button', { name: /remove last item/i }));
    page.rerender(<StackMain stacks={stacks} stack={stack} />);
    expect(screen.queryByText(lastItem)).not.toBeInTheDocument();
  });
});
