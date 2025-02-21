import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import StackPrototype from './StackPrototype';
import { dataStructures } from '@services/default';

const stack = dataStructures.stacks[0];
beforeEach(() => {
  render(<StackPrototype stack={stack} />);
});

describe('stackprototype', () => {
  it('renders stack content', () => {
    for (let i = 0; i < stack.size; i++) {
      expect(screen.queryByText(stack[i])).toBeInTheDocument();
    }
  });
});
