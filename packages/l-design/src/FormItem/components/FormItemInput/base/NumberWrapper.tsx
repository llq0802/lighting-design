import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';
import type { FC } from 'react';
import { useCallback } from 'react';

export type NumberWrapperProps = InputNumberProps;

const NumberWrapper: FC<NumberWrapperProps> = (props) => {
  const { value, onChange, ...restProps } = props;

  const handleChange = useCallback(
    (e: number | string | null) => {
      const rawValue = e as string;

      onChange?.(rawValue as any);
    },
    [onChange],
  );
  return (
    <InputNumber
      value={value}
      precision={2}
      style={{ width: '100%' }}
      {...restProps}
      onChange={handleChange}
    />
  );
};

export default NumberWrapper;
