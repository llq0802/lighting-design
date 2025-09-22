import { DatePicker, type DatePickerProps } from 'antd';
import type { MonthPickerProps, RangePickerProps, WeekPickerProps } from 'antd/es/date-picker';
import locale from 'antd/es/date-picker/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import type { FC } from 'react';
dayjs.locale('zh-cn');

export const BaseDate: FC<DatePickerProps | MonthPickerProps | WeekPickerProps | any> = ({ style, ...restProps }) => {
  return <DatePicker locale={locale} {...restProps} style={{ width: '100%', ...style }} />;
};

export const BaseDateRange: FC<RangePickerProps> = ({ style, ...restProps }) => {
  return <DatePicker.RangePicker allowEmpty locale={locale} {...restProps} style={{ width: '100%', ...style }} />;
};
