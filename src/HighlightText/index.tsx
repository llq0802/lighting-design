import clsx from 'classnames';
import { emptyArray } from 'lighting-design/constants';
import React, { useMemo } from 'react';
import './index.less';
import type { LHighlightTextProps } from './interface';

const prefixCls = 'lightd-highlight-text';

const escapeRegExp = (text: string): string => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function splitAndMarkByRegex(
  str: string,
  regex: RegExp,
): Array<{
  text: string;
  isMatch: boolean;
}> {
  const result = [];
  let lastIndex = 0;
  let match;

  // eslint-disable-next-line no-cond-assign
  while ((match = regex.exec(str)) !== null) {
    if (match.index > lastIndex) {
      result.push({
        text: str.slice(lastIndex, match.index),
        isMatch: false,
      });
    }

    result.push({
      text: match[0],
      isMatch: true,
    });

    lastIndex = regex.lastIndex;

    if (!regex.global) {
      break;
    }
  }

  if (lastIndex < str.length) {
    result.push({
      text: str.slice(lastIndex),
      isMatch: false,
    });
  }

  return result;
}

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
  // const regex = new RegExp(`(${highlightWords.join('|')})`, 'gi'); // 添加 'i' 标志以忽略大小写

  // // 提取所有匹配的子串
  // const matches = text.match(regex);

  // if (!matches) {
  //   return <span>{text}</span>;
  // }

  // // 记录所有匹配的位置
  // const matchPositions = matches.map(match => {
  //   return text.indexOf(match);
  // });

  // // 生成高亮文本
  // const highlightedText = text.replace(regex, (match, offset) => {
  //   return (
  //     <span
  //       key={offset}
  //       style={{
  //         ...highlightStyle,
  //         backgroundColor: 'yellow'
  //       }}
  //     >
  //       {match}
  //     </span>
  //   );
  // });

  // // 分割未匹配的部分
  // const parts = [];
  // let lastPosition = 0;

  // matchPositions.forEach((position, index) => {
  //   if (position > lastPosition) {
  //     parts.push(text.substring(lastPosition, position));
  //   }
  //   parts.push(highlightedText[position]);
  //   lastPosition = position + matches[index].length;
  // });

  // if (lastPosition < text.length) {
  //   parts.push(text.substring(lastPosition));
  // }

  // return (
  //   <span>
  //     {parts.map((part, index) => (
  //       <span key={index}>{part}</span>
  //     ))}
  //   </span>
  // );

  const parts = useMemo(() => {
    const pattern = highlightWords.map((word) => escapeRegExp(autoEscape ? word : String(word))).join('|');
    const regex = new RegExp(`(${pattern})`, caseSensitive ? 'g' : 'gi'); // 添加 'i' 标志以忽略大小写
    const parts = text.split(regex);
    const matches = text.match(regex);
    console.log('==matches ====>', matches);
    console.log('==regex====>', regex);
    console.log('==highlightWords====>', highlightWords);
    console.log('==parts====>', parts);
    // const parts1 = splitAndMarkByRegex(text, regex);
    // console.log('==parts1====>', parts1);

    return parts;
  }, [highlightWords?.join(), caseSensitive, autoEscape, text]);
  // highlightWords.some(word => part.toLowerCase().includes(word.toLowerCase()))

  const isSame = (curPart: string) => {
    if (caseSensitive) {
      return highlightWords.includes(curPart);
    }

    return highlightWords.includes(curPart.toLowerCase()) || highlightWords.includes(curPart.toUpperCase());
  };

  const dom = (
    <span className={clsx(prefixCls, className)} style={style}>
      {parts.map((part, i) => {
        return (
          <React.Fragment key={i}>
            {isSame(part)
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
