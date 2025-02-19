import Array from '../array/array';
import { FrontendSperror } from 'sperror';

class Vertex {
  value: string | number;
  edges: Array<string | number> = new Array();

  constructor(value: string | number) {
    this.value = value;
  }
}

class Graph {
  vertices: { [key: string | number]: Vertex } = {};
  insertVertex(value: string | number): void {
    if (this.vertices[value]) return;
    this.vertices[value] = new Vertex(value);
  }
  removeVertex(value: string | number): string | number | undefined {
    if (!this.vertices[value]) return;
    for (let i = 0; i < this.vertices[value].edges.length; i++) {
      this.#updateEdges(this.vertices[this.vertices[value].edges[i]], value);
    }
    delete this.vertices[value];
    return value;
  }
  #updateEdges(vertex: Vertex, value: string | number) {
    const updatedEdges: Array<string | number> = new Array();
    for (let i = 0; i < vertex.edges.length; i++) {
      if (vertex.edges[i] !== value) {
        updatedEdges.push(vertex.edges[i]);
      }
    }
    vertex.edges = updatedEdges;
  }
  #checkExistingEdge(
    firstValue: string | number,
    secondValue: string | number
  ): boolean {
    let edgeExist = false;
    for (let i = 0; i < this.vertices[firstValue].edges.length; i++) {
      if (this.vertices[firstValue].edges[i] === secondValue) {
        edgeExist = true;
      }
    }
    return edgeExist;
  }
  addEdge(firstValue: string | number, secondValue: string | number): void {
    if (!this.vertices[firstValue] || !this.vertices[secondValue]) {
      throw new FrontendSperror(
        'Invalid values',
        'Values must exist in the graph'
      );
    }
    if (firstValue === secondValue) {
      throw new FrontendSperror(
        'Invalid value',
        "Vertex can't be connected with itself"
      );
    }
    const edgeExist = this.#checkExistingEdge(firstValue, secondValue);
    if (!edgeExist) {
      this.vertices[firstValue].edges.push(secondValue);
    }
  }
  removeEdge(
    firstValue: string | number,
    secondValue: string | number
  ): [string | number, string | number] | undefined {
    const edgeExist = this.#checkExistingEdge(firstValue, secondValue);
    if (!edgeExist) return;
    this.#updateEdges(this.vertices[firstValue], secondValue);
    return [firstValue, secondValue];
  }

  constructor(graph?: Graph) {
    if (graph) {
      const vertices = graph.vertices;
      for (const key in vertices) {
        const vertice = vertices[key];
        vertice.edges = new Array(vertice.edges);
      }
      this.vertices = graph.vertices;
    }
  }
}

export default Graph;
