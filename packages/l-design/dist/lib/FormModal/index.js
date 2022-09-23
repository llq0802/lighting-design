'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/modal/style');

var _modal = _interopRequireDefault(require('antd/es/modal'));

var _react = _interopRequireWildcard(require('react'));

var _jsxRuntime = require('react/jsx-runtime');

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const useFormModal = (modalProps, Slot) => {
  const [visiable, setVisiable] = (0, _react.useState)(false);

  const open = () => {
    setVisiable(true);
  };

  const close = () => {
    setVisiable(false);
  };

  const FormModal = (slotProps) => {
    const onCancel = () => {
      close();
    };

    const ref = _react.default.useRef(null);

    const ok = () => {
      ref.current?.submit();
    };

    return (
      /*#__PURE__*/
      // @ts-ignore
      (0, _jsxRuntime.jsx)(_modal.default, {
        onCancel: onCancel,
        onOk: ok,
        visible: visiable,
        wrapClassName: 'form-modal-wrap',
        okText: '\u63D0\u4EA4',
        cancelButtonProps: {
          shape: 'round',
        },
        okButtonProps: {
          shape: 'round',
        },
        width: 600,
        ...modalProps,
        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(Slot, {
          ref: ref,
          ...slotProps,
          afterSubmit: close,
        }),
      })
    );
  };

  return {
    FormModal,
    open,
  };
};

var _default = useFormModal;
exports.default = _default;
