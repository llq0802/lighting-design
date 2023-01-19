import type { InputNumberProps } from 'antd';
import type { FC } from 'react';
import { useContext } from 'react';
import { LFormContext } from '../../../../Form/base/BaseForm';
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
  disabled,
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
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem
      required={required}
      placeholder={messageLabel}
      validateTrigger="onBlur"
      {...restProps}
    >
      <NumberWrapper
        disabled={disabled ?? formDisabled}
        placeholder={messageLabel}
        min={min}
        max={max}
        {...numberProps}
      />
    </LFormItem>
  );
};

export default LFormItemTextArea;
