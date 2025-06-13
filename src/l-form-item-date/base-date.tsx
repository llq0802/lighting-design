import { DatePicker, type DatePickerProps } from 'antd';
import type { MonthPickerProps, WeekPickerProps } from 'antd/es/date-picker';
import locale from 'antd/es/date-picker/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import type { FC } from 'react';
export const BaseDate: FC<DatePickerProps | MonthPickerProps | WeekPickerProps | any> = ({ style, ...restProps }) => {
  // const handleDatePickerChange = useMemoizedFn((val: Dayjs | null, str: string) => {
  //   if (!val) {
  //     onChange(void 0);
  //     return;
  //   }
  //   switch (dateValueType) {
  //     case 'string':
  //       {
  //         onChange(str);
  //       }
  //       break;
  //     case 'dayjs':
  //       {
  //         onChange(val);
  //       }
  //       break;
  //     case 'number':
  //       {
  //         const timestamp = val!?.valueOf();
  //         onChange(timestamp);
  //       }
  //       break;
  //     default:
  //       onChange(val, str);
  //       break;
  //   }
  // });

  return (
    <DatePicker
      // allowEmpty
      // format={format === DateFormat.quarter ? void 0 : format}
      locale={locale}
      {...restProps}
      style={{ width: '100%', ...style }}
    />
  );
};

export const BaseDateRange: FC<RangePickerWrapperProps> = ({ style, ...restProps }) => {
  return <DatePicker.RangePicker allowEmpty locale={locale} {...restProps} style={{ width: '100%', ...style }} />;
};
