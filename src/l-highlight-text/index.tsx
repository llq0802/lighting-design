import { useDebounce } from 'ahooks';
import { emptyArray } from 'lighting-design/constants';
import React, { Fragment, createElement, useMemo } from 'react';
import type { LHighlightTextProps } from './interface';
import { useStyles } from './styles';

const escapeRegExp = (text: string): string => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const LHighlightText: React.FC<LHighlightTextProps> = ({
  className,
  style,
  autoEscape = true,
  caseSensitive = false,
  text: outText = '',
  highlightWords: keywords = emptyArray,
  highlightClassName,
  highlightTag = 'mark',
  highlightStyle,
  renderHighlight,
  wait = 500,
  debounceOptions,
  children = '',
  ...rest
}) => {
  const { styles, cx } = useStyles();
  const highlightWords = useDebounce(keywords, { wait, ...debounceOptions });
  const text = outText || children;

  const parts = useMemo(() => {
    if (!highlightWords?.length) return [];
    const pattern = highlightWords
      .toSorted((a, b) => b.length - a.length) // 先匹配最长的关键字, 防止匹配到部分关键字
      .map((word) => (autoEscape ? escapeRegExp(String(word)) : String(word)))
      .join('|');
    const regex = new RegExp(`(${pattern})`, caseSensitive ? 'g' : 'gi'); // 添加 'i' 标志以忽略大小写
    const parts = text?.split(regex)?.filter(Boolean);
    return parts;
  }, [highlightWords?.join(), caseSensitive, autoEscape, text]);

  const isHighlight = (curPart: string) => {
    if (caseSensitive) {
      return highlightWords.includes(curPart);
    }
    return highlightWords.some((word) => {
      return curPart.toLowerCase() === word.toLowerCase();
    });
  };

  const dom = (
    <span className={cx(styles.container, className)} style={style} {...rest}>
      {parts.map((part, i) => {
        return (
          <Fragment key={i}>
            {isHighlight(part)
              ? renderHighlight
                ? renderHighlight?.(part)
                : createElement(highlightTag, { className: highlightClassName, style: highlightStyle }, part)
              : part}
          </Fragment>
        );
      })}
    </span>
  );

  return dom;
};
export * from './interface';
export default React.memo(LHighlightText);
