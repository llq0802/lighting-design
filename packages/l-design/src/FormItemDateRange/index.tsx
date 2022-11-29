import type { DatePickerProps, TimePickerProps } from 'antd';
import { DatePicker } from 'antd';
import type { MonthPickerProps, WeekPickerProps } from 'antd/lib/date-picker';
import type { FC } from 'react';
import { useMemo } from 'react';
import type { LFormItemProps } from '../FormItem/base/BaseFromItem';
import LFormItem from '../FormItem/base/BaseFromItem';

const DatePickerWrapper: React.FC<DatePickerProps | MonthPickerProps | WeekPickerProps | any> = ({
  style,
  ...restProps
}) => {
  return <DatePicker {...restProps} style={{ width: 280, ...style }} />;
};

export type Picker = 'date' | 'week' | 'month' | 'quarter' | 'year';

export interface LFormItemDateProps extends LFormItemProps {
  disabledDateBefore?: number;
  disabledDateAfter?: number;
  showTime?: TimePickerProps | boolean;
  format?: string;
  picker?: Picker;
  pickerProps?: DatePickerProps | MonthPickerProps | WeekPickerProps | any;
}

const LFormItemDate: FC<LFormItemDateProps> = ({
  disabledDateBefore,
  disabledDateAfter,
  showTime = false,
  format,
  picker = 'date',
  pickerProps = {},
  className,
  required = false,
  ...restProps
}) => {
  const currentPicker = useMemo(() => pickerProps.picker || picker, [pickerProps.picker, picker]);

  return (
    <LFormItem required={required} isSelectType {...restProps}>
      <DatePickerWrapper showTime={showTime} picker={currentPicker} {...pickerProps} />
    </LFormItem>
  );
};

export default LFormItemDate;
