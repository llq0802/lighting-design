import type { CheckboxProps } from 'antd';
import type { LFormItemSelectProps } from 'lighting-design/l-form-item-select';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemCheckboxProps
  extends LFormItemProps,
    Pick<LFormProps, 'disabled'>,
    Pick<LFormItemSelectProps, 'fieldNames' | 'actionRef' | 'requestOptions' | 'request' | 'spin' | 'options'> {
  checkboxProps?: CheckboxProps;
}
