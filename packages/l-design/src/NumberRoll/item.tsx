/* eslint-disable react/no-array-index-key */
import type { FC } from 'react';
import { useState } from 'react';

interface PropsType {
  num: string;
}
export const prefixCls = 'lightd-numberRoll';
const Index: FC<PropsType> = ({ num }) => {
  const [itemArr] = useState(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']);
  return (
    <>
      <div className={`${prefixCls}-animate-dom`} data-num={num}>
        {itemArr.map((item, i) => (
          <span className={`${prefixCls}-animate-span`} key={i}>
            {item}
          </span>
        ))}
      </div>
    </>
  );
};
export default Index;
