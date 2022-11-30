import type { TimePickerProps } from 'antd';
import { DatePicker } from 'antd';
import type { RangePickerProps } from 'antd/lib/date-picker';
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

const { RangePicker } = DatePicker;

export type RangePickerWrapperProps = any & RangePickerProps;

const RangePickerWrapper: FC<RangePickerWrapperProps> = ({ style, value, ...restProps }) => {
  return (
    <RangePicker
      {...restProps}
      value={transformMomentValue(value)}
      style={{ width: '100%', ...style }}
    />
  );
};

export interface LFormItemDateRangeProps extends LFormItemProps {
  disabledDateBefore?: number;
  disabledDateAfter?: number;
  showTime?: TimePickerProps | boolean;
  format?: string;
  dateValueType?: DateValueType;
  picker?: Picker;
  pickerProps?: RangePickerProps | Record<string, any>;
}

const LFormItemDateRange: FC<LFormItemDateRangeProps> = ({
  dateValueType = 'moment',
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
      <RangePickerWrapper
        format={currentFormat}
        showTime={showTime}
        picker={currentPicker}
        disabledDate={currentDisabledDate}
        {...pickerProps}
      />
    </LFormItem>
  );
};

export default LFormItemDateRange;
