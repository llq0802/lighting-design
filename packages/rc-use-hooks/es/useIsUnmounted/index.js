import { useEffect, useRef } from 'react';

var useIsUnmount = function useIsUnmount() {
  var unmountedRef = useRef(false);
  useEffect(function () {
    unmountedRef.current = false;
    return function () {
      unmountedRef.current = true;
    };
  }, []);
  return unmountedRef.current;
};

export default useIsUnmount;
