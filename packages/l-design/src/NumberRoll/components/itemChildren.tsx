import type { FC } from 'react';
import { NumberRoll_NumberArray } from '..';

interface PropsType {
  num: string;
}
export const prefixCls = 'lightd-numberRoll';
const Index: FC<PropsType> = ({ num }) => {
  return (
    <>
      <div className={`${prefixCls}-animate-dom`} data-num={num}>
        {NumberRoll_NumberArray.map((item, i) => (
          <span className={`${prefixCls}-animate-span`} key={i}>
            {item}
          </span>
        ))}
      </div>
    </>
  );
};
export default Index;
