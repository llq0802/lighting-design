import type { InputNumberProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { FC } from 'react';
import { useContext } from 'react';
import NumberWrapper from './NumberWrapper';

export interface LFormItemNumberProps extends LFormItemProps {
  numberProps?: InputNumberProps;
  min?: number;
  max?: number;
}

const LFormItemNumber: FC<LFormItemNumberProps> = ({
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

export default LFormItemNumber;
