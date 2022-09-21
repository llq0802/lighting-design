'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _icons = require('@ant-design/icons');

var _classnames = _interopRequireDefault(require('classnames'));

var _react = _interopRequireDefault(require('react'));

require('./index.less');

var _jsxRuntime = require('react/jsx-runtime');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function processChildren(children) {
  const childrenList = [];
  let isPrevChildPure = false;

  _react.default.Children.forEach(children, (child) => {
    const isCurrentChildPure = typeof child === 'string' || typeof child === 'number';

    if (isCurrentChildPure && isPrevChildPure) {
      const lastIndex = childrenList.length - 1;
      const lastChild = childrenList[lastIndex];
      childrenList[lastIndex] = `${lastChild}${child}`;
    } else {
      childrenList.push(child);
    }

    isPrevChildPure = isCurrentChildPure;
  });

  return _react.default.Children.map(childrenList, (child) =>
    typeof child === 'string'
      ? /*#__PURE__*/ (0, _jsxRuntime.jsx)('span', {
          children: child,
        })
      : child,
  );
}
/**
 * Button
 * @param {*} { loading, children, icon, style, ...props }
 * @return {*}
 */

const Button = ({ size, type, loading, children, icon, style, ...props }) => {
  const buttonClass = (0, _classnames.default)('l-button');
  const iconNode = loading ? /*#__PURE__*/ (0, _jsxRuntime.jsx)(_icons.LoadingOutlined, {}) : icon;
  const InnerContent = /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [iconNode, processChildren(children)],
  });
  return /*#__PURE__*/ (0, _jsxRuntime.jsx)('button', {
    className: buttonClass,
    style: style,
    children: InnerContent,
  });
};

var _default = Button;
exports.default = _default;
