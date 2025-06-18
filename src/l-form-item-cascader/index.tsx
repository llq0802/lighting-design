import { emptyArray } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import { getFormItemPlaceholder } from 'lighting-design/utils';
import type { FC } from 'react';
import BaseCascader from './base-cascader';
import type { LFormItemCascaderProps } from './interface';

const LFormItemCascader: FC<LFormItemCascaderProps> = ({
  disabled,
  placeholder,
  size,
  variant,
  //
  changeOnSelect,
  expandTrigger,
  displayRender,
  showSearch,
  multiple,
  loadData,
  options = emptyArray,
  fieldNames,

  request,
  requestOptions,
  spin,
  actionRef,

  cascaderProps,

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
    //
    placeholder: innerPlaceholder,
    fieldNames,
    spin,
    request,
    requestOptions,
    actionRef,
    ...cascaderProps,
  };

  return (
    <LFormItem {...formItemProps}>
      <BaseCascader {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemCascader;
export * from './interface';
