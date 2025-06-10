import { AutoComplete } from 'antd';
import LFormItem from 'lighting-design/l-form-item';
import { getFormItemPlaceholder } from 'lighting-design/utils';
import type { FC } from 'react';
import { cloneElement } from 'react';
import type { LFormItemAutoCompleteProps } from './interface';

const LFormItemAutoComplete: FC<LFormItemAutoCompleteProps> = ({
  disabled,
  size,
  placeholder,
  variant,
  //
  onSearch,
  onSelect,
  onFocus,
  onBlur,
  options,
  inputRender,
  autoCompleteProps,
  ...formItemProps
}) => {
  const itemPlaceholder = getFormItemPlaceholder({
    placeholder,
    formItemProps,
  });

  const baseProps = {
    disabled,
    options,
    variant,
    placeholder: itemPlaceholder,
    onSelect,
    onSearch,
    onFocus,
    onBlur,
    ...autoCompleteProps,
    style: { width: '100%', ...autoCompleteProps?.style },
  };
  return (
    <LFormItem {...formItemProps}>
      {!inputRender ? (
        <AutoComplete {...baseProps} />
      ) : (
        <AutoComplete {...baseProps}>
          {cloneElement(inputRender(), {
            size,
            placeholder: itemPlaceholder,
            ...inputRender()?.props,
          })}
        </AutoComplete>
      )}
    </LFormItem>
  );
};

export default LFormItemAutoComplete;
export * from './interface';
