import { useMemoizedFn } from 'ahooks';
import type { TimePickerProps } from 'antd';
import { TimePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { TIME_LIST, emptyObject } from 'lighting-design/constants';
import { transform2Dayjs } from 'lighting-design/utils/date';
import type { Dayjs } from 'lighting-design/utils/day';
import type { FC } from 'react';
import { useContext, useMemo } from 'react';
import type { LFormItemTimePickerProps } from './interface';

/**
 * @param hour 当前小时 0-23
 * @param disabledHourBefore 禁用当前时间之前的小时 (0会包括当前小时)
 * @param disabledHourAfter 禁用当前时间之后的小时 (0会包括当前小时)
 * @returns
 */
export function customDisabledHours(hour: number, disabledHourBefore?: number, disabledHourAfter?: number) {
  const hasBefore = typeof disabledHourBefore === 'number';
  const hasAfter = typeof disabledHourAfter === 'number';
  if (!hasBefore && !hasAfter) {
    return [];
  }

  if (hasBefore && hasAfter) {
    const ret = TIME_LIST.slice(hour - disabledHourBefore + 1, hour + disabledHourAfter);
    return TIME_LIST.filter((item) => !ret.includes(item));
  } else if (hasBefore) {
    const ret = TIME_LIST.slice(0, hour - disabledHourBefore + 1);
    return ret;
  } else if (hasAfter) {
    const ret = TIME_LIST.slice(hour + disabledHourAfter);
    return ret;
  }
  return [];
}

const TimePickerWrapper: FC<TimePickerProps | any> = ({
  dateValueType,
  style,
  value,
  rangePicker,
  format,
  placeholder,
  onChange,
  ...restProps
}) => {
  const handleChange = useMemoizedFn((value: Dayjs | [Dayjs, Dayjs] | undefined, formatString: [string, string]) => {
    if (dateValueType === 'string') {
      onChange?.(formatString, value);
    } else if (dateValueType === 'dayjs') {
      onChange?.(value, formatString);
    }
  });

  const props = {
    format,
    locale,
    style: { width: '100%', ...style },
    value: transform2Dayjs(value, format),
    onChange: handleChange,
    ...restProps,
  };

  if (!placeholder) {
    return !rangePicker ? (
      <TimePicker {...props} />
    ) : (
      // `disabled` should not set with empty `value`. You should set `allowEmpty` or `value` instead.
      <TimePicker.RangePicker allowEmpty {...props} />
    );
  }

  return !rangePicker ? (
    <TimePicker placeholder={placeholder} {...props} />
  ) : (
    // `disabled` should not set with empty `value`. You should set `allowEmpty` or `value` instead.
    <TimePicker.RangePicker allowEmpty placeholder={placeholder} {...props} />
  );
};

const LFormItemTimePicker: FC<LFormItemTimePickerProps> = ({
  rangePicker = false,

  dateValueType = 'string',
  format = 'HH:mm:ss',
  timePickerProps = emptyObject,
  size,
  placeholder,
  disabledHourBefore,
  disabledHourAfter,
  disabledMinutes = () => [],
  disabledSeconds = () => [],

  disabled = false,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  const currentDisabledTime = useMemoizedFn((now: Dayjs, type: 'start' | 'end') => {
    return {
      disabledHours: () => customDisabledHours(now.hour(), disabledHourBefore, disabledHourAfter),
      disabledMinutes: (selectedHour: number) => disabledMinutes(selectedHour, type),
      disabledSeconds: (selectedHour: number, selectedMinute: number) =>
        disabledSeconds(selectedHour, selectedMinute, type),

      ...timePickerProps?.disabledTime?.(now, type),
    };
  });

  const showNow = useMemo(
    () => !(typeof disabledHourBefore === 'number' || typeof disabledHourAfter === 'number'),
    [disabledHourBefore, disabledHourAfter],
  );
  return (
    <LFormItem _isSelectType {...restProps}>
      <TimePickerWrapper
        size={size}
        dateValueType={dateValueType}
        rangePicker={rangePicker}
        placeholder={placeholder}
        disabledTime={currentDisabledTime}
        disabled={disabled || formDisabled}
        format={format}
        showNow={showNow}
        {...timePickerProps}
      />
    </LFormItem>
  );
};

export default LFormItemTimePicker;
export * from './interface';
