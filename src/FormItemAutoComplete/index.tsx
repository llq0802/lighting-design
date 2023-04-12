import type { AutoCompleteProps } from 'antd';
import { AutoComplete } from 'antd';
import type { DefaultOptionType } from 'antd/lib/select';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { FC, ReactElement } from 'react';
import { useContext } from 'react';

export type LFormItemAutoCompleteProps = {
  inputRender?: () => ReactElement;
  onSelect?: AutoCompleteProps['onSelect'];
  onSearch?: AutoCompleteProps['onSearch'];
  onFocus?: AutoCompleteProps['onFocus'];
  onBlur?: AutoCompleteProps['onBlur'];
  options?: DefaultOptionType[];
  autoCompleteProps?: AutoCompleteProps;
  disabled?: boolean;
  placeholder?: string;
} & LFormItemProps;

const LFormItemAutoComplete: FC<LFormItemAutoCompleteProps> = ({
  onSearch,
  onSelect,
  onFocus,
  onBlur,
  options,
  inputRender,
  autoCompleteProps,
  required,
  placeholder,
  disabled,
  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: false,
  });
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem required={required} placeholder={messageLabel} {...restProps}>
      {!inputRender ? (
        <AutoComplete
          disabled={disabled ?? formDisabled}
          allowClear
          options={options}
          style={{ width: '100%' }}
          placeholder={messageLabel}
          onSelect={onSelect}
          onSearch={onSearch}
          onFocus={onFocus}
          onBlur={onBlur}
          {...autoCompleteProps}
        />
      ) : (
        <AutoComplete
          disabled={disabled ?? formDisabled}
          allowClear
          options={options}
          style={{ width: '100%' }}
          placeholder={messageLabel}
          onSelect={onSelect}
          onSearch={onSearch}
          onFocus={onFocus}
          onBlur={onBlur}
          {...autoCompleteProps}
        >
          {inputRender()}
        </AutoComplete>
      )}
    </LFormItem>
  );
};

export default LFormItemAutoComplete;
