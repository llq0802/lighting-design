'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = require('react');

const useIsUnmount = () => {
  const unmountedRef = (0, _react.useRef)(false);
  (0, _react.useEffect)(() => {
    unmountedRef.current = false;
    return () => {
      unmountedRef.current = true;
    };
  }, []);
  return unmountedRef.current;
};

var _default = useIsUnmount;
exports.default = _default;
