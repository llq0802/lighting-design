import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';
import type { FC } from 'react';

export type NumberWrapperProps = InputNumberProps;

const NumberWrapper: FC<NumberWrapperProps> = (props) => {
  const { value, onChange, ...restProps } = props;

  return (
    <InputNumber
      autoComplete="off"
      {...restProps}
      style={{ width: '100%', ...restProps?.style }}
      value={value}
      onChange={onChange}
    />
  );
};

export default NumberWrapper;
