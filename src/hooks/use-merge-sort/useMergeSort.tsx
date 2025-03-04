import { useState } from 'react';
import useInterval from '@hooks/use-interval/useInterval';
import { Array } from '@services/data-structures';
import { FrontendSperror } from 'sperror';
import type { MergeSortMethods } from '#types/methods';

function useMergeSort(array: Array, delay?: number): MergeSortMethods {
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);
  const [sortedArray, setSortedArray] = useState(array);
  const [levels, setLevels] = useState<{ array: Array; isSorted: boolean }[][]>(
    [[{ array: sortedArray, isSorted: sortedArray.length < 2 }]]
  );
  const [sortedSubarray, setSortedSubarray] = useState<Array | null>(null);

  function sortArray() {
    const lvls = levels.map((l) => l);
    if (lvls.length === 1 && lvls[0][0].isSorted) {
      setSortedArray(lvls[0][0].array);
      lvls.pop();
      setLevels(lvls);
      setDone(true);
      setActive(false);
      end();
      return;
    }
    if (sortedSubarray) {
      const subarray = new Array(sortedSubarray);
      const lastLevel = lvls[lvls.length - 1];
      if (lastLevel[0].array.length || lastLevel[1].array.length) {
        if (!lastLevel[0].array.length) {
          subarray.push(lastLevel[1].array.shift());
        } else if (!lastLevel[1].array.length) {
          subarray.push(lastLevel[0].array.shift());
        } else {
          const objToShift =
            lastLevel[1].array[0] > lastLevel[0].array[0] ? 0 : 1;
          subarray.push(lastLevel[objToShift].array.shift());
        }
        setSortedSubarray(subarray);
      } else {
        lvls.pop();
        const objToUpdate = lvls[lvls.length - 1].find((obj) => !obj.isSorted);
        if (!objToUpdate) {
          throw new FrontendSperror('Merge Sort Error', 'No array to update');
        }
        objToUpdate.array = subarray;
        objToUpdate.isSorted = true;
        setSortedSubarray(null);
      }
    } else if (levels[levels.length - 1].every((obj) => obj.isSorted)) {
      setSortedSubarray(new Array());
    } else {
      const objToDivide = levels[levels.length - 1].find(
        (obj) => !obj.isSorted
      )!;
      const dividedObject: [(typeof levels)[0][0], (typeof levels)[0][0]] = [
        { array: new Array(), isSorted: true },
        { array: new Array(), isSorted: true },
      ];
      for (let i = 0; i < objToDivide.array.length; i++) {
        if (i < Math.ceil(objToDivide.array.length / 2)) {
          dividedObject[0].array.push(objToDivide.array[i]);
          if (dividedObject[0].array.length > 1) {
            dividedObject[0].isSorted = false;
          }
        } else {
          dividedObject[1].array.push(objToDivide.array[i]);
          if (dividedObject[1].array.length > 1) {
            dividedObject[1].isSorted = false;
          }
        }
      }
      lvls.push(dividedObject);
    }
    setLevels(lvls);
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
    done,
    sortedArray,
    levels,
    sortedSubarray,
  };
}

export default useMergeSort;
