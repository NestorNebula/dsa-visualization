import { useEffect, useRef } from 'react';

function useEscape(cb: () => void) {
  const callback = useRef(cb);

  useEffect(() => {
    callback.current = cb;
  }, [cb]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.key === 'Escape' && callback.current();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}

export default useEscape;
