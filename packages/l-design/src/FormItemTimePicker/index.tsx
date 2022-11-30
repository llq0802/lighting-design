import type { TimePickerProps } from 'antd';
import { TimePicker } from 'antd';
import type { Moment } from 'moment';
import type { FC } from 'react';
import { useMemo } from 'react';
import type { LFormItemProps } from '../FormItem/base/BaseFromItem';
import LFormItem from '../FormItem/base/BaseFromItem';
import { timePickerMomentString, timePickerMomentVlaue } from '../utils/date';

const TimePickerWrapper: FC<TimePickerProps | any> = ({
  style,
  value,
  rangePicker,
  format,
  onChange,
  ...restProps
}) => {
  const newValue = useMemo(() => timePickerMomentVlaue(value, format), [format, value]);
  const handleChange = (values: Moment | string, formatString: string | [string, string]) => {
    onChange(formatString, values);
  };
  return !rangePicker ? (
    <TimePicker {...restProps} format={format} value={newValue} onChange={handleChange} />
  ) : (
    <TimePicker.RangePicker
      {...restProps}
      format={format}
      value={newValue}
      onChange={handleChange}
    />
  );
};

export interface LFormItemTimePickerProps extends LFormItemProps {
  showTime?: boolean;
  rangePicker?: boolean;
  format?: 'HH:mm:ss' | string;
  value?: string | string[] | Moment | Moment[];
  timePickerProps?: TimePickerProps;
}

const LFormItemTimePicker: FC<LFormItemTimePickerProps> = ({
  showTime = false,
  rangePicker = false,
  format = 'HH:mm:ss',
  timePickerProps = {},

  required = false,
  ...restProps
}) => {
  useMemo(
    () => (restProps.initialValue = timePickerMomentString(restProps.initialValue, format)),
    [format, restProps],
  );

  return (
    <LFormItem required={required} isSelectType {...restProps}>
      <TimePickerWrapper
        format={format}
        showTime={showTime}
        rangePicker={rangePicker}
        {...timePickerProps}
      />
    </LFormItem>
  );
};

export default LFormItemTimePicker;
