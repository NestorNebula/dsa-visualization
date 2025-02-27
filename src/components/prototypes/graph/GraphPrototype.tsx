import { createRef, useEffect, useRef, useState } from 'react';
import Node from '@components/node/Node';
import * as S from './GraphPrototype.styles';
import type { Graph } from '@services/data-structures';
import type { JSX, RefObject } from 'react';

interface Vertex {
  type: 'Vertex';
  value: string | number;
}
interface Edge {
  type: 'Edge';
  values: (string | number)[];
}

type VerticesRef = {
  [key: string | number]: RefObject<HTMLDivElement | null>;
};

function GraphPrototype({
  graph,
  onClick,
  getOptions,
}: {
  graph: Graph;
  onClick?: (component: Vertex | Edge) => void;
  getOptions?: (component: Vertex | Edge) => JSX.Element;
}) {
  function getGraphContent() {
    const graphContent: JSX.Element[] = [];
    const [verticesRef, setVerticesRef] = useState<VerticesRef>({});
    const newVerticesRef: RefObject<VerticesRef> = useRef({});
    for (const key in graph.vertices) {
      const vertice = graph.vertices[key];
      newVerticesRef.current[vertice.value] =
        newVerticesRef.current[vertice.value] ?? createRef();
      const edges: JSX.Element[] = [];
      for (let i = 0; i < vertice.edges.length; i++) {
        const edge = vertice.edges[i];
        const vRef = verticesRef[vertice.value];
        const veRef = verticesRef[edge];
        if (vRef && vRef.current && veRef && veRef.current) {
          edges.push(
            <S.Edge
              key={`edge-${vertice.value}-${edge}`}
              aria-label={`edge-${vertice.value}-${edge}`}
              onClick={() =>
                onClick &&
                onClick({ type: 'Edge', values: [vertice.value, edge] })
              }
            >
              {getOptions &&
                getOptions({ type: 'Edge', values: [vertice.value, edge] })}
              <svg>
                <line
                  x1="0"
                  x2={
                    veRef.current.getBoundingClientRect().right -
                    vRef.current.getBoundingClientRect().left
                  }
                  y1="0"
                  y2={
                    veRef.current.getBoundingClientRect().bottom -
                    vRef.current.getBoundingClientRect().top
                  }
                  stroke="black"
                />
              </svg>
            </S.Edge>
          );
        }
      }
      graphContent.push(
        <S.Container key={`vertex-${vertice.value}`}>
          {getOptions && getOptions({ type: 'Vertex', value: vertice.value })}
          <Node
            value={vertice.value}
            ref={newVerticesRef.current[vertice.value]}
            onClick={() =>
              onClick && onClick({ type: 'Vertex', value: vertice.value })
            }
          />
          {edges.length ? <S.Edges>{edges.map((e) => e)}</S.Edges> : <></>}
        </S.Container>
      );
    }

    useEffect(() => {
      let isUpToDate = true;
      for (const key in newVerticesRef.current) {
        const oldRef = verticesRef[key];
        const newRef = newVerticesRef.current[key];
        if (!oldRef || !oldRef.current) {
          isUpToDate = false;
          break;
        } else {
          const oldRect = oldRef.current.getBoundingClientRect();
          const newRect = newRef.current!.getBoundingClientRect();
          if (
            oldRect.top !== newRect.top ||
            oldRect.right !== newRect.right ||
            oldRect.bottom !== newRect.bottom ||
            oldRect.left !== newRect.left
          ) {
            isUpToDate = false;
            break;
          }
        }
      }
      if (!isUpToDate) {
        setVerticesRef(newVerticesRef.current);
      }
    }, [window]);

    return graphContent;
  }

  return <S.GraphPrototype>{getGraphContent()}</S.GraphPrototype>;
}

export default GraphPrototype;
