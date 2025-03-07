import { createRef, useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Array, Heap } from '@services/data-structures';
import { getArrayRepresentation, type Tree } from './TreePrototype.helpers';
import Node from '@components/node/Node';
import * as S from './TreePrototype.styles';
import type { JSX, RefObject } from 'react';

function TreePrototype({
  tree,
  onNodeClick,
  getOptions,
  resume,
}: {
  tree: Tree;
  onNodeClick?: (value: number) => void;
  getOptions?: (value: number) => JSX.Element;
  resume?: boolean;
}) {
  const arrayRepresentation = getArrayRepresentation(tree);

  const getTreeContent = () => {
    const treeContent: JSX.Element[] = [];

    const getParent = (i: number) => Math.floor((i - 1) / 2);

    const [coordinates, setCoordinates] = useState<
      Array<{ x: number; y: number } | null>
    >(new Array());
    const refs: RefObject<Array<RefObject<HTMLDivElement | null> | null>> =
      useRef(new Array());

    let max = 1;
    let rowContent: JSX.Element[] = [];

    for (let i = 0; i < arrayRepresentation.length; i++) {
      if (arrayRepresentation[i] !== undefined) {
        const ref = refs.current[i] ?? createRef<HTMLDivElement>();
        if (!refs.current[i]) {
          refs.current.push(ref);
        }
        const parentLink = coordinates[i];
        const options = getOptions && getOptions(arrayRepresentation[i]);
        rowContent.push(
          <S.Container key={`binarytree-${i}-${arrayRepresentation[i]}`}>
            {parentLink ? (
              <S.Link
                style={{
                  height: `${parentLink.y}`,
                }}
              >
                <line
                  x1="0"
                  x2={parentLink.x}
                  y1="0"
                  y2={parentLink.y}
                  stroke="black"
                />
              </S.Link>
            ) : (
              <></>
            )}
            <Node
              value={arrayRepresentation[i]!}
              onClick={
                onNodeClick
                  ? () => onNodeClick(arrayRepresentation[i]!)
                  : undefined
              }
              ref={ref}
              active={!!options?.props.children}
            />
            {options}
          </S.Container>
        );
      } else {
        refs.current.push(null);
        rowContent.push(<S.EmptyNode key={`binarytree-empty-${i}`} />);
      }
      if (rowContent.length === max || i === arrayRepresentation.length - 1) {
        treeContent.push(
          <S.Row key={`binarytree-row${max}`}>{rowContent}</S.Row>
        );
        rowContent = [];
        max *= 2;
      }
    }

    const [renderLinks, setRenderLinks] = useState(0);
    useLayoutEffect(() => {
      const updateRenderLinks = () => setRenderLinks(Math.random() * 1000000);

      window.addEventListener('resize', () => updateRenderLinks());

      return () =>
        window.removeEventListener('resize', () => updateRenderLinks());
    }, []);

    useEffect(() => {
      const newCoordinates: Array<{ x: number; y: number } | null> =
        new Array();
      for (let i = 0; i < arrayRepresentation.length; i++) {
        const self = refs.current[i];
        const parent = refs.current[getParent(i)];
        if (parent && parent.current && self && self.current) {
          const x =
            parent.current.getBoundingClientRect().left -
            self.current.getBoundingClientRect().left;
          const y =
            parent.current.getBoundingClientRect().bottom -
            self.current.getBoundingClientRect().bottom;
          newCoordinates.push({ x, y });
        } else {
          newCoordinates.push(null);
        }
      }
      setCoordinates(newCoordinates);
    }, [renderLinks, arrayRepresentation.length, arrayRepresentation[0]]);

    return treeContent;
  };

  const getTreeResume = () => {
    const resume: JSX.Element[] = [];
    resume.push(
      <header key={'tree-resume-header'}>
        {tree instanceof Heap ? 'Heap:' : 'Binary Tree:'}
      </header>
    );
    for (let i = 0; i < arrayRepresentation.length; i++) {
      if (arrayRepresentation[i] !== undefined) {
        resume.push(
          <div key={`tree-resume-${i}-${arrayRepresentation[i]}`}>
            {arrayRepresentation[i]}
          </div>
        );
      }
    }
    if (resume.length === 1) {
      resume.pop();
      resume.push(
        <div key={'empty-tree'}>
          Empty {tree instanceof Heap ? 'Heap' : 'Binary Tree'}
        </div>
      );
    }
    return resume;
  };

  return !resume ? (
    <S.TreePrototype>{getTreeContent()}</S.TreePrototype>
  ) : (
    <S.TreeResume>{getTreeResume()}</S.TreeResume>
  );
}

export default TreePrototype;
