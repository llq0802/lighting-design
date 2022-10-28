'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = useShow;

var _cloneDeep2 = _interopRequireDefault(require('lodash/cloneDeep'));

var _react = require('react');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * 父调用子组件方法，并传值更新状态
 * @param funcRef ref对象
 * @param options { onShow, onFormart, onHide }
 * @returns T 传输的数据
 */
function useShow(funcRef, options) {
  const ref = (0, _react.useRef)(null);
  const childrenDataRef = (0, _react.useRef)(null);
  const opsOnShow = options.onShow,
    opsOnFormart = options.onFormart,
    opsOnHide = options.onHide;
  const onCallback = (0, _react.useCallback)((data) => {
    childrenDataRef.current = data;
  }, []);
  (0, _react.useImperativeHandle)(funcRef, () => {
    return {
      onShow: function (data) {
        ref.current = (0, _cloneDeep2.default)(data);
        if (opsOnShow) opsOnShow(ref.current);
      },
      onHide: function (data) {
        if (opsOnHide) opsOnHide(data);
      },
      getChildData: function () {
        // 传给父组件的数据
        return childrenDataRef.current;
      },
    };
  });
  return {
    parentData: opsOnFormart ? opsOnFormart(ref.current) : ref.current,
    setParentData: onCallback,
  };
}
