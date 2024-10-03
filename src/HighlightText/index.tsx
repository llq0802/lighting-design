import { useDebounce, useMemoizedFn } from 'ahooks';
import clsx from 'classnames';
import { emptyArray } from 'lighting-design/constants';
import React, { useMemo } from 'react';
import './index.less';
import type { LHighlightTextProps } from './interface';

const prefixCls = 'lightd-highlight-text';

const escapeRegExp = (text: string): string => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const LHighlightText: React.FC<LHighlightTextProps> = ({
  className,
  style,
  autoEscape = true,
  caseSensitive = false,
  text = '',
  highlightWords: keywords = emptyArray,
  highlightClassName,
  highlightTag = 'mark',
  highlightStyle,
  renderHighlight,
  wait = 500,
  debounceOptions,
  ...rest
}) => {
  const highlightWords = useDebounce(keywords, { wait, ...debounceOptions });
  const parts = useMemo(() => {
    const pattern = highlightWords.map((word) => escapeRegExp(autoEscape ? word : String(word))).join('|');
    const regex = new RegExp(`(${pattern})`, caseSensitive ? 'g' : 'gi'); // 添加 'i' 标志以忽略大小写
    const parts = text.split(regex)?.filter(Boolean);
    return parts;
  }, [highlightWords?.join(), caseSensitive, autoEscape, text]);

  const isHighlight = useMemoizedFn((curPart: string) => {
    if (caseSensitive) {
      return highlightWords.includes(curPart);
    }
    return highlightWords.some((word) => {
      return curPart.toLowerCase() === word.toLowerCase();
    });
  });

  const dom = (
    <span className={clsx(prefixCls, className)} style={style} {...rest}>
      {parts.map((part, i) => {
        return (
          <React.Fragment key={i}>
            {isHighlight(part)
              ? renderHighlight
                ? renderHighlight?.(part)
                : React.createElement(highlightTag, { className: highlightClassName, style: highlightStyle }, part)
              : part}
          </React.Fragment>
        );
      })}
    </span>
  );

  return dom;
};
export * from './interface';

export default React.memo(LHighlightText);
