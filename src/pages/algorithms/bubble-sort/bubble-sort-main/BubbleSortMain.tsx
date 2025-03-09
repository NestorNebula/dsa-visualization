import { useEffect, useState } from 'react';
import { useBubbleSort } from '@hooks';
import DSAHeader from '@components/dsa-header/DSAHeader';
import Informations from '@components/informations/Informations';
import SpeedBar, { type Status } from '@components/speed-bar/SpeedBar';
import { Array as Prototype } from '@components/prototypes';
import * as S from './BubbleSortMain.styles';
import type { Array } from '@services/data-structures';

function BubbleSortMain({ array }: { array: Array }) {
  const [status, setStatus] = useState<Status>('Paused');
  const updateStatus = (newStatus: Status) => {
    if (status === 'Done' || status === 'Failed') return;
    for (let i = 0; i < array.length; i++) {
      if (!Number.isInteger(array[i])) {
        setStatus('Failed');
        return;
      }
    }
    setStatus(newStatus);
  };

  const bubbleSort = useBubbleSort(array);

  useEffect(() => {
    switch (status) {
      case 'Active':
        bubbleSort.setDelay(1000);
        bubbleSort.start();
        break;
      case 'Faster':
        bubbleSort.setDelay(500);
        break;
      case 'Paused':
        bubbleSort.stop();
        break;
      case 'Failed':
        bubbleSort.stop();
    }
  }, [status]);

  useEffect(() => {
    if (bubbleSort.done) {
      setStatus('Done');
    }
  }, [bubbleSort.done]);

  const isHighlighted = (index: number) => {
    return index === bubbleSort.checkDone;
  };

  const isCompared = (index: number) => {
    return index === bubbleSort.checkDone + 1;
  };

  const isDone = (index: number) => {
    return index > bubbleSort.checkToDo;
  };

  return (
    <S.BubbleSortMain>
      <DSAHeader
        title="Bubble Sort"
        resource="https://www.geeksforgeeks.org/bubble-sort-algorithm/"
      />
      <Informations>
        <div>
          The Bubble Sort algorithm compare each value to the next one until the
          array is sorted.
        </div>
      </Informations>
      <SpeedBar status={status} setStatus={updateStatus} />
      <Prototype
        array={bubbleSort.sortedArray}
        isHighlighted={isHighlighted}
        isCompared={isCompared}
        isDone={isDone}
      />
    </S.BubbleSortMain>
  );
}

export default BubbleSortMain;
