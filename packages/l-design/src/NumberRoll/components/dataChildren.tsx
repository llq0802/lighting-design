import type { FC } from 'react';
import { NumberRoll_DaterArray } from '..';

interface PropsType {
  num: string;
}
export const prefixCls = 'lightd-numberRoll';
const Index: FC<PropsType> = ({ num }) => {
  return (
    <>
      <div className={`${prefixCls}-animate-dom`} data-num={num}>
        {NumberRoll_DaterArray.map((item, i) => (
          <span
            className={`${prefixCls}-animate-span ${
              item === '-' || item === ' ' || item === ':' ? `${prefixCls}-animate-span-del` : ''
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
