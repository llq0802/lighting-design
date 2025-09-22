import { TimePicker, type TimePickerProps, type TimeRangePickerProps } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import type { FC } from 'react';
dayjs.locale('zh-cn');

type BaseTimeProps = TimePickerProps &
  TimeRangePickerProps &
  Record<string, any> & {
    placeholder?: any;
  };

const BaseTime: FC<BaseTimeProps> = ({ dateValueType, rangePicker, ...restProps }) => {
  const { placeholder } = restProps;
  const props = {
    locale,
    ...restProps,
    style: { width: '100%', ...restProps?.style },
  };

  if (!placeholder) {
    return !rangePicker ? <TimePicker {...props} /> : <TimePicker.RangePicker allowEmpty {...props} />;
  }

  return !rangePicker ? <TimePicker {...props} /> : <TimePicker.RangePicker allowEmpty {...props} />;
};

export default BaseTime;
