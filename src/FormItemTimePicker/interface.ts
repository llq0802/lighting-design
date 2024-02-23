import type { TimePickerProps, TimeRangePickerProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';
import type { DateValueType } from 'lighting-design/_utils/date';

export interface LFormItemTimePickerProps extends LFormItemProps {
  /**
   *是否是范围时间选择
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTimePickerProps
   */
  rangePicker?: boolean;
  /**
   *表单获取到的值的类型
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTimePickerProps
   */
  dateValueType?: Omit<DateValueType, 'number'>;
  /**
   *禁用当前时间之前的小时 (0 会包括当前小时)
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTimePickerProps
   */
  disabledHourBefore?: number;
  /**
   *禁用当前时间之后的小时 (0 会包括当前小时)
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTimePickerProps
   */
  disabledHourAfter?: number;
  /**
   *禁用分钟的函数
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTimePickerProps
   */
  disabledMinutes?: (selectedHour: number, type?: 'start' | 'end') => number[];
  /**
   *禁用秒的函数
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTimePickerProps
   */
  disabledSeconds?: (
    selectedHour: number,
    selectedMinute: number,
    type?: 'start' | 'end',
  ) => number[];
  /**
   *同antd时间组件的格式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTimePickerProps
   */
  format?: 'HH:mm:ss' | string;
  /**
   *antd时间组件的 Props
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTimePickerProps
   */
  timePickerProps?: TimePickerProps | TimeRangePickerProps;
}
