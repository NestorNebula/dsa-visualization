import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import QueuePrototype from './QueuePrototype';
import { dataStructures } from '@services/default';

const queue = dataStructures.queues[0];
beforeEach(() => {
  render(<QueuePrototype queue={queue} />);
});

describe('queueprototype', () => {
  it('renders every element inside the queue', () => {
    let element = queue.head;
    while (element) {
      expect(screen.queryByText(element.value)).toBeInTheDocument();
      element = element.next;
    }
  });
});
