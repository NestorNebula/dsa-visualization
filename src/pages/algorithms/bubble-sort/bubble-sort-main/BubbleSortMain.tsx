import { useEffect, useState } from 'react';
import { useBubbleSort } from '@hooks';
import DSAHeader from '@components/dsa-header/DSAHeader';
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

  return (
    <S.BubbleSortMain>
      <DSAHeader
        title="Bubble Sort"
        resource="https://www.geeksforgeeks.org/bubble-sort-algorithm/"
      />
      <SpeedBar status={status} setStatus={updateStatus} />
      <Prototype array={bubbleSort.sortedArray} />
    </S.BubbleSortMain>
  );
}

export default BubbleSortMain;
