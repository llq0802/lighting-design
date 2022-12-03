import type { AutoCompleteProps } from 'antd';
import { AutoComplete } from 'antd';
import type { DefaultOptionType } from 'antd/lib/select';
import type { FC, ReactElement } from 'react';
import type { LFormItemProps } from '../FormItem/base/BaseFromItem';
import LFormItem from '../FormItem/base/BaseFromItem';
import { usePlaceholder } from '../utils';

export type LFormItemAutoCompleteProps = {
  renderInput?: () => ReactElement;
  onSelect?: AutoCompleteProps['onSelect'];
  onSearch?: AutoCompleteProps['onSearch'];
  options?: DefaultOptionType[];
  autoCompleteProps?: AutoCompleteProps;
  disabled?: boolean;
  placeholder?: string;
} & LFormItemProps;

const LFormItemAutoComplete: FC<LFormItemAutoCompleteProps> = ({
  onSearch,
  onSelect,
  options,
  renderInput,
  autoCompleteProps,
  required,
  placeholder,
  disabled = false,
  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });

  return (
    <LFormItem required={required} {...restProps}>
      {!renderInput ? (
        <AutoComplete
          disabled={disabled}
          allowClear
          options={options}
          style={{ width: '100%' }}
          placeholder={messageLabel}
          onSelect={onSelect}
          onSearch={onSearch}
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
          {...autoCompleteProps}
        >
          {renderInput()}
        </AutoComplete>
      )}
    </LFormItem>
  );
};

export default LFormItemAutoComplete;
