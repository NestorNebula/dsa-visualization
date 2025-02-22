import { describe, expect, it } from 'vitest';
import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QueueMain from './QueueMain';
import { useQueues } from '@hooks';

const { result } = renderHook(() => useQueues());
const { queues, queue } = result.current;
const q = queues[queue.active];
const user = userEvent.setup();

describe('queuemain', () => {
  it('renders every element from active queue', () => {
    render(<QueueMain queues={queues} queue={queue} />);
    let element = q.head;
    while (element) {
      expect(screen.queryByText(element.value)).toBeInTheDocument();
      element = element.next;
    }
  });

  it('adds new element to the queue', async () => {
    render(<QueueMain queues={queues} queue={queue} />);
    await user.click(screen.getByRole('button', { name: /enqueue/i }));
    await user.type(screen.getByLabelText(/enqueue/i), 'test');
    await user.click(screen.getByRole('button', { name: /confirm/i }));
    expect(screen.queryByText('test')).toBeInTheDocument();
  });

  it('removes first element from the active queue', async () => {
    const page = render(<QueueMain queues={queues} queue={queue} />);
    const firstElementValue = q.head?.value;
    await user.click(screen.getByRole('button', { name: /dequeue/i }));
    page.rerender(<QueueMain queues={queues} queue={queue} />);
    expect(screen.queryByText(firstElementValue)).not.toBeInTheDocument();
  });
});
