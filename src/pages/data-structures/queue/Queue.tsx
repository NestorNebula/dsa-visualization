import { useQueues } from '@hooks';
import Sidebar from '@components/sidebar/Sidebar';
import QueueMain from './queue-main/QueueMain';
import { Queue as Prototype } from '@components/prototypes';
import * as S from './Queue.styles';

function Queue() {
  const { queues, queue } = useQueues();

  return (
    <S.Queue>
      <title>DSA Visualization - Queue</title>
      <Sidebar
        dataStructures={queues}
        methods={{
          active: queue.active,
          set: queue.set,
          add: queue.add,
          remove: queue.remove,
        }}
        getPrototype={(ds, i) => <Prototype key={`queue-${i}`} queue={ds} />}
      />
      <QueueMain queues={queues} queue={queue} />
    </S.Queue>
  );
}

export default Queue;
