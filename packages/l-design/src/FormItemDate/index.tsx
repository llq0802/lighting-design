import type { DatePickerProps, TimePickerProps } from 'antd';
import { DatePicker } from 'antd';
import type { MonthPickerProps, WeekPickerProps } from 'antd/lib/date-picker';
import type { FC } from 'react';
import { useMemo } from 'react';
import type { LFormItemProps } from '../FormItem/base/BaseFromItem';
import LFormItem from '../FormItem/base/BaseFromItem';
import type { Picker } from '../utils/date';
import { createDisabledDate, getDateFormat, transformMomentValue } from '../utils/date';

const DatePickerWrapper: FC<DatePickerProps | MonthPickerProps | WeekPickerProps | any> = ({
  style,
  value,
  ...restProps
}) => {
  return (
    <DatePicker
      {...restProps}
      value={transformMomentValue(value)}
      style={{ width: 280, ...style }}
    />
  );
};

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

  required = false,
  ...restProps
}) => {
  const currentPicker = useMemo(() => pickerProps.picker || picker, [pickerProps.picker, picker]);
  const currentFormat = useMemo(() => {
    return getDateFormat(
      pickerProps.format || format,
      currentPicker,
      pickerProps.showTime || showTime,
    );
  }, [format, pickerProps.format, currentPicker, pickerProps.showTime, showTime]);

  const currentDisabledDate = useMemo(
    () =>
      createDisabledDate(currentPicker, {
        disabledDateBefore,
        disabledDateAfter,
      }),
    [currentPicker, disabledDateBefore, disabledDateAfter],
  );

  return (
    <LFormItem required={required} isSelectType {...restProps}>
      <DatePickerWrapper
        format={currentFormat}
        showTime={showTime}
        picker={currentPicker}
        disabledDate={currentDisabledDate}
        {...pickerProps}
      />
    </LFormItem>
  );
};

export default LFormItemDate;
