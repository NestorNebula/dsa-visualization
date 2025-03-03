import { useState } from 'react';
import useInterval from '@hooks/use-interval/useInterval';
import { Array } from '@services/data-structures';
import type { InsertionSortMethods } from '#types/methods';

function useInsertionSort(array: Array, delay?: number): InsertionSortMethods {
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);
  const [index, setIndex] = useState(1);
  const [lastChecked, setLastChecked] = useState(-1);
  const [indexToSwap, setIndexToSwap] = useState<number | null>(null);
  const [sortedArray, setSortedArray] = useState(array);

  function sortArray() {
    console.log(index, lastChecked, indexToSwap, sortedArray);
    if (sortedArray[index] === undefined) {
      setDone(true);
      end();
      return;
    }
    if (indexToSwap) {
      const tempArray = new Array(sortedArray);
      [tempArray[indexToSwap], tempArray[indexToSwap - 1]] = [
        tempArray[indexToSwap - 1],
        tempArray[indexToSwap],
      ];
      if (indexToSwap - 1 > lastChecked + 1 && indexToSwap - 1 > 0) {
        setIndexToSwap(indexToSwap - 1);
      } else {
        setIndexToSwap(null);
        setIndex(index + 1);
        setLastChecked(-1);
      }
      setSortedArray(tempArray);
      return;
    }
    const indexToCheck = lastChecked + 1;
    if (sortedArray[indexToCheck] > sortedArray[index]) {
      setIndexToSwap(index);
    } else {
      if (lastChecked + 1 === index) {
        setLastChecked(-1);
        setIndex(index + 1);
      } else {
        setLastChecked(lastChecked + 1);
      }
    }
  }

  const { setDelay, stop: end } = useInterval(() => {
    if (active && !done) {
      sortArray();
    }
  }, delay);

  const start = () => setActive(true);

  const stop = () => setActive(false);

  return {
    start,
    stop,
    sortedArray,
    done,
    index,
    lastChecked,
    setDelay,
  };
}

export default useInsertionSort;
