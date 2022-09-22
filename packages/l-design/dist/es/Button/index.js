import _LoadingOutlined from '@ant-design/icons/es/icons/LoadingOutlined';
import _Button from 'antd/es/button';
import 'antd/es/button/style';
var _excluded = ['size', 'type', 'loading', 'children', 'icon', 'style'];

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

import classNames from 'classnames';
import React from 'react';
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import './index.less';

// import 'antd/es/button/style';
function processChildren(children) {
  var childrenList = [];
  var isPrevChildPure = false;
  React.Children.forEach(children, function (child) {
    var isCurrentChildPure = typeof child === 'string' || typeof child === 'number';

    if (isCurrentChildPure && isPrevChildPure) {
      var lastIndex = childrenList.length - 1;
      var lastChild = childrenList[lastIndex];
      childrenList[lastIndex] = ''.concat(lastChild).concat(child);
    } else {
      childrenList.push(child);
    }

    isPrevChildPure = isCurrentChildPure;
  });
  return React.Children.map(childrenList, function (child) {
    return typeof child === 'string'
      ? /*#__PURE__*/ _jsx('span', {
          children: child,
        })
      : child;
  });
}
/**
 * Button
 * @param {*} { loading, children, icon, style, ...props }
 * @return {*}
 */

var LButton = function LButton(_ref) {
  var size = _ref.size,
    type = _ref.type,
    loading = _ref.loading,
    children = _ref.children,
    icon = _ref.icon,
    style = _ref.style,
    props = _objectWithoutProperties(_ref, _excluded);

  var buttonClass = classNames('l-button');
  var iconNode = loading ? /*#__PURE__*/ _jsx(_LoadingOutlined, {}) : icon;

  var InnerContent = /*#__PURE__*/ _jsxs(_Fragment, {
    children: [iconNode, processChildren(children)],
  });

  return /*#__PURE__*/ _jsx(_Button, {
    className: buttonClass,
    style: style,
    type: 'primary',
    children: InnerContent,
  });
};

export default LButton;
