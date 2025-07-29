import LFormItem from 'lighting-design/l-form-item';
import { getFormItemPlaceholder } from 'lighting-design/utils';
import type { FC } from 'react';
import BaseSelect from './base-select';
import type { LFormItemSelectProps } from './interface';

const LFormItemSelect: FC<LFormItemSelectProps> = ({
  disabled,
  size,
  placeholder,
  variant,
  //
  request,
  showSearch,
  fieldNames,
  filterOption,
  optionFilterProp = 'label',
  mode,
  options,
  selectProps,
  requestOptions,
  spin,

  actionRef,
  ...formItemProps
}) => {
  const innerPlaceholder = getFormItemPlaceholder({
    placeholder,
    formItemProps,
    isSelectType: true,
  });

  const baseProps = {
    size,
    disabled,
    placeholder: innerPlaceholder,
    variant,
    //
    mode,
    options,
    showSearch,
    fieldNames,
    filterOption,
    optionFilterProp,
    //
    request,
    actionRef,
    requestOptions,
    spin,
    ...selectProps,
  };

  return (
    <LFormItem {...formItemProps}>
      <BaseSelect {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemSelect;
export * from './interface';
