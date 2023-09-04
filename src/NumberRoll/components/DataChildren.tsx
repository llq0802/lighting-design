import classnames from 'classnames';
import type { FC } from 'react';

export const NumberRoll_DaterArray = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  ':',
  ' ',
  '-',
];

interface PropsType {
  num: string;
}
const prefixCls = 'lightd-number-roll';
const DataChildren: FC<PropsType> = ({ num }) => {
  const isDel = (item: string) => item === '-' || item === ' ' || item === ':';

  return (
    <div
      className={classnames(
        `${prefixCls}-animate-dom`,
        isDel(num) ? `${prefixCls}-animate-dom-del` : '',
      )}
      data-num={num}
    >
      {NumberRoll_DaterArray.map((item, i) => (
        <span
          className={classnames(
            `${prefixCls}-animate-span`,
            isDel(item) ? `${prefixCls}-animate-span-del` : '',
          )}
          key={i}
        >
          {item}
        </span>
      ))}
    </div>
  );
};
export default DataChildren;
