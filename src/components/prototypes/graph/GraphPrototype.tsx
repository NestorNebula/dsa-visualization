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
  resume,
}: {
  graph: Graph;
  onClick?: (component: Vertex | Edge) => void;
  getOptions?: (component: Vertex | Edge) => JSX.Element;
  resume?: boolean;
}) {
  function getGraphContent() {
    const graphContent: JSX.Element[] = [];
    const [verticesRef, setVerticesRef] = useState<VerticesRef>({});
    const newVerticesRef: RefObject<VerticesRef> = useRef({});
    let i = 0;
    for (const key in graph.vertices) {
      const vertice = graph.vertices[key];
      newVerticesRef.current[vertice.value] =
        newVerticesRef.current[vertice.value] ?? createRef();
      const edges: JSX.Element[] = [];
      for (let i = 0; i < vertice.edges.length; i++) {
        const edge = vertice.edges[i];
        const vRef = verticesRef[vertice.value];
        const veRef = verticesRef[edge];
        const options =
          getOptions &&
          getOptions({ type: 'Edge', values: [vertice.value, edge] });
        if (vRef && vRef.current && veRef && veRef.current) {
          edges.push(
            <S.Edge
              key={`edge-${vertice.value}-${edge}`}
              aria-label={`edge-${vertice.value}-${edge}`}
              onClick={() =>
                onClick &&
                onClick({ type: 'Edge', values: [vertice.value, edge] })
              }
              $active={!!options?.props.children}
            >
              {options}
              <svg>
                <line
                  x1="0"
                  x2={
                    veRef.current.getBoundingClientRect().left -
                    vRef.current.getBoundingClientRect().left
                  }
                  y1="0"
                  y2={
                    veRef.current.getBoundingClientRect().bottom -
                    vRef.current.getBoundingClientRect().bottom
                  }
                />
              </svg>
            </S.Edge>
          );
        }
      }
      const options =
        getOptions && getOptions({ type: 'Vertex', value: vertice.value });
      graphContent.push(
        <S.Container key={`vertex-${vertice.value}`}>
          {options}
          <Node
            value={vertice.value}
            ref={newVerticesRef.current[vertice.value]}
            onClick={() =>
              onClick && onClick({ type: 'Vertex', value: vertice.value })
            }
            gap={Number.isInteger(i / 2) ? 1.5 : -1.5}
            active={!!options?.props.children}
          />
          {edges.length ? (
            <S.Edges $gap={Number.isInteger(i / 2) ? 1.5 : -1.5}>
              {edges.map((e) => e)}
            </S.Edges>
          ) : (
            <></>
          )}
        </S.Container>
      );
      i++;
    }

    const [renderEdges, setRenderEdges] = useState(0);

    useEffect(() => {
      const updateRenderEdges = () => setRenderEdges(Math.random() * 10000);

      window.addEventListener('resize', updateRenderEdges);

      return () => window.removeEventListener('resize', updateRenderEdges);
    }, []);

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
    }, [renderEdges]);

    return graphContent;
  }

  const getGraphResume = () => {
    const resume: JSX.Element[] = [];
    for (const key in graph.vertices) {
      resume.push(
        <div key={`resume-${graph.vertices[key].value}`}>
          {graph.vertices[key].value}
        </div>
      );
    }
    return resume;
  };

  return !resume ? (
    <S.GraphPrototype>{getGraphContent()}</S.GraphPrototype>
  ) : (
    <S.GraphResume>
      <header></header>
      {getGraphResume()}
    </S.GraphResume>
  );
}

export default GraphPrototype;
