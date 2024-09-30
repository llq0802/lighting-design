import clsx from 'classnames';
import { emptyArray } from 'lighting-design/constants';
import React, { useMemo } from 'react';
import './index.less';
import type { LHighlightTextProps } from './interface';

const prefixCls = 'lightd-highlight-text';

const escapeRegExp = (text: string): string => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// function splitAndMarkByRegex(
//   str: string,
//   regex: RegExp,
// ): Array<{
//   text: string;
//   isMatch: boolean;
// }> {
//   const result = [];
//   let lastIndex = 0;
//   let match;

//   // eslint-disable-next-line no-cond-assign
//   while ((match = regex.exec(str)) !== null) {
//     if (match.index > lastIndex) {
//       result.push({
//         text: str.slice(lastIndex, match.index),
//         isMatch: false,
//       });
//     }

//     result.push({
//       text: match[0],
//       isMatch: true,
//     });

//     lastIndex = regex.lastIndex;

//     if (!regex.global) {
//       break;
//     }
//   }

//   if (lastIndex < str.length) {
//     result.push({
//       text: str.slice(lastIndex),
//       isMatch: false,
//     });
//   }

//   return result;
// }

const LHighlightText: React.FC<LHighlightTextProps> = ({
  className,
  style,
  autoEscape = true,
  caseSensitive = false,
  text = '',
  highlightWords = emptyArray,
  highlightClassName,
  highlightTag = 'mark',
  highlightStyle,
  renderHighlight,
}) => {
  const parts = useMemo(() => {
    const pattern = highlightWords.map((word) => escapeRegExp(autoEscape ? word : String(word))).join('|');
    const regex = new RegExp(`(${pattern})`, caseSensitive ? 'g' : 'gi'); // 添加 'i' 标志以忽略大小写
    const parts = text.split(regex);
    // const parts = splitAndMarkByRegex(text, regex);
    return parts;
  }, [highlightWords?.join(), caseSensitive, autoEscape, text]);

  const dom = (
    <span className={clsx(prefixCls, className)} style={style}>
      {parts.map((part, i) => {
        return (
          <React.Fragment key={i}>
            {highlightWords.includes(part.toLowerCase())
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
