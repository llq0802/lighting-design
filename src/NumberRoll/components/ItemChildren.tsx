import type { FC } from 'react';

export const NumberRoll_NumberArray = [
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
  '.',
];

interface PropsType {
  num: string;
}
const prefixCls = 'lightd-number-roll';
const ItemChildren: FC<PropsType> = ({ num }) => {
  const isDel = (item: string) => item === '.';

  return (
    <div
      className={`${prefixCls}-animate-dom ${
        isDel(num) ? `${prefixCls}-animate-dom-del` : ''
      }`}
      data-num={num}
    >
      {NumberRoll_NumberArray.map((item, i) => (
        <span
          className={`${prefixCls}-animate-span ${
            isDel(item) ? `${prefixCls}-animate-span-del` : ''
          }`}
          key={i}
        >
          {item}
        </span>
      ))}
    </div>
  );
};
export default ItemChildren;