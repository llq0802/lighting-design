import type { AutoCompleteProps } from 'antd';
import type { LFormItemSelectProps } from 'lighting-design/l-form-item-select';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export type LFormItemAutoCompleteProps = {
  placeholder?: string;
  /**
   * antd自动补全组件 Props
   */
  autoCompleteProps?: AutoCompleteProps;
} & LFormItemProps &
  Pick<LFormProps, 'variant' | 'disabled' | 'size'> &
  Pick<LFormItemSelectProps, 'spin' | 'request' | 'requestOptions' | 'actionRef' | 'options' | 'fieldNames'>;
