import { useMemoizedFn } from 'ahooks';
import type { DatePickerProps, TimePickerProps } from 'antd';
import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import type {
  MonthPickerProps,
  RangePickerProps,
  WeekPickerProps,
} from 'antd/lib/date-picker';
import type { Dayjs } from 'dayjs';
import 'dayjs/locale/zh-cn';
import { emptyObject } from 'lighting-design/constants';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { DateValueType, Picker } from 'lighting-design/_utils/date';
import {
  createDisabledDate,
  DateFormat,
  getDateFormat,
  transform2Dayjs,
} from 'lighting-design/_utils/date';
import type { FC } from 'react';
import { useContext, useMemo } from 'react';

const { RangePicker } = DatePicker;

type RangePickerWrapperProps = any & RangePickerProps;

/**
 * 日期选择
 * @param param0
 * @returns
 */
const DatePickerWrapper: FC<
  DatePickerProps | MonthPickerProps | WeekPickerProps | any
> = ({
  dateValueType,
  value,
  onChange,
  format,
  picker,
  style,
  ...restProps
}) => {
  const handleDatePickerChange = useMemoizedFn(
    (val: Dayjs | null, str: string) => {
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
    },
  );

  return (
    <DatePicker
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

/**
 * 日期范围选择
 * @param param0
 * @returns
 */
const RangePickerWrapper: FC<RangePickerWrapperProps> = ({
  dateValueType,
  style,
  value,
  onChange,
  format,
  picker,
  ...restProps
}) => {
  const handleRangeDatePickerChange = useMemoizedFn(
    (vals: [Dayjs, Dayjs] | [null, null], strs: [string, string]) => {
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
    },
  );

  return (
    <RangePicker
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

export interface LFormItemDatePickerProps extends LFormItemProps {
  /**
   *禁用今天的前面的日期 为`0`时包括今天
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemDatePickerProps
   */
  disabledDateBefore?: number;
  /**
   *禁用今天的后面的日期 为`0`时包括今天
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemDatePickerProps
   */
  disabledDateAfter?: number;
  /**
   *是否展示时间 (时分秒)
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemDatePickerProps
   */
  showTime?: TimePickerProps | boolean;
  /**
   *日期格式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemDatePickerProps
   */
  format?: string;

  /**
   *表单获取到的时间格式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemDatePickerProps
   */
  dateValueType?: DateValueType;
  /**
   *日期类型
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemDatePickerProps
   */
  picker?: Picker;
  /**
   *antd日期组件的 Props
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.20
   *@memberof LFormItemDatePickerProps
   */
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
  pickerProps = emptyObject,
  placeholder,

  // normalize,
  disabled,
  required = false,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

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

  // const handleTransform = useMemoizedFn(
  //   (value: any, prevValue: any, allValues: Store) => {
  //     if (typeof normalize === 'function') {
  //       return normalize(value, prevValue, allValues);
  //     }
  //     return formatDayjs(value, currentFormat, dateValueType);
  //   },
  // );

  const dom = useMemo(() => {
    return !rangePicker ? (
      <DatePickerWrapper
        dateValueType={dateValueType}
        placeholder={placeholder}
        disabledDate={currentDisabledDate}
        {...pickerProps}
        showTime={showTime}
        format={currentFormat}
        disabled={disabled ?? formDisabled}
        picker={currentPicker}
      />
    ) : (
      <RangePickerWrapper
        dateValueType={dateValueType}
        placeholder={placeholder}
        disabledDate={currentDisabledDate}
        {...pickerProps}
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
      // normalize={handleTransform}
      {...restProps}
    >
      {dom}
    </LFormItem>
  );
};

export default LFormItemDatePicker;
