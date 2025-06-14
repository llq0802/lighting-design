import type { DatePickerProps, TimePickerProps } from 'antd';
import type { MonthPickerProps, RangePickerProps, WeekPickerProps } from 'antd/es/date-picker';
import type { PickerProps } from 'antd/es/date-picker/generatePicker/interface';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';
import type { DateValueType } from 'lighting-design/utils/date';

export interface LFormItemDateProps extends LFormItemProps, Pick<LFormProps, 'size' | 'disabled' | 'variant'> {
  placeholder?: string | [string, string];
  /**
   *禁用今天的前面的日期 为`0`时包括今天
   */
  disabledDateBefore?: number;
  /**
   *禁用今天的后面的日期 为`0`时包括今天
   */
  disabledDateAfter?: number;
  /**
   *是否展示时间 (时分秒)
   */
  showTime?: TimePickerProps | boolean;
  /**
   *日期格式
   */
  format?: string;

  /**
   *表单获取到的时间格式
   */
  dateValueType?: DateValueType;
  /**
   *日期类型
   */
  picker?: 'date' | 'week' | 'month' | 'quarter' | 'year';
  /** 是否是范围日期选择 */
  rangePicker?: boolean;
  /**
   *antd日期组件的 Props
   */
  datePickerProps?:
    | DatePickerProps
    | MonthPickerProps
    | WeekPickerProps
    | RangePickerProps
    | PickerProps
    | Record<string, any>;
}
