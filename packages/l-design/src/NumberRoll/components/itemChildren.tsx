import type { FC } from 'react';
import { NumberRoll_NumberArray } from '..';

interface PropsType {
  num: string;
}
export const prefixCls = 'lightd-numberRoll';
const Index: FC<PropsType> = ({ num }) => {
  const isDel = (item: string) => item === '.';

  return (
    <>
      <div
        className={`${prefixCls}-animate-dom ${isDel(num) ? `${prefixCls}-animate-dom-del` : ''}`}
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
    </>
  );
};
export default Index;
