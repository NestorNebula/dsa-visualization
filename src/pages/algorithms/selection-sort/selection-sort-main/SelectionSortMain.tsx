import { useEffect, useState } from 'react';
import { useSelectionSort } from '@hooks';
import DSAHeader from '@components/dsa-header/DSAHeader';
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

  return (
    <S.SelectionSortMain>
      <DSAHeader
        title="Selection Sort"
        resource="https://www.geeksforgeeks.org/selection-sort-algorithm-2/"
      />
      <SpeedBar status={status} setStatus={updateStatus} />
      <Prototype array={selectionSort.sortedArray} />
    </S.SelectionSortMain>
  );
}

export default SelectionSortMain;
