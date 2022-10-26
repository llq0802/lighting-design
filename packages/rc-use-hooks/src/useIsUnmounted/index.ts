import { useEffect, useRef } from 'react';

const useIsUnmount = () => {
  const unmountedRef = useRef<boolean>(false);

  useEffect(() => {
    unmountedRef.current = false;
    return () => {
      unmountedRef.current = true;
    };
  }, []);

  return unmountedRef;
};

export default useIsUnmount;
