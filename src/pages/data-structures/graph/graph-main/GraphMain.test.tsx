import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GraphMain from './GraphMain';
import { useGraphs } from '@hooks';

const { result } = renderHook(() => useGraphs());
const { graphs, graph } = result.current;
const activeGraph = graphs[graph.active];
activeGraph.removeVertex = vi.fn();
activeGraph.removeVertex = vi.fn();
beforeEach(() => {
  render(<GraphMain graphs={graphs} graph={graph} />);
});

describe('graphmain', () => {
  const user = userEvent.setup();
  it('renders all active graph vertices', () => {
    for (const key in activeGraph.vertices) {
      expect(screen.queryByText(key)).toBeInTheDocument();
    }
  });

  it('renders all active graph edges', () => {
    for (const key in activeGraph.vertices) {
      const vertice = activeGraph.vertices[key];
      for (let i = 0; i < vertice.edges.length; i++) {
        expect(
          screen.queryByRole('button', {
            name: new RegExp(`edge-${vertice.value}-${vertice.edges[i]}`),
          })
        ).toBeInTheDocument();
      }
    }
  });

  it('adds value to the graph', async () => {
    await user.click(screen.getByRole('button', { name: /add value/i }));
    await user.type(screen.getByLabelText(/add value/i), '4');
    await user.click(screen.getByRole('button', { name: /confirm/i }));
    expect(screen.queryByText(4)).toBeInTheDocument();
  });

  it('calls removeVertex', async () => {
    await user.click(screen.getByText(4));
    await user.click(screen.getByRole('button', { name: /remove/i }));
    expect(activeGraph.removeVertex).toHaveBeenCalledWith(4);
  });

  it('adds edge to the graph', async () => {
    await user.click(screen.getByText(4));
    await user.click(screen.getByRole('button', { name: /add edge/i }));
    await user.type(screen.getByLabelText(/other vertex value/i), '3');
    await user.click(screen.getByRole('button', { name: /confirm/i }));
    expect(
      screen.queryByRole('button', { name: 'edge-4-3' })
    ).toBeInTheDocument();
  });

  it('calls removeEdge', async () => {
    await user.click(screen.getByRole('button', { name: 'edge-4-3' }));
    await user.click(screen.getByRole('button', { name: /remove edge/i }));
    expect(activeGraph.removeEdge).toHaveBeenCalledWith(4, 3);
  });
});
