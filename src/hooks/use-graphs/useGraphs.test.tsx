import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useGraphs from './useGraphs';

describe('usegraphs', () => {
  describe('add', () => {
    it('adds graph', () => {
      const { result } = renderHook(() => useGraphs());
      const length = result.current.graphs.length;
      act(() => result.current.graph.add());
      expect(result.current.graphs).toHaveLength(length + 1);
    });
  });

  describe('remove', () => {
    it('removes graph from graphs', () => {
      const { result } = renderHook(() => useGraphs());
      const length = result.current.graphs.length;
      act(() => result.current.graph.remove(0));
      expect(result.current.graphs).toHaveLength(length - 1);
    });
  });

  describe('addVertex', () => {
    it('adds vertex to active graph', () => {
      const { result } = renderHook(() => useGraphs());
      const graph = result.current.graphs[result.current.graph.active];
      act(() => result.current.graph.addVertex('Didi'));
      expect(graph.vertices['Didi']).not.toBeUndefined();
    });
  });

  describe('removeVertex', () => {
    it('removes Vertex from active graph', () => {
      const { result } = renderHook(() => useGraphs());
      const graph = result.current.graphs[result.current.graph.active];
      act(() => result.current.graph.removeVertex('Didi'));
      expect(graph.vertices['Didi']).toBeUndefined();
    });
  });

  describe('addEdge', () => {
    it('adds edge between two vertices', () => {
      const { result } = renderHook(() => useGraphs());
      const { graphs, graph } = result.current;
      const activeGraph = graphs[graph.active];
      act(() => {
        graph.addVertex(1);
        graph.addVertex(2);
        graph.addEdge(1, 2);
      });
      expect(activeGraph.vertices[1].edges[0]).toBe(2);
    });
  });

  describe('removeEdge', () => {
    it('removes edge between two vertices', () => {
      const { result } = renderHook(() => useGraphs());
      const { graphs, graph } = result.current;
      const activeGraph = graphs[graph.active];
      act(() => graph.removeEdge(1, 2));
      expect(activeGraph.vertices[1].edges[0]).toBeUndefined();
    });
  });
});
