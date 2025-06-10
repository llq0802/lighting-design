import type { ColorPickerProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemColorProps extends LFormItemProps, Pick<LFormProps, 'disabled' | 'size'> {
  showText?: ColorPickerProps['showText'];
  colorFormat?: ColorPickerProps['format'];
  colorProps?: ColorPickerProps;
}
