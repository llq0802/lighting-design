import type { DatePickerProps, TimePickerProps } from 'antd';
import type { MonthPickerProps, RangePickerProps, WeekPickerProps } from 'antd/es/date-picker';
import type { InputProps } from 'antd/lib';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';
import type { DateValueType, Picker } from 'lighting-design/_utils/date';

export interface LFormItemDatePickerProps extends LFormItemProps {
  variant?: InputProps['variant'];
  /**
   *禁用今天的前面的日期 为`0`时包括今天
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemDatePickerProps
   */
  disabledDateBefore?: number;
  /**
   *禁用今天的后面的日期 为`0`时包括今天
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemDatePickerProps
   */
  disabledDateAfter?: number;
  /**
   *是否展示时间 (时分秒)
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemDatePickerProps
   */
  showTime?: TimePickerProps | boolean;
  /**
   *日期格式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemDatePickerProps
   */
  format?: string;

  /**
   *表单获取到的时间格式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemDatePickerProps
   */
  dateValueType?: DateValueType;
  /**
   *日期类型
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemDatePickerProps
   */
  picker?: Picker;
  /**
   *antd日期组件的 Props
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemDatePickerProps
   */
  pickerProps?: DatePickerProps | MonthPickerProps | WeekPickerProps | RangePickerProps | any;

  /** 是否是范围日期选择 */
  rangePicker?: boolean;
}
