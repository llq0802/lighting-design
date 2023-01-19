import type { AutoCompleteProps } from 'antd';
import { AutoComplete } from 'antd';
import type { DefaultOptionType } from 'antd/lib/select';
import type { FC, ReactElement } from 'react';
import { usePlaceholder } from '../../../utils';
import type { LFormItemProps } from '../../base/BaseFromItem';
import LFormItem from '../../base/BaseFromItem';

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
  disabled = false,
  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: false,
  });

  return (
    <LFormItem required={required} placeholder={messageLabel} {...restProps}>
      {!inputRender ? (
        <AutoComplete
          disabled={disabled}
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
          disabled={disabled}
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
