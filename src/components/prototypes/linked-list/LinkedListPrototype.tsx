import Container from '@components/container/Container';
import Box from '@components/box/Box';
import { linkArrow } from '@assets/icons';
import * as S from './LinkedListPrototype.styles';
import type { LinkedList } from '@services/data-structures';
import type { JSX } from 'react';

function LinkedListPrototype({ linkedList }: { linkedList: LinkedList }) {
  const getLinkedListContent = () => {
    const linkedListContent: JSX.Element[] = [];
    let item = linkedList.head;
    let count = 0;
    while (item) {
      linkedListContent.push(
        <S.Item key={`linked-list-item${count}:${item.value}`}>
          <Box value={item.value} />
          {item.next ? <img src={linkArrow} alt="arrow to next item" /> : <></>}
        </S.Item>
      );
      item = item.next;
      count++;
    }
    return linkedListContent;
  };

  return (
    <S.LinkedList>
      <Container>{getLinkedListContent()}</Container>
    </S.LinkedList>
  );
}

export default LinkedListPrototype;
