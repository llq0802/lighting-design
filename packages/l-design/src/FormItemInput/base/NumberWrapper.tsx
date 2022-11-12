import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';
import type { FC } from 'react';
import { useCallback } from 'react';

export interface NumberWrapperProps extends InputNumberProps {
  disabledWhiteSpace?: boolean;
}

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
      onChange={handleChange}
      precision={2}
      style={{ width: '100%' }}
      {...restProps}
    />
  );
};

export default NumberWrapper;
