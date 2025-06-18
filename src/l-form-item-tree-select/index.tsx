import { emptyArray, emptyObject } from 'lighting-design/constants';
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

  treeLine,
  treeCheckable,
  treeIcon,
  treeDataSimpleMode,
  multiple,
  showSearch,
  loadData,
  treeData = emptyArray,
  fieldNames,
  maxHeight = 400,
  request,
  requestOptions = emptyObject,
  actionRef,
  spin,

  treeSelectProps = emptyObject,

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
    fieldNames,
    spin,
    request,
    requestOptions,
    actionRef,
    treeLine,
    treeCheckable,
    treeIcon,
    treeDataSimpleMode,
    multiple,
    showSearch,
    loadData,
    treeData,
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
