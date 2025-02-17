import { describe, expect, it } from 'vitest';
import Graph from './graph';

describe('graph', () => {
  const graph = new Graph();

  describe('insertVertex', () => {
    it('adds value to the graph', () => {
      graph.insertVertex(50);
      graph.insertVertex(33);
      graph.insertVertex(72);
      expect(graph.vertices[50].value).toBe(50);
    });
  });

  describe('removeVertex', () => {
    it('returns removed value', () => {
      expect(graph.removeVertex(72)).toBe(72);
      expect(graph.vertices[72]).toBeUndefined();
    });

    it("returns undefined when vertex doesn't exist", () => {
      expect(graph.removeVertex(72)).toBeUndefined();
    });
  });

  describe('addEdge', () => {
    it('adds directed edge between two vertices', () => {
      expect(graph.vertices[50].edges).toHaveLength(0);
      expect(graph.vertices[33].edges).toHaveLength(0);
      graph.addEdge(50, 33);
      expect(graph.vertices[50].edges).toHaveLength(1);
      expect(graph.vertices[50].edges[0]).toBe(33);
      expect(graph.vertices[33].edges).toHaveLength(0);
    });

    it('throws error when trying to add edge to non-existent vertex', () => {
      expect(() => graph.addEdge(50, 72)).toThrow();
    });

    it('throws error when trying to connect a vertex to itself', () => {
      expect(() => graph.addEdge(50, 50)).toThrow();
    });
  });

  describe('removeEdge', () => {
    it('returns removed edge', () => {
      expect(graph.removeEdge(50, 33)).toEqual([50, 33]);
      expect(graph.vertices[50].edges).toHaveLength(0);
    });

    it("returns undefined when edge doesn't exist", () => {
      expect(graph.removeEdge(50, 33)).toBeUndefined();
    });
  });
});
