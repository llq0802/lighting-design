import type { ColorPickerProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';

export interface LFormItemColorProps extends LFormItemProps {
  showText: ColorPickerProps['showText'];
  colorProps?: ColorPickerProps;
}
