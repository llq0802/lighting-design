import { useEffect, useRef } from 'react';

const useIsMounted = () => {
  const mountedRef = useRef<boolean>(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return mountedRef.current;
};

export default useIsMounted;
