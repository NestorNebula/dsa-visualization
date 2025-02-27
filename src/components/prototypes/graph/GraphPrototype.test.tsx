import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GraphPrototype from './GraphPrototype';
import { dataStructures } from '@services/default';

const graph = dataStructures.graphs[0];
const mockClick = vi.fn();
const mockGetOptions = vi.fn();
beforeEach(() => {
  render(
    <GraphPrototype
      graph={graph}
      onClick={mockClick}
      getOptions={mockGetOptions}
    />
  );
});

describe('graphprototype', () => {
  const user = userEvent.setup();

  it("renders all graph's vertices", () => {
    for (const key in graph.vertices) {
      expect(screen.queryByText(graph.vertices[key].value)).toBeInTheDocument();
    }
  });

  it('renders all edges', () => {
    for (const key in graph.vertices) {
      const edges = graph.vertices[key].edges;
      for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        expect(
          screen.queryByRole('button', {
            name: new RegExp(`edge-${key}-${edge}`),
          })
        ).toBeInTheDocument();
      }
    }
  });

  it('calls mockClick with correct arguments', async () => {
    for (const key in graph.vertices) {
      await user.click(screen.getByText(graph.vertices[key].value));
      expect(mockClick).toHaveBeenCalledWith({
        type: 'Vertex',
        value: graph.vertices[key].value,
      });
      const edge = graph.vertices[key].edges[0];
      await user.click(
        screen.getByRole('button', { name: new RegExp(`edge-${key}-${edge}`) })
      );
      expect(mockClick).toHaveBeenLastCalledWith({
        type: 'Edge',
        values: [graph.vertices[key].value, edge],
      });
      break;
    }
  });

  it('calls getOptions for every vertex and edge', () => {
    let vertices = 0;
    let edges = 0;
    for (const key in graph.vertices) {
      for (let i = 0; i < graph.vertices[key].edges.length; i++) {
        edges++;
      }
      vertices++;
    }
    expect(mockGetOptions).toHaveBeenCalledTimes(vertices * 2 + edges);
  });
});
