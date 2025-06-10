import { Rate } from 'antd';
import LFormItem from 'lighting-design/l-form-item';
import type { FC } from 'react';
import type { LFormItemRateProps } from './interface';

const LFormItemRate: FC<LFormItemRateProps> = ({
  disabled,
  size,
  allowHalf,
  character,
  count = 5,
  rateProps,
  ...restProps
}) => {
  const baseProps = {
    allowHalf,
    count,
    character,
    disabled,
    ...rateProps,
  };

  return (
    <LFormItem {...restProps}>
      <Rate {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemRate;
export * from './interface';
