import { useState } from 'react';
import useLocalStorage from '@hooks/use-local-storage/useLocalStorage';
import { dataStructures } from '@services/default';
import methods from '@services/methods';
import { Graph } from '@services/data-structures';
import type { GraphMethods } from '#types/methods';

function useGraphs(): { graphs: Graph[]; graph: GraphMethods } {
  const { data: graphs, update } = useLocalStorage(
    'graphs',
    dataStructures.graphs,
    (stored) => new Graph(stored)
  );

  const [active, setActive] = useState(0);

  const addGraph = () => {
    update(methods.add(graphs, () => new Graph()));
  };

  const removeGraph = (index: number) => {
    update(methods.remove(graphs, index));
    if (index === active) {
      setActive(index > 0 ? index - 1 : 0);
    }
  };

  const addVertex = (value: string | number) => {
    const gs = graphs.map((g) => g);
    gs[active].insertVertex(value);
    update(gs);
  };

  const removeVertex = (value: string | number) => {
    const gs = graphs.map((g) => g);
    gs[active].removeVertex(value);
    update(gs);
  };

  const addEdge = (
    firstValue: string | number,
    secondValue: string | number
  ) => {
    const gs = graphs.map((g) => g);
    gs[active].addEdge(firstValue, secondValue);
    update(gs);
  };

  const removeEdge = (
    firstValue: string | number,
    secondValue: string | number
  ) => {
    const gs = graphs.map((g) => g);
    gs[active].removeEdge(firstValue, secondValue);
    update(gs);
  };

  return {
    graphs,
    graph: {
      active,
      set: setActive,
      add: addGraph,
      remove: removeGraph,
      addVertex,
      removeVertex,
      addEdge,
      removeEdge,
    },
  };
}

export default useGraphs;
