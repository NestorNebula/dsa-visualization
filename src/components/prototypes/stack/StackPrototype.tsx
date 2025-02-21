import Container from '@components/container/Container';
import Box from '@components/box/Box';
import * as S from './StackPrototype.styles';
import type { Stack } from '@services/data-structures';
import type { JSX } from 'react';

function StackPrototype({ stack }: { stack: Stack }) {
  const getStackContent = () => {
    const stackContent: JSX.Element[] = [];
    for (let i = 0; i < stack.size; i++) {
      stackContent.push(<Box key={`stackitem-${i}`} value={stack[i]} />);
    }
    return stackContent;
  };

  return (
    <S.StackPrototype>
      <Container>{getStackContent()}</Container>
    </S.StackPrototype>
  );
}

export default StackPrototype;
