import { Tooltip } from 'antd';
import type { FC } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import './style.less';

export interface LEllipsisTextProps extends HTMLSpanElement {
  text: string;
  maxLength?: number;
  maxWidth?: number;
  emptyText?: string | React.ReactDOM;
}

const prefixCls = 'lightd-ellipsis-text';

const LEllipsisText: FC<LEllipsisTextProps> = (props) => {
  const {
    text,
    maxLength,
    maxWidth,
    emptyText,
    style,
    className,
    tooltip,
    ...restProps
  } = props;

  const boxRef = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const boxElement = boxRef.current;
    if (boxElement) {
      setVisible(boxElement.scrollWidth > boxElement.clientWidth);
    }
  }, []);

  // 无值时展示
  if (!text) {
    return emptyText ? <>{emptyText}</> : null;
  }

  // 字数省略
  if (maxLength) {
    const renderText =
      text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

    return (
      <>
        {text.length > maxLength ? (
          <Tooltip title={text}>
            <span className="ellipsis-box">{renderText}</span>
          </Tooltip>
        ) : (
          text
        )}
      </>
    );
  }

  // 最大宽度省略
  if (maxWidth && visible) {
    return (
      <Tooltip title={text}>
        <span
          className="ellipsis-box-width"
          style={{ maxWidth }}
          ref={boxRef}
          {...restProps}
        >
          {text}
        </span>
      </Tooltip>
    );
  }

  return (
    <span className="ellipsis-box-width" {...restProps}>
      {text}
    </span>
  );
};

export default LEllipsisText;
