import classnames from 'classnames';
import { isNumber } from 'lighting-design/_utils';
import type { FC } from 'react';

export const NumberRoll_DaterArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ' ', '-', '/'];

interface PropsType {
  num: string;
  index: React.Key;
  itemNumStyle?: React.CSSProperties;
  itemCharStyle?: React.CSSProperties;
}
const prefixCls = 'lightd-number-roll';
const DataChildren: FC<PropsType> = ({ num, itemNumStyle, itemCharStyle }) => {
  const numStyle = itemNumStyle || {};

  return (
    <div
      data-num={num}
      className={classnames(`${prefixCls}-animate-dom`, !isNumber(num) ? `${prefixCls}-animate-dom-char` : '')}
    >
      {NumberRoll_DaterArray.map((item, i) => (
        <span
          key={i}
          className={classnames(
            `${prefixCls}-animate-dom-span`,
            !isNumber(item) ? `${prefixCls}-animate-dom-span-char` : '',
          )}
          style={{
            ...numStyle,
            ...(!isNumber(item) ? itemCharStyle : {}),
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
};
export default DataChildren;
