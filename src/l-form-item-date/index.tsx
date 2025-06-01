import { useMemoizedFn } from 'ahooks';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import type { MonthPickerProps, RangePickerProps, WeekPickerProps } from 'antd/lib/date-picker';
import type { Dayjs } from 'dayjs';
import 'dayjs/locale/zh-cn';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { emptyObject } from 'lighting-design/constants';
import { DateFormat, createDisabledDate, getDateFormat, transform2Dayjs } from 'lighting-design/utils/date';
import type { FC } from 'react';
import { useContext, useMemo } from 'react';
import type { LFormItemDatePickerProps } from './interface';

const { RangePicker } = DatePicker;

type RangePickerWrapperProps = any & RangePickerProps;

const DatePickerWrapper: FC<DatePickerProps | MonthPickerProps | WeekPickerProps | any> = ({
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

const RangePickerWrapper: FC<RangePickerWrapperProps> = ({
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
    <RangePicker
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

const LFormItemDatePicker: FC<LFormItemDatePickerProps> = ({
  disabled = false,
  placeholder,
  size,
  variant,
  rangePicker = false,
  dateValueType = 'string',
  disabledDateBefore,
  disabledDateAfter,
  picker = 'date',
  showTime = false,
  format,
  pickerProps = emptyObject,

  // normalize,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  const currentPicker = useMemo(() => pickerProps.picker || picker, [pickerProps.picker, picker]);
  const currentFormat = useMemo(
    () => getDateFormat(pickerProps.format || format, currentPicker, pickerProps.showTime || showTime),
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

  // const handleTransform = useMemoizedFn(
  //   (value: any, prevValue: any, allValues: Store) => {
  //     if (typeof normalize === 'function') {
  //       return normalize(value, prevValue, allValues);
  //     }
  //     return formatDayjs(value, currentFormat, dateValueType);
  //   },
  // );

  const publicProps = {
    size,
    variant,
    dateValueType,
    showTime,
    placeholder,
    disabledDate: currentDisabledDate,
    format: currentFormat,
    picker: currentPicker,
    disabled: disabled || formDisabled,
    ...pickerProps,
  };
  const dom = !rangePicker ? <DatePickerWrapper {...publicProps} /> : <RangePickerWrapper {...publicProps} />;

  return (
    <LFormItem
      _isSelectType
      // normalize={handleTransform}
      {...restProps}
    >
      {dom}
    </LFormItem>
  );
};

export default LFormItemDatePicker;
export * from './interface';
