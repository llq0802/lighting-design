import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { emptyObject } from 'lighting-design/constants';
import { usePlaceholder } from 'lighting-design/utils';
import type { FC } from 'react';
import { useContext } from 'react';
import NumberWrapper from './NumberWrapper';
import type { LFormItemNumberProps } from './interface';

const LFormItemNumber: FC<LFormItemNumberProps> = ({
  disabled = false,
  size,
  placeholder,

  precision,
  min = 0,
  max = 99999,
  variant,
  addonAfter,
  prefix,
  addonBefore,

  numberProps = emptyObject,

  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
  });

  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem placeholder={messageLabel} {...restProps}>
      <NumberWrapper
        size={size}
        disabled={disabled || formDisabled}
        placeholder={messageLabel}
        //
        min={min}
        max={max}
        precision={precision}
        addonAfter={addonAfter}
        prefix={prefix}
        addonBefore={addonBefore}
        variant={variant}
        {...numberProps}
      />
    </LFormItem>
  );
};

export default LFormItemNumber;
export * from './interface';
