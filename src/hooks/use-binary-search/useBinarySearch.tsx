import { useEffect, useState } from 'react';
import useInterval from '@hooks/use-interval/useInterval';
import type { BinaryTree } from '@services/data-structures';
import type { BinarySearchMethods } from '#types/methods';

function useBinarySearch(
  bst: BinaryTree,
  value: number,
  delay?: number
): BinarySearchMethods {
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);
  const [found, setFound] = useState(false);
  const [checked, setChecked] = useState(bst.root);

  function search() {
    if (!checked) {
      setDone(true);
      setFound(false);
      setActive(false);
    } else if (checked.value === value) {
      setDone(true);
      setFound(true);
      setActive(false);
    } else if (checked.value > value && checked.left) {
      setChecked(checked.left);
    } else if (checked.right) {
      setChecked(checked.right);
    } else {
      setDone(true);
      setFound(false);
      setActive(false);
    }
  }

  const { setDelay } = useInterval(() => {
    if (active && !done) {
      search();
    }
  }, delay);

  useEffect(() => {
    setDone(false);
    setFound(false);
    setChecked(bst.root);
  }, [value]);

  const start = () => setActive(true);

  const stop = () => setActive(false);

  return {
    done,
    found,
    checked,
    setDelay,
    start,
    stop,
  };
}

export default useBinarySearch;
