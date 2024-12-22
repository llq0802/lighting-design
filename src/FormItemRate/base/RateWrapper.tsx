import { Rate } from 'antd';
import type { FC } from 'react';

export type RateWrapperProps = Record<string, any>;

const RateWrapper: FC<RateWrapperProps> = ({ count, ...restProps }) => {
  return <Rate count={count} {...restProps} />;
};

export default RateWrapper;
