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
  mode,
  options,
  selectProps,
  requestOptions,
  autoRequest = true,
  spin,

  actionRef,
  ...formItemProps
}) => {
  // const innerAllItem = allItem
  //   ? {
  //       label: '全部',
  //       value: 'all',
  //       ...(typeof allItem === 'object' ? allItem : {}),
  //     }
  //   : void 0;

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
    //
    request,
    autoRequest,
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
