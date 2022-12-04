import type { DatePickerProps, TimePickerProps } from 'antd';
import { DatePicker } from 'antd';
import type { MonthPickerProps, RangePickerProps, WeekPickerProps } from 'antd/lib/date-picker';
import type { FC } from 'react';
import { useCallback, useMemo } from 'react';
import type { LFormItemProps } from '../FormItem/base/BaseFromItem';
import LFormItem from '../FormItem/base/BaseFromItem';
import type { DateValueType, Picker } from '../utils/date';
import {
  createDisabledDate,
  getDateFormat,
  transformDate,
  transformMomentValue,
} from '../utils/date';

import locale from 'antd/es/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';

const DatePickerWrapper: FC<DatePickerProps | MonthPickerProps | WeekPickerProps | any> = ({
  style,
  value,
  format,
  ...restProps
}) => {
  return (
    <DatePicker
      locale={locale}
      format={format}
      {...restProps}
      value={transformMomentValue(value, format)}
      style={{ width: '100%', ...style }}
    />
  );
};

const { RangePicker } = DatePicker;

export type RangePickerWrapperProps = any & RangePickerProps;

const RangePickerWrapper: FC<RangePickerWrapperProps> = ({
  style,
  value,
  format,
  ...restProps
}) => {
  return (
    <RangePicker
      locale={locale}
      format={format}
      {...restProps}
      value={transformMomentValue(value, format)}
      style={{ width: '100%', ...style }}
    />
  );
};

export interface LFormItemDatePickerProps extends LFormItemProps {
  disabledDateBefore?: number;
  disabledDateAfter?: number;
  showTime?: TimePickerProps | boolean;
  format?: string;
  dateValueType?: DateValueType;
  picker?: Picker;
  pickerProps?: DatePickerProps | MonthPickerProps | WeekPickerProps | any;
  rangePicker?: boolean;
}

const LFormItemDatePicker: FC<LFormItemDatePickerProps> = ({
  dateValueType = 'string',
  normalize,
  disabledDateBefore,
  disabledDateAfter,
  showTime = false,
  rangePicker = false,
  format,
  picker = 'date',

  pickerProps = {},

  disabled = false,
  required = false,
  ...restProps
}) => {
  const currentPicker = useMemo(() => pickerProps.picker || picker, [pickerProps.picker, picker]);
  const currentFormat = useMemo(
    () =>
      getDateFormat(pickerProps.format || format, currentPicker, pickerProps.showTime || showTime),
    [format, pickerProps.format, currentPicker, pickerProps.showTime, showTime],
  );

  const currentDisabledDate = useMemo(
    () =>
      createDisabledDate(currentPicker, {
        disabledDateBefore,
        disabledDateAfter,
      }),
    [currentPicker, disabledDateBefore, disabledDateAfter],
  );

  const handleTransform = useCallback(
    (...args: any[]) => {
      if (typeof normalize === 'function') {
        // @ts-ignore
        return normalize(...args);
      }
      return transformDate(args[0], currentFormat, dateValueType);
    },
    [currentFormat, normalize, dateValueType],
  );

  const Comp = useMemo(() => {
    return !rangePicker ? (
      <DatePickerWrapper
        disabled={disabled}
        format={currentFormat}
        showTime={showTime}
        picker={currentPicker}
        disabledDate={currentDisabledDate}
        {...pickerProps}
      />
    ) : (
      <RangePickerWrapper
        format={currentFormat}
        showTime={showTime}
        picker={currentPicker}
        disabledDate={currentDisabledDate}
        disabled={disabled}
        {...pickerProps}
      />
    );
  }, [
    currentDisabledDate,
    currentFormat,
    currentPicker,
    disabled,
    pickerProps,
    rangePicker,
    showTime,
  ]);

  return (
    <LFormItem required={required} isSelectType normalize={handleTransform} {...restProps}>
      {Comp}
    </LFormItem>
  );
};

export default LFormItemDatePicker;
