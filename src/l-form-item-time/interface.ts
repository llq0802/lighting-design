import type { TimePickerProps, TimeRangePickerProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';
import type { DateValueType } from 'lighting-design/utils/date';

export interface LFormItemTimeProps extends LFormItemProps, Pick<LFormProps, 'size' | 'disabled' | 'variant'> {
  placeholder?: string | [string, string];
  /**
   */
  rangePicker?: boolean;
  /**
   *表单获取到的值的类型
   */
  timeValueType?: Omit<DateValueType, 'timestamp'>;
  /**
   *禁用当前时间之前的小时 (0 会包括当前小时)
   */
  disabledHourBefore?: number;
  /**
   *禁用当前时间之后的小时 (0 会包括当前小时)
   */
  disabledHourAfter?: number;
  /**
   *禁用分钟的函数
   */
  disabledMinutes?: (selectedHour: number, type?: 'start' | 'end') => number[];
  /**
   *禁用秒的函数
   */
  disabledSeconds?: (selectedHour: number, selectedMinute: number, type?: 'start' | 'end') => number[];
  /**
   * 同antd时间组件的格式
   */
  format?: string;
  hideDisabledOptions?: TimePickerProps['hideDisabledOptions'];
  use12Hours?: TimePickerProps['use12Hours'];
  /**
   *antd时间组件的 Props
   */
  timePickerProps?: TimePickerProps | TimeRangePickerProps;
}
