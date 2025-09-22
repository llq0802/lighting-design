import type { TextAreaProps } from 'antd/es/input';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemTextareaProps extends LFormItemProps, Pick<LFormProps, 'disabled' | 'size' | 'variant'> {
  placeholder?: string;
  showCount?: TextAreaProps['showCount'];
  maxLength?: TextAreaProps['maxLength'];
  autoSize?: TextAreaProps['autoSize'];
  rows?: TextAreaProps['rows'];
  /**
   *  Input.TextArea或者Input的属性
   */
  textAreaProps?: TextAreaProps;
}
