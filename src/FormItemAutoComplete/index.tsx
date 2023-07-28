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
  /**
   * 自定义输入框
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.9
   *@memberof LFormItemAutoCompleteProps
   */
  inputRender?: () => ReactElement;
  /**
   * 被选中时调用，参数为选中项的 value 值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.9
   *@memberof LFormItemAutoCompleteProps
   */
  onSelect?: AutoCompleteProps['onSelect'];
  /**
   * 搜索补全项的时候调用
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.9
   *@memberof LFormItemAutoCompleteProps
   */
  onSearch?: AutoCompleteProps['onSearch'];
  /**
   * AutoComplete 的 onFocus
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.9
   *@memberof LFormItemAutoCompleteProps
   */

  onFocus?: AutoCompleteProps['onFocus'];
  /**
   * AutoComplete 的 onBlur
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.9
   *@memberof LFormItemAutoCompleteProps
   */
  onBlur?: AutoCompleteProps['onBlur'];
  /**
   * 数据化配置选项内容
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.9
   *@memberof LFormItemAutoCompleteProps
   */
  options?: DefaultOptionType[];
  /**
   * antd自动补全组件 Props
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.9
   *@memberof LFormItemAutoCompleteProps
   */
  autoCompleteProps?: AutoCompleteProps;
  /**
   * 是否禁用
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.9
   *@memberof LFormItemAutoCompleteProps
   */
  disabled?: boolean;
  /**
   * placeholder 提示语
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.9
   *@memberof LFormItemAutoCompleteProps
   */
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
