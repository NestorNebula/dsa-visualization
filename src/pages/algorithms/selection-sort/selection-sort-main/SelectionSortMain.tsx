import { useEffect, useState } from 'react';
import { useSelectionSort } from '@hooks';
import DSAHeader from '@components/dsa-header/DSAHeader';
import Informations from '@components/informations/Informations';
import SpeedBar, { type Status } from '@components/speed-bar/SpeedBar';
import { Array as Prototype } from '@components/prototypes';
import * as S from './SelectionSortMain.styles';
import type { Array } from '@services/data-structures';

function SelectionSortMain({ array }: { array: Array }) {
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

  const selectionSort = useSelectionSort(array);

  useEffect(() => {
    switch (status) {
      case 'Active':
        selectionSort.setDelay(1000);
        selectionSort.start();
        break;
      case 'Faster':
        selectionSort.setDelay(500);
        break;
      case 'Paused':
        selectionSort.stop();
        break;
      case 'Failed':
        selectionSort.stop();
        break;
    }
  }, [status]);

  useEffect(() => {
    if (selectionSort.done) {
      setStatus('Done');
    }
  }, [selectionSort.done]);

  const isHighlighted = (index: number) => {
    return index === selectionSort.minIndex;
  };

  const isCompared = (index: number) => {
    return index === selectionSort.lastChecked + 1;
  };

  const isDone = (index: number) => {
    return index < selectionSort.index;
  };

  return (
    <S.SelectionSortMain>
      <DSAHeader
        title="Selection Sort"
        resource="https://www.geeksforgeeks.org/selection-sort-algorithm-2/"
      />
      <Informations>
        <div>
          The Selection Sort algorithm takes the smallest value on each
          iteration and put it at the first unsorted place of the array until
          the array is sorted.
        </div>
      </Informations>
      <SpeedBar status={status} setStatus={updateStatus} />
      <Prototype
        array={selectionSort.sortedArray}
        isHighlighted={isHighlighted}
        isCompared={isCompared}
        isDone={isDone}
      />
    </S.SelectionSortMain>
  );
}

export default SelectionSortMain;
