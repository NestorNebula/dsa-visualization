import Container from '@components/container/Container';
import Box from '@components/box/Box';
import * as S from './ArrayPrototype.styles';
import type { Array } from '@services/data-structures';
import type { JSX } from 'react';

function Prototype({
  array,
  onItemClick,
  getOptions,
  isHighlighted,
  isCompared,
  isDone,
  isValid,
}: {
  array: Array;
  onItemClick?: (index: number) => void;
  getOptions?: (index: number) => JSX.Element;
  isHighlighted?: (index: number) => boolean;
  isCompared?: (index: number) => boolean;
  isDone?: (index: number) => boolean;
  isValid?: (index: number) => boolean | undefined;
}) {
  const getArrayContent = () => {
    const arrayContent: JSX.Element[] = [];
    for (let i = 0; i < array.length; i++) {
      const options = getOptions && getOptions(i);
      const highlight = isHighlighted && isHighlighted(i);
      const compared = isCompared && isCompared(i);
      const done = isDone && isDone(i);
      const valid = isValid && isValid(i);
      arrayContent.push(
        <S.Item
          key={`array-content${i}`}
          $highlight={highlight}
          $compared={compared}
          $done={done}
          $valid={valid}
        >
          <Box
            active={!!options?.props.children}
            value={array[i]}
            onClick={onItemClick ? () => onItemClick(i) : undefined}
          />
          {options}
        </S.Item>
      );
    }
    return arrayContent;
  };

  return (
    <S.Array>
      <Container>{getArrayContent()}</Container>
    </S.Array>
  );
}

export default Prototype;
