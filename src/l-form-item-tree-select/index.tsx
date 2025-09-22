import LFormItem from 'lighting-design/l-form-item';
import { getFormItemPlaceholder } from 'lighting-design/utils';
import type { FC } from 'react';
import BaseTreeSelect from './base-tree-select';
import type { LFormItemTreeSelectProps } from './interface';

const LFormItemTreeSelect: FC<LFormItemTreeSelectProps> = ({
  placeholder,
  disabled,
  size,
  variant,

  listHeight,
  treeLine,
  treeCheckable,
  treeIcon,
  switcherIcon,
  treeDataSimpleMode,
  multiple,
  showSearch,
  loadData,
  treeData,
  options,
  fieldNames,
  //
  maxHeight = 400,
  request,
  requestOptions,
  actionRef,
  spin,

  treeSelectProps,

  ...formItemProps
}) => {
  const innerPlaceholder = getFormItemPlaceholder({
    placeholder,
    formItemProps,
    isSelectType: true,
  });

  const baseProps = {
    disabled,
    variant,
    size,
    placeholder: innerPlaceholder,
    //
    spin,
    request,
    requestOptions,
    actionRef,
    //
    fieldNames,
    treeLine,
    treeCheckable,
    treeIcon,
    switcherIcon,
    treeDataSimpleMode,
    multiple,
    showSearch,
    loadData,
    options,
    treeData,
    listHeight,
    ...treeSelectProps,
    styles: {
      ...treeSelectProps?.styles,
      popup: {
        ...treeSelectProps?.styles?.popup,
        root: {
          maxHeight,
          overflow: 'auto',
          ...treeSelectProps?.styles?.popup?.root,
        },
      },
    },
  };

  return (
    <LFormItem {...formItemProps}>
      <BaseTreeSelect {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemTreeSelect;
export * from './interface';
