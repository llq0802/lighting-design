import type { InputNumberProps } from 'antd';
import type { FC } from 'react';
import type { LFormItemProps } from '../../FormItem/base/BaseFromItem';
import LFormItem from '../../FormItem/base/BaseFromItem';
import { usePlaceholder } from '../../utils';
import NumberWrapper from '../base/NumberWrapper';

export interface LFormItemNumberProps extends LFormItemProps {
  numberProps?: InputNumberProps;
}

const LFormItemTextArea: FC<LFormItemNumberProps> = ({
  required = false,
  disabled = false,
  numberProps = {},
  placeholder,
  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
  });

  return (
    <LFormItem required={required} {...restProps}>
      <NumberWrapper disabled={disabled} placeholder={messageLabel} {...numberProps} />
    </LFormItem>
  );
};

export default LFormItemTextArea;
