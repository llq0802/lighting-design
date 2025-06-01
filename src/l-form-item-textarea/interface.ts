import type { TextAreaProps } from 'antd/es/input';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';

export interface LFormItemTextAreaProps extends LFormItemProps {
  /**
   *是否禁用空格
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTextAreaProps
   */
  disabledWhiteSpace?: boolean;
  variant?: TextAreaProps['variant'];
  showCount?: TextAreaProps['showCount'];
  autoSize?: TextAreaProps['autoSize'];
  /**
   *  Input.TextArea或者Input的属性
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTextAreaProps
   *@see https://ant.design/components/input-cn#inputtextarea
   */
  textAreaProps?: TextAreaProps;
}
