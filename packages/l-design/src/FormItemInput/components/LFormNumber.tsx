import type { InputNumberProps } from 'antd';
import type { FC } from 'react';
import type { LFormItemProps } from '../../FormItem/base/BaseFromItem';
import LFormItem from '../../FormItem/base/BaseFromItem';
import NumberWrapper from '../base/NumberWrapper';

export interface LFormItemNumberProps extends LFormItemProps {
  numberProps?: InputNumberProps;
}

const LFormItemTextArea: FC<LFormItemNumberProps> = ({
  required = false,
  numberProps = {},
  ...restProps
}) => {
  return (
    <LFormItem required={required} {...restProps}>
      <NumberWrapper {...numberProps} />
    </LFormItem>
  );
};

export default LFormItemTextArea;
