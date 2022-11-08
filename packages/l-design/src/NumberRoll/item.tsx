import type { FC } from 'react';
import { useState } from 'react';

interface PropsType {
  num: string;
  key?: React.Key;
}
export const prefixCls = 'lightd-numberRoll';
const Index: FC<PropsType> = ({ num, key }) => {
  const [itemArr] = useState(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']);
  return (
    <>
      <div className={`${prefixCls}-animate-dom`} data-num={num} key={key}>
        {itemArr.map((item) => (
          <span className={`${prefixCls}-animate-span`} key={item+'_'}>
            {item}
          </span>
        ))}
      </div>
    </>
  );
};
export default Index;
