import { useEffect, useRef } from 'react';

const useBlur = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleBlur = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleBlur, true);

    return () => {
      document.removeEventListener('click', handleBlur, true);
    };
  }, [callback]);

  return ref;
};

export default useBlur;
