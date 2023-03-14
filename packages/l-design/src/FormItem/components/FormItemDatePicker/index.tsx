import { useMemoizedFn } from 'ahooks';
import type { DatePickerProps, TimePickerProps } from 'antd';
import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import type { MonthPickerProps, RangePickerProps, WeekPickerProps } from 'antd/lib/date-picker';
import 'moment/locale/zh-cn';
import type { FC } from 'react';
import { useContext, useMemo } from 'react';
import { LFormContext } from '../../../Form/base/BaseForm';
import type { DateValueType, Picker } from '../../../utils/date';
import {
  createDisabledDate,
  getDateFormat,
  transformDate,
  transformMomentValue,
} from '../../../utils/date';
import type { LFormItemProps } from '../../base/BaseFromItem';
import LFormItem from '../../base/BaseFromItem';

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

type RangePickerWrapperProps = any & RangePickerProps;

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
  pickerProps?: DatePickerProps | MonthPickerProps | WeekPickerProps | any;
  /** 是否是范围日期选择 */
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

  disabled,
  required = false,

  placeholder,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

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

  const handleTransform = useMemoizedFn((...args: any[]) => {
    if (typeof normalize === 'function') {
      // @ts-ignore
      return normalize(...args);
    }
    return transformDate(args[0], currentFormat, dateValueType);
  });

  // const placeholderMessage = usePlaceholder({
  //   placeholder,
  //   restProps,
  // });

  const Comp = useMemo(() => {
    return !rangePicker ? (
      <DatePickerWrapper
        placeholder={placeholder}
        disabled={disabled ?? formDisabled}
        format={currentFormat}
        showTime={showTime}
        picker={currentPicker}
        disabledDate={currentDisabledDate}
        {...pickerProps}
      />
    ) : (
      <RangePickerWrapper
        placeholder={placeholder}
        format={currentFormat}
        showTime={showTime}
        picker={currentPicker}
        disabledDate={currentDisabledDate}
        disabled={disabled ?? formDisabled}
        {...pickerProps}
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
    <LFormItem required={required} isSelectType normalize={handleTransform} {...restProps}>
      {Comp}
    </LFormItem>
  );
};

export default LFormItemDatePicker;
