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
 * 父调用子组件方法，并传值
 * @param funcRef ref对象
 * @param options { onShow, onFormart, onHide }
 * @returns T 传输的数据
 */
function useShow(funcRef, options) {
  const ref = (0, _react.useRef)({});
  const callBackRef = (0, _react.useRef)();
  const onShow = options.onShow,
    onHide = options.onHide,
    onFormart = options.onFormart;

  const onCallback = function onCallback(e) {
    callBackRef.current = e;
  };

  (0, _react.useImperativeHandle)(funcRef, function () {
    return {
      show: function show(record) {
        ref.current = (0, _cloneDeep2.default)(record); // 深拷贝，避免值被修改，造成异常

        onShow?.(ref.current);
      },
      hide: function hide(data) {
        onHide?.(data);
      },
      getData: function () {
        // 传给父组件的数据
        return callBackRef.current;
      },
    };
  });
  return {
    record: onFormart ? onFormart(ref.current) : ref.current,
    onCallback: onCallback,
  };
}
