import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';
import type { FC } from 'react';

type NumberWrapperProps = InputNumberProps;

const NumberWrapper: FC<NumberWrapperProps> = (props) => (
  <InputNumber autoComplete="off" {...props} style={{ width: '100%', ...props?.style }} />
);
export default NumberWrapper;
