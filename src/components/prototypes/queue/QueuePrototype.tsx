import LinkedListPrototype from '../linked-list/LinkedListPrototype';
import * as S from './QueuePrototype.styles';
import type { Queue } from '@services/data-structures';

function QueuePrototype({ queue }: { queue: Queue }) {
  return (
    <S.Queue>
      <LinkedListPrototype linkedList={queue.queue} />
    </S.Queue>
  );
}

export default QueuePrototype;
