import type { DatePickerProps, TimePickerProps } from 'antd';
import { DatePicker } from 'antd';
import type { MonthPickerProps, WeekPickerProps } from 'antd/lib/date-picker';
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
  ...restProps
}) => {
  return (
    <DatePicker
      locale={locale}
      {...restProps}
      value={transformMomentValue(value)}
      style={{ width: '100%', ...style }}
    />
  );
};

export interface LFormItemDateProps extends LFormItemProps {
  disabledDateBefore?: number;
  disabledDateAfter?: number;
  showTime?: TimePickerProps | boolean;
  format?: string;
  dateValueType?: DateValueType;
  picker?: Picker;
  pickerProps?: DatePickerProps | MonthPickerProps | WeekPickerProps | any;
}

const LFormItemDate: FC<LFormItemDateProps> = ({
  dateValueType = 'string',
  normalize,
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

  return (
    <LFormItem required={required} isSelectType normalize={handleTransform} {...restProps}>
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
