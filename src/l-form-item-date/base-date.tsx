import { DatePicker, type DatePickerProps } from 'antd';
import type { MonthPickerProps, WeekPickerProps } from 'antd/es/date-picker';
export const BaseDate: FC<DatePickerProps | MonthPickerProps | WeekPickerProps | any> = ({
  dateValueType,
  value,
  onChange,
  format,
  picker,
  style,
  ...restProps
}) => {
  const handleDatePickerChange = useMemoizedFn((val: Dayjs | null, str: string) => {
    if (!val) {
      onChange(void 0);
      return;
    }
    switch (dateValueType) {
      case 'string':
        {
          onChange(str);
        }
        break;
      case 'dayjs':
        {
          onChange(val);
        }
        break;
      case 'number':
        {
          const timestamp = val!?.valueOf();
          onChange(timestamp);
        }
        break;
      default:
        onChange(val, str);
        break;
    }
  });

  return (
    <DatePicker
      // allowEmpty
      picker={picker}
      locale={locale}
      format={format === DateFormat.quarter ? void 0 : format}
      {...restProps}
      value={transform2Dayjs(value, format, picker)}
      style={{ width: '100%', ...style }}
      onChange={handleDatePickerChange}
    />
  );
};

export const BaseDateRange: FC<RangePickerWrapperProps> = ({
  dateValueType,
  style,
  value,
  onChange,
  format,
  picker,
  ...restProps
}) => {
  const handleRangeDatePickerChange = useMemoizedFn((vals: [Dayjs, Dayjs] | [null, null], strs: [string, string]) => {
    if (!vals) {
      onChange(void 0);
      return;
    }
    switch (dateValueType) {
      case 'string':
        {
          onChange(strs);
        }
        break;
      case 'dayjs':
        {
          onChange(vals);
        }
        break;
      case 'number':
        {
          const timestamps = vals?.map((item) => item!?.valueOf());
          onChange(timestamps);
        }
        break;
      default:
        onChange(vals, strs);
        break;
    }
  });

  return (
    <DatePicker.RangePicker
      allowEmpty
      picker={picker}
      locale={locale}
      format={format === DateFormat.quarter ? void 0 : format}
      {...restProps}
      value={transform2Dayjs(value, format, picker)}
      onChange={handleRangeDatePickerChange}
      style={{ width: '100%', ...style }}
    />
  );
};
