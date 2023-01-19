import type { InputNumberProps } from 'antd';
import type { FC } from 'react';
import { usePlaceholder } from '../../../../utils';
import type { LFormItemProps } from '../../../base/BaseFromItem';
import LFormItem from '../../../base/BaseFromItem';
import NumberWrapper from '../base/NumberWrapper';

export interface LFormItemNumberProps extends LFormItemProps {
  numberProps?: InputNumberProps;
  min?: number;
  max?: number;
}

const LFormItemTextArea: FC<LFormItemNumberProps> = ({
  required = false,
  disabled = false,
  min = 0,
  max = 100,
  numberProps = {},
  placeholder,
  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
  });

  return (
    <LFormItem
      required={required}
      placeholder={messageLabel}
      validateTrigger="onBlur"
      {...restProps}
    >
      <NumberWrapper
        disabled={disabled}
        placeholder={messageLabel}
        min={min}
        max={max}
        {...numberProps}
      />
    </LFormItem>
  );
};

export default LFormItemTextArea;
