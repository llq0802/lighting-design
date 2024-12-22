import { AutoComplete } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { FC } from 'react';
import { cloneElement, useContext } from 'react';
import type { LFormItemAutoCompleteProps } from './interface';

const LFormItemAutoComplete: FC<LFormItemAutoCompleteProps> = ({
  disabled = false,
  size,
  placeholder,

  onSearch,
  onSelect,
  onFocus,
  onBlur,
  options,
  inputRender,
  autoCompleteProps,
  variant,
  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: false,
  });
  const { disabled: formDisabled } = useContext(LFormContext);
  const publicProps = {
    disabled: disabled || formDisabled,
    options,
    variant,
    onSelect,
    onSearch,
    onFocus,
    onBlur,
    ...autoCompleteProps,
    style: { width: '100%', ...autoCompleteProps?.style },
  };
  return (
    <LFormItem placeholder={messageLabel} {...restProps}>
      {!inputRender ? (
        <AutoComplete allowClear size={size} placeholder={messageLabel} {...publicProps} />
      ) : (
        <AutoComplete {...publicProps}>
          {cloneElement(inputRender(), {
            allowClear: true,
            size,
            placeholder: messageLabel,
            ...inputRender()?.props,
          })}
        </AutoComplete>
      )}
    </LFormItem>
  );
};

export default LFormItemAutoComplete;
export * from './interface';
