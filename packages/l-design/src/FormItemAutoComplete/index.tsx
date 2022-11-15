import type { AutoCompleteProps } from 'antd';
import { AutoComplete } from 'antd';
import type { DefaultOptionType } from 'antd/lib/select';
import type { FC, ReactElement } from 'react';
import type { LFormItemProps } from '../FormItem/base/BaseFromItem';
import LFormItem from '../FormItem/base/BaseFromItem';

export type LFormItemAutoCompleteProps = {
  renderInput?: () => ReactElement;
  onSelect?: AutoCompleteProps['onSelect'];
  onSearch?: AutoCompleteProps['onSearch'];
  options?: DefaultOptionType[];
  autoCompleteProps?: AutoCompleteProps;
} & LFormItemProps;

const LFormItemAutoComplete: FC<LFormItemAutoCompleteProps> = ({
  onSearch,
  onSelect,
  options,
  renderInput,
  autoCompleteProps,
  required,
  ...restProps
}) => {
  return (
    <LFormItem required={required} {...restProps}>
      {!renderInput ? (
        <AutoComplete
          allowClear
          options={options}
          style={{ width: 300 }}
          placeholder="请输入"
          onSelect={onSelect}
          onSearch={onSearch}
          {...autoCompleteProps}
        />
      ) : (
        <AutoComplete
          allowClear
          options={options}
          style={{ width: 300 }}
          placeholder="请输入"
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
