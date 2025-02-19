import Container from '@components/container/Container';
import Box from '@components/box/Box';
import * as S from './ArrayPrototype.styles';
import type { Array } from '@services/data-structures';
import type { JSX } from 'react';

function Prototype({
  array,
  getOptions,
}: {
  array: Array;
  getOptions?: (index: number) => JSX.Element;
}) {
  const getArrayContent = () => {
    const arrayContent: JSX.Element[] = [];
    for (let i = 0; i < array.length; i++) {
      arrayContent.push(
        <S.Item>
          <Box value={array[i]} />
          {getOptions ? getOptions(i) : <></>}
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
