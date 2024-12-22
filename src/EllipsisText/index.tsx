import { Tooltip } from 'antd';
import classnames from 'classnames';
import type { FC } from 'react';
import { forwardRef } from 'react';
import './index.less';
import type { LEllipsisTextProps } from './interface';

function Text({ outRef, children, ...restProps }: any) {
  return (
    <span ref={outRef} {...restProps}>
      {children}
    </span>
  );
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
    const renderText = text?.length > maxLength ? `${text?.slice(0, maxLength)}...` : text;

    return tooltip ? (
      <Tooltip title={text} {...tooltipProps}>
        <Text className={inenerClassName} style={style} {...restProps} outRef={outRef}>
          {renderText}
        </Text>
      </Tooltip>
    ) : (
      <Text className={inenerClassName} style={style} {...restProps} outRef={outRef}>
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
      <Text className={inenerClassName} style={style} outRef={outRef} {...restProps}>
        {text}
      </Text>
    </Tooltip>
  ) : (
    <Text className={inenerClassName} style={style} outRef={outRef} {...restProps}>
      {text}
    </Text>
  );
};

export default forwardRef(function (props: LEllipsisTextProps, ref) {
  return <LEllipsisText {...props} outRef={ref as any}></LEllipsisText>;
});
export * from './interface';
