import { Graph } from '@services/data-structures';

const graphOne = new Graph();
graphOne.insertVertex(1);
graphOne.insertVertex(2);
graphOne.insertVertex(3);
graphOne.addEdge(1, 2);
graphOne.addEdge(2, 3);
graphOne.addEdge(3, 1);
const graphTwo = new Graph();
graphTwo.insertVertex('Alice');
graphTwo.insertVertex('Bob');
graphTwo.insertVertex('Charlie');
graphTwo.addEdge('Alice', 'Bob');
graphTwo.addEdge('Bob', 'Charlie');

const graphs: Graph[] = [graphOne, graphTwo];

export default graphs;
