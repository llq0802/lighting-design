'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = require('react');

// ref:
//  https://zh-hans.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node

/**
 * 测量 DOM 节点 整个重新渲染期间始终存在
 */
function useClientRect() {
  const ref = (0, _react.useRef)(null);
  const [rect, setRect] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (ref.current) {
      setRect(ref.current?.getBoundingClientRect());
    }
  }, [ref]);
  return [rect, ref];
} //  官方案例 当且仅当组件挂载和卸载时
// function useClientRect() {
//   const [rect, setRect] = useState(null);
//   const ref = useCallback(node => {
//     if (node !== null) {
//       setRect(node.getBoundingClientRect());
//     }
//   }, []);
//   return [rect, ref];
// }

var _default = useClientRect;
exports.default = _default;
