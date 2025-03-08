import { useState } from 'react';
import useInterval from '@hooks/use-interval/useInterval';
import { Array } from '@services/data-structures';
import type { SelectionSortMethods } from '#types/methods';

function useSelectionSort(array: Array, delay?: number): SelectionSortMethods {
  const [sortedArray, setSortedArray] = useState(array);
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);
  const [index, setIndex] = useState(0);
  const [minIndex, setMinIndex] = useState(0);
  const [minValue, setMinValue] = useState(Infinity);
  const [lastChecked, setLastChecked] = useState(-1);

  function sortArray() {
    const indexToCheck = lastChecked + 1;
    if (sortedArray[indexToCheck] === undefined) {
      if (minIndex !== index) {
        const tempArray = new Array(sortedArray);
        [tempArray[index], tempArray[minIndex]] = [
          tempArray[minIndex],
          tempArray[index],
        ];
        setSortedArray(tempArray);
      }

      if (sortedArray[index + 1]) {
        setIndex(index + 1);
        setMinIndex(index + 1);
        setMinValue(Infinity);
        setLastChecked(index);
      } else {
        setDone(true);
        setActive(false);
        setIndex(array.length);
        end();
      }
    } else {
      if (sortedArray[indexToCheck] < minValue) {
        setMinValue(sortedArray[indexToCheck]);
        setMinIndex(indexToCheck);
      }
      setLastChecked(indexToCheck);
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
    setDelay,
    sortedArray,
    done,
    index,
    minIndex,
    lastChecked,
  };
}

export default useSelectionSort;
