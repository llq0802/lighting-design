import type { RadioGroupProps } from 'antd';
import type { LFormItemSelectProps } from 'lighting-design/l-form-item-select';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemRadioProps
  extends LFormItemProps,
    Pick<LFormProps, 'variant' | 'disabled' | 'size'>,
    Pick<
      LFormItemSelectProps,
      'fieldNames' | 'actionRef' | 'requestOptions' | 'request' | 'spin' | 'options' | 'autoRequest'
    > {
  radioProps?: RadioGroupProps;
  optionType?: RadioGroupProps['optionType'];
  buttonStyle?: RadioGroupProps['buttonStyle'];
  block?: RadioGroupProps['block'];
}
