import LFormItem from 'lighting-design/l-form-item';
import type { FC } from 'react';
import BaseCheckbox from './base-checkbox';
import type { LFormItemCheckboxProps } from './interface';

const LFormItemCheckbox: FC<LFormItemCheckboxProps> = ({
  disabled,

  fieldNames,
  actionRef,
  request,
  options,
  checkboxProps,
  spin,
  requestOptions,
  ...restProps
}) => {
  const baseProps = {
    disabled,
    options,
    //
    requestOptions,
    actionRef,
    request,

    fieldNames,
    spin,
    ...checkboxProps,
  };

  return (
    <LFormItem {...restProps}>
      <BaseCheckbox {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemCheckbox;
export * from './interface';
