import type { RadioGroupProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';
import type { LFormItemSelectProps } from 'lighting-design/FormItemSelect/interface';

export interface LFormItemRadioProps
  extends LFormItemProps,
    Pick<
      LFormItemSelectProps,
      | 'fieldNames'
      | 'actionRef'
      | 'requestOptions'
      | 'request'
      | 'all'
      | 'allValue'
      | 'allLabel'
      | 'spin'
      | 'options'
      | 'autoRequest'
      | 'refreshDeps'
    > {
  radioProps?: RadioGroupProps;
  optionType?: RadioGroupProps['optionType'];
  buttonStyle?: RadioGroupProps['buttonStyle'];
}
