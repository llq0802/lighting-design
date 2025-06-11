import { InputNumber } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import { getFormItemPlaceholder } from 'lighting-design/utils';
import type { FC } from 'react';
import type { LFormItemNumberProps } from './interface';

const LFormItemNumber: FC<LFormItemNumberProps> = ({
  disabled,
  size,
  placeholder,
  variant,
  //
  precision,
  min,
  max,
  addonAfter,
  addonBefore,
  prefix,
  suffix,
  //
  numberProps = emptyObject,

  ...formItemProps
}) => {
  const innerPlaceholder = getFormItemPlaceholder({
    placeholder,
    formItemProps,
  });

  const baseProps = {
    size,
    disabled,
    placeholder: innerPlaceholder,
    variant,
    //
    precision,
    min,
    max,
    addonAfter,
    addonBefore,
    prefix,
    suffix,
    autoComplete: 'off',
    ...numberProps,
    style: {
      width: '100%',
      ...numberProps.style,
    },
  };

  return (
    <LFormItem {...formItemProps}>
      <InputNumber {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemNumber;
export * from './interface';
