import { useState } from 'react';
import useInterval from '@hooks/use-interval/useInterval';
import { Array } from '@services/data-structures';
import type { BubbleSortMethods } from '#types/methods';

function useBubbleSort(array: Array, delay?: number): BubbleSortMethods {
  const [sortedArray, setSortedArray] = useState(array);
  const [checkToDo, setCheckToDo] = useState(sortedArray.length - 1);
  const [checkDone, setCheckDone] = useState(0);
  const [changeDone, setChangeDone] = useState(0);
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);

  function sortArray() {
    if (checkToDo) {
      if (checkDone === checkToDo) {
        if (!changeDone) {
          setDone(true);
          setCheckToDo(-1);
          return;
        }
        setCheckToDo(checkToDo - 1);
        setCheckDone(0);
        setChangeDone(0);
        return;
      }
      let tempArray = new Array(sortedArray);
      if (tempArray[checkDone] > tempArray[checkDone + 1]) {
        [tempArray[checkDone], tempArray[checkDone + 1]] = [
          tempArray[checkDone + 1],
          tempArray[checkDone],
        ];
        setChangeDone(changeDone + 1);
      }
      setCheckDone(checkDone + 1);
      setSortedArray(tempArray);
    } else {
      setDone(true);
      setCheckToDo(-1);
      end();
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
    checkToDo,
    checkDone,
  };
}

export default useBubbleSort;
