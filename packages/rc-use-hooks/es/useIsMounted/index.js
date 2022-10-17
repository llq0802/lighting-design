import { useEffect, useRef } from 'react';

var useIsMounted = function useIsMounted() {
  var mountedRef = useRef(false);
  useEffect(function () {
    mountedRef.current = true;
    return function () {
      mountedRef.current = false;
    };
  }, []);
  return mountedRef.current;
};

export default useIsMounted;
