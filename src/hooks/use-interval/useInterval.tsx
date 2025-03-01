import { useEffect, useRef, useState } from 'react';

function useInterval(cb: () => void, delay: number = 1000) {
  const [del, setDelay] = useState(delay);
  const [active, setActive] = useState(true);
  const cbRef = useRef(cb);

  useEffect(() => {
    cbRef.current = cb;
  });

  useEffect(() => {
    const callback = () => {
      cbRef.current();
    };

    const interval = active ? setInterval(callback, del) : null;

    return () => (interval ? clearInterval(interval) : undefined);
  }, [del, active]);

  const stop = () => {
    setActive(false);
  };

  return { setDelay, stop };
}

export default useInterval;
