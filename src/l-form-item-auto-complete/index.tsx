import LFormItem from 'lighting-design/l-form-item';
import { getFormItemPlaceholder } from 'lighting-design/utils';
import type { FC } from 'react';
import BaseAutoComplete from './base-auto-complete';
import type { LFormItemAutoCompleteProps } from './interface';

const LFormItemAutoComplete: FC<LFormItemAutoCompleteProps> = ({
  disabled,
  size,
  placeholder,
  variant,
  //
  options,
  fieldNames,
  spin,
  request,
  requestOptions,
  actionRef,
  autoCompleteProps,
  ...formItemProps
}) => {
  const innerPlaceholder = getFormItemPlaceholder({
    placeholder,
    formItemProps,
  });

  const baseProps = {
    disabled,
    options,
    variant,
    size,
    placeholder: innerPlaceholder,
    fieldNames,
    spin,
    request,
    requestOptions,
    actionRef,
    ...autoCompleteProps,
  };
  return (
    <LFormItem {...formItemProps}>
      <BaseAutoComplete {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemAutoComplete;
export * from './interface';
