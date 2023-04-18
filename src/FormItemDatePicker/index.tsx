import { useMemoizedFn } from 'ahooks';
import type { DatePickerProps, TimePickerProps } from 'antd';
import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import type { Store } from 'antd/es/form/interface';
import 'dayjs/locale/zh-cn';

import type {
  MonthPickerProps,
  RangePickerProps,
  WeekPickerProps,
} from 'antd/lib/date-picker';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { DateValueType, Picker } from 'lighting-design/_utils/date';
import {
  createDisabledDate,
  DateFormat,
  formatDayjs,
  getDateFormat,
  transform2Dayjs,
} from 'lighting-design/_utils/date';
import type { FC } from 'react';
import { useContext, useMemo } from 'react';

const { RangePicker } = DatePicker;

type RangePickerWrapperProps = any & RangePickerProps;

const DatePickerWrapper: FC<
  DatePickerProps | MonthPickerProps | WeekPickerProps | any
> = ({ style, value, format, picker, ...restProps }) => {
  return (
    <DatePicker
      picker={picker}
      locale={locale}
      format={format === DateFormat.quarter ? void 0 : format}
      {...restProps}
      value={transform2Dayjs(value, format, picker)}
      style={{ width: '100%', ...style }}
    />
  );
};

const RangePickerWrapper: FC<RangePickerWrapperProps> = ({
  style,
  value,
  format,
  picker,
  ...restProps
}) => {
  return (
    <RangePicker
      picker={picker}
      locale={locale}
      format={format === DateFormat.quarter ? void 0 : format}
      {...restProps}
      value={transform2Dayjs(value, format, picker)}
      style={{ width: '100%', ...style }}
    />
  );
};

export interface LFormItemDatePickerProps extends LFormItemProps {
  /** 禁用今天的前面的日期 为`0`时包括今天*/
  disabledDateBefore?: number;
  /** 禁用今天的后面的日期 为`0`时包括今天*/
  disabledDateAfter?: number;
  /** 是否展示时间 */
  showTime?: TimePickerProps | boolean;
  /** 日期格式 */
  format?: string;
  /** 表单获取到的时间格式 */
  dateValueType?: DateValueType;
  /** 日期类型 */
  picker?: Picker;

  pickerProps?:
    | DatePickerProps
    | MonthPickerProps
    | WeekPickerProps
    | RangePickerProps
    | any;

  /** 是否是范围日期选择 */
  rangePicker?: boolean;
}

const LFormItemDatePicker: FC<LFormItemDatePickerProps> = ({
  dateValueType = 'string',
  disabledDateBefore,
  disabledDateAfter,
  rangePicker = false,

  picker = 'date',
  showTime = false,
  format,
  placeholder,
  pickerProps = {},

  normalize,
  disabled,
  required = false,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  const placeholderMessage = usePlaceholder({
    isSelectType: true,
    placeholder,
    restProps,
  });

  const currentPicker = useMemo(
    () => pickerProps.picker || picker,
    [pickerProps.picker, picker],
  );
  const currentFormat = useMemo(
    () =>
      getDateFormat(
        pickerProps.format || format,
        currentPicker,
        pickerProps.showTime || showTime,
      ),
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

  const handleTransform = useMemoizedFn(
    (value: any, prevValue: any, allValues: Store) => {
      if (typeof normalize === 'function') {
        return normalize(value, prevValue, allValues);
      }
      return formatDayjs(value, currentFormat, dateValueType);
    },
  );

  const dom = useMemo(() => {
    return !rangePicker ? (
      <DatePickerWrapper
        disabledDate={currentDisabledDate}
        {...pickerProps}
        showTime={showTime}
        format={currentFormat}
        placeholder={placeholderMessage}
        disabled={disabled ?? formDisabled}
        picker={currentPicker}
      />
    ) : (
      <RangePickerWrapper
        disabledDate={currentDisabledDate}
        {...pickerProps}
        placeholder={placeholder}
        format={currentFormat}
        showTime={showTime}
        picker={currentPicker}
        disabled={disabled ?? formDisabled}
      />
    );
  }, [
    currentDisabledDate,
    currentFormat,
    currentPicker,
    disabled,
    formDisabled,
    pickerProps,
    placeholder,
    rangePicker,
    showTime,
  ]);

  return (
    <LFormItem
      _isSelectType
      required={required}
      normalize={handleTransform}
      {...restProps}
    >
      {dom}
    </LFormItem>
  );
};

export default LFormItemDatePicker;
