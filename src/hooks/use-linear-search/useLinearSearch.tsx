import { useEffect, useState } from 'react';
import useInterval from '@hooks/use-interval/useInterval';
import type { Array } from '@services/data-structures';
import type { LinearSearchMethods } from '#types/methods';

function useLinearSearch(
  array: Array,
  value: number | string,
  delay?: number
): LinearSearchMethods {
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);
  const [found, setFound] = useState(false);
  const [checked, setChecked] = useState(0);

  function search() {
    if (array[checked] === undefined) {
      setActive(false);
      setDone(true);
      setFound(false);
    } else if (array[checked] === value) {
      setActive(false);
      setDone(true);
      setFound(true);
    } else {
      setChecked(checked + 1);
    }
  }

  const { setDelay } = useInterval(() => {
    if (active && !done) {
      search();
    }
  }, delay);

  const start = () => setActive(true);

  const stop = () => setActive(false);

  useEffect(() => {
    setDone(false);
    setFound(false);
    setChecked(0);
  }, [value]);

  return {
    done,
    found,
    checked,
    setDelay,
    start,
    stop,
  };
}

export default useLinearSearch;
