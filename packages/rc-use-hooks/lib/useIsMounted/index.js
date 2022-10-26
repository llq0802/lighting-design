'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = require('react');

const useIsMounted = () => {
  const mountedRef = (0, _react.useRef)(false);
  (0, _react.useEffect)(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  return mountedRef.current;
};

var _default = useIsMounted;
exports.default = _default;
