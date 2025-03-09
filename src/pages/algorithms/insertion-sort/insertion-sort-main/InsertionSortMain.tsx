import { useEffect, useState } from 'react';
import { useInsertionSort } from '@hooks';
import DSAHeader from '@components/dsa-header/DSAHeader';
import Informations from '@components/informations/Informations';
import SpeedBar, { type Status } from '@components/speed-bar/SpeedBar';
import { Array as Prototype } from '@components/prototypes';
import * as S from './InsertionSortMain.styles';
import type { Array } from '@services/data-structures';

function InsertionSortMain({ array }: { array: Array }) {
  const [status, setStatus] = useState<Status>('Paused');
  const updateStatus = (newStatus: Status) => {
    if (['Done', 'Failed'].includes(status)) return;
    for (let i = 0; i < array.length; i++) {
      if (!Number.isInteger(array[i])) {
        setStatus('Failed');
        return;
      }
    }
    setStatus(newStatus);
  };

  const insertionSort = useInsertionSort(array);

  useEffect(() => {
    switch (status) {
      case 'Active':
        insertionSort.setDelay(1000);
        insertionSort.start();
        break;
      case 'Faster':
        insertionSort.setDelay(500);
        break;
      case 'Paused':
        insertionSort.stop();
        break;
      case 'Failed':
        insertionSort.stop();
    }
  }, [status]);

  useEffect(() => {
    if (insertionSort.done) {
      setStatus('Done');
    }
  }, [insertionSort.done]);

  const isHighlighted = (index: number) => {
    return !insertionSort.indexToSwap
      ? index === insertionSort.index
      : index === insertionSort.indexToSwap;
  };

  const isDone = (index: number) => {
    return (
      (!insertionSort.indexToSwap
        ? index < insertionSort.index
        : index < insertionSort.index + 1) && !isHighlighted(index)
    );
  };

  return (
    <S.InsertionSortMain>
      <DSAHeader
        title="Insertion Sort"
        resource="https://www.geeksforgeeks.org/insertion-sort-algorithm/"
      />
      <Informations>
        <div>
          The Insertion Sort algorithm adds each item one by one to the sorted
          part of the array, starting with the second item.
        </div>
      </Informations>
      <SpeedBar status={status} setStatus={updateStatus} />
      <Prototype
        array={insertionSort.sortedArray}
        isHighlighted={isHighlighted}
        isDone={isDone}
      />
    </S.InsertionSortMain>
  );
}

export default InsertionSortMain;
