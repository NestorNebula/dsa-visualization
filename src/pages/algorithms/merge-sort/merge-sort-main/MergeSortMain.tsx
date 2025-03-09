import { useEffect, useState } from 'react';
import { useMergeSort } from '@hooks';
import DSAHeader from '@components/dsa-header/DSAHeader';
import Informations from '@components/informations/Informations';
import SpeedBar, { type Status } from '@components/speed-bar/SpeedBar';
import { Array as Prototype } from '@components/prototypes';
import * as S from './MergeSortMain.styles';
import type { Array } from '@services/data-structures';

function MergeSortMain({ array }: { array: Array }) {
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

  const mergeSort = useMergeSort(array);

  useEffect(() => {
    switch (status) {
      case 'Active':
        mergeSort.setDelay(1000);
        mergeSort.start();
        break;
      case 'Faster':
        mergeSort.setDelay(500);
        break;
      case 'Paused':
        mergeSort.stop();
        break;
      case 'Failed':
        mergeSort.stop();
    }
  }, [status]);

  useEffect(() => {
    if (mergeSort.done) {
      setStatus('Done');
    }
  }, [mergeSort.done]);

  const isHighlighted = (index: number) => {
    return index === 0;
  };

  const isDone = (levelIndex: number, arrayIndex: number) => {
    return mergeSort.levels[levelIndex][arrayIndex].isSorted;
  };

  return (
    <S.MergeSortMain>
      <DSAHeader
        title="Merge Sort"
        resource="https://www.geeksforgeeks.org/merge-sort/"
      />
      <Informations>
        <div>
          The Merge Sort algorithm divide the array into subarrays until the
          subarrays are sorted (having only one element), it then merges the
          subarrays by comparing the value of their elements.
        </div>
      </Informations>
      <SpeedBar status={status} setStatus={updateStatus} />
      <Prototype array={mergeSort.sortedArray} isDone={() => mergeSort.done} />
      {mergeSort.levels.map((l, lI) => (
        <S.Level key={`level-${lI}`}>
          {l.map((obj, objI) => {
            const highlighted = (index: number) =>
              lI === mergeSort.levels.length - 1 &&
              !!mergeSort.sortedSubarray &&
              isHighlighted(index);
            return (
              <Prototype
                key={`level-${lI}-array-${objI}`}
                array={obj.array}
                isHighlighted={highlighted}
                isDone={(index: number) =>
                  !highlighted(index) && isDone(lI, objI)
                }
              />
            );
          })}
        </S.Level>
      ))}
      {mergeSort.sortedSubarray && (
        <Prototype array={mergeSort.sortedSubarray} />
      )}
    </S.MergeSortMain>
  );
}

export default MergeSortMain;
