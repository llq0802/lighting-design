import { Tooltip, type TooltipProps } from 'antd';
import classnames from 'classnames';
import type { CSSProperties, DOMAttributes, FC } from 'react';
import React, { forwardRef } from 'react';
import './index.less';

function Text({ outRef, children, ...restProps }: any) {
  return (
    <span ref={outRef} {...restProps}>
      {children}
    </span>
  );
}

export interface LEllipsisTextProps extends DOMAttributes<HTMLSpanElement> {
  /**
   *类名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LEllipsisTextProps
   */
  className?: string;
  /**
   *样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LEllipsisTextProps
   */
  style?: CSSProperties;
  /**
   * 最大字符串长度
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LEllipsisTextProps
   */
  maxLength?: number;
  /**
   * 最大元素宽度
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LEllipsisTextProps
   */
  maxWidth?: number | string;
  /**
   * 自定义空字符的节点
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LEllipsisTextProps
   */
  emptyText?: React.ReactNode;
  /**
   * antd 的 tooltip
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LEllipsisTextProps
   */
  tooltip?: boolean | TooltipProps;
  children: string;
  outRef: any;
}

const prefixCls = 'lightd-ellipsis-text';

const LEllipsisText: FC<LEllipsisTextProps> = (props) => {
  const {
    className,
    style,

    maxLength,
    maxWidth,
    emptyText,
    tooltip = true,
    // @ts-ignore
    outRef,

    children: text,
    ...restProps
  } = props;

  const inenerClassName = classnames(prefixCls, className);

  // 无值时展示
  if (!text) {
    return emptyText ? <>{emptyText}</> : null;
  }

  const tooltipProps = typeof tooltip !== 'boolean' ? tooltip : {};
  // 最大字数省略
  if (maxLength) {
    const renderText =
      text?.length > maxLength ? `${text?.slice(0, maxLength)}...` : text;

    return tooltip ? (
      <Tooltip title={text} {...tooltipProps}>
        <Text
          className={inenerClassName}
          style={style}
          {...restProps}
          outRef={outRef}
        >
          {renderText}
        </Text>
      </Tooltip>
    ) : (
      <Text
        className={inenerClassName}
        style={style}
        {...restProps}
        outRef={outRef}
      >
        {renderText}
      </Text>
    );
  }

  // 最大宽度省略
  if (maxWidth) {
    return tooltip ? (
      <Tooltip title={text} {...tooltipProps}>
        <Text
          className={inenerClassName}
          style={{
            maxWidth,
            ...style,
          }}
          outRef={outRef}
          {...restProps}
        >
          {text}
        </Text>
      </Tooltip>
    ) : (
      <Text
        className={inenerClassName}
        style={{
          maxWidth,
          ...style,
        }}
        outRef={outRef}
        {...restProps}
      >
        {text}
      </Text>
    );
  }

  return tooltip ? (
    <Tooltip title={text} {...tooltipProps}>
      <Text
        className={inenerClassName}
        style={style}
        outRef={outRef}
        {...restProps}
      >
        {text}
      </Text>
    </Tooltip>
  ) : (
    <Text
      className={inenerClassName}
      style={style}
      outRef={outRef}
      {...restProps}
    >
      {text}
    </Text>
  );
};

export default forwardRef(function (props: LEllipsisTextProps, ref) {
  return <LEllipsisText {...props} outRef={ref as any}></LEllipsisText>;
});
