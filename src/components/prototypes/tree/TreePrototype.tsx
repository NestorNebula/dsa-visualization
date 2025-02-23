import { createRef } from 'react';
import { Array } from '@services/data-structures';
import { getArrayRepresentation, type Tree } from './TreePrototype.helpers';
import Node from '@components/node/Node';
import * as S from './TreePrototype.styles';
import type { JSX, RefObject } from 'react';

function TreePrototype({
  tree,
  onNodeClick,
  getOptions,
}: {
  tree: Tree;
  onNodeClick?: (value: number) => void;
  getOptions?: (value: number) => JSX.Element;
}) {
  const arrayRepresentation = getArrayRepresentation(tree);

  const getTreeContent = () => {
    const treeContent: JSX.Element[] = [];

    const refs: Array<RefObject<HTMLDivElement | null> | null> = new Array();
    const getParent = (i: number) => Math.floor((i - 1) / 2);

    let count = 0;
    let max = 1;
    let rowContent: JSX.Element[] = [];

    for (let i = 0; i < arrayRepresentation.length; i++) {
      if (arrayRepresentation[i]) {
        const ref = createRef<HTMLDivElement>();
        refs.push(ref);
        const parent = refs[getParent(i)];
        rowContent.push(
          <S.Container key={`binarytree-${i}-${arrayRepresentation[i]}`}>
            {parent && parent.current && ref.current ? (
              <S.Link>
                <line
                  x1="0"
                  x2={
                    parent.current?.getBoundingClientRect().left -
                    ref.current?.getBoundingClientRect().left
                  }
                  y1="0"
                  y2={
                    parent.current.getBoundingClientRect().bottom -
                    ref.current.getBoundingClientRect().top
                  }
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
            />
            {getOptions ? getOptions(arrayRepresentation[i]!) : <></>}
          </S.Container>
        );
      } else {
        rowContent.push(<S.EmptyNode key={`binarytree-empty-${i}`} />);
      }
      count++;
      if (count === max) {
        treeContent.push(
          <S.Row key={`binarytree-row${max}`}>{rowContent}</S.Row>
        );
        rowContent = [];
        max *= 2;
        count = 0;
      }
    }

    return treeContent;
  };
  return <S.TreePrototype>{getTreeContent()}</S.TreePrototype>;
}

export default TreePrototype;
