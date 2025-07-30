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
  options,
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
    isSelectType: true,
  });

  const baseProps = {
    placeholder: innerPlaceholder,
    disabled,
    variant,
    size,
    //
    options,
    changeOnSelect,
    displayRender,
    expandTrigger,
    showSearch,
    loadData,
    multiple,
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
