import { useMemoizedFn } from 'ahooks';
import type { TimePickerProps, TimeRangePickerProps } from 'antd';
import { TimePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import { TIME_LIST } from 'lighting-design/constants';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { DateValueType } from 'lighting-design/_utils/date';
import { transform2Dayjs } from 'lighting-design/_utils/date';
import type { Dayjs } from 'lighting-design/_utils/day';
import type { FC } from 'react';
import { useContext, useMemo } from 'react';

/**
 * @param hour 当前小时 0-23
 * @param disabledHourBefore 禁用当前时间之前的小时 (0会包括当前小时)
 * @param disabledHourAfter 禁用当前时间之后的小时 (0会包括当前小时)
 * @returns
 */
export function customDisabledHours(
  hour: number,
  disabledHourBefore?: number,
  disabledHourAfter?: number,
) {
  const hasBefore = typeof disabledHourBefore === 'number';
  const hasAfter = typeof disabledHourAfter === 'number';
  if (!hasBefore && !hasAfter) {
    return [];
  }

  if (hasBefore && hasAfter) {
    const ret = TIME_LIST.slice(
      hour - disabledHourBefore + 1,
      hour + disabledHourAfter,
    );
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
  const handleChange = useMemoizedFn(
    (
      value: Dayjs | [Dayjs, Dayjs] | undefined,
      formatString: [string, string],
    ) => {
      if (dateValueType === 'string') {
        onChange(formatString, value);
      } else if (dateValueType === 'dayjs') {
        onChange(value, formatString);
      }
    },
  );

  return !rangePicker ? (
    <TimePicker
      placeholder={placeholder}
      format={format}
      style={{ width: '100%', ...style }}
      locale={locale}
      {...restProps}
      value={transform2Dayjs(value || void 0, format)}
      onChange={handleChange}
    />
  ) : (
    <TimePicker.RangePicker
      format={format}
      style={{ width: '100%', ...style }}
      locale={locale}
      {...restProps}
      value={transform2Dayjs(value || void 0, format)}
      onChange={handleChange}
    />
  );
};

export interface LFormItemTimePickerProps extends LFormItemProps {
  rangePicker?: boolean;
  dateValueType?: Omit<DateValueType, 'number'>;

  disabledHourBefore?: number;
  disabledHourAfter?: number;

  disabledMinutes?: (selectedHour: number, type?: 'start' | 'end') => number[];
  disabledSeconds?: (
    selectedHour: number,
    selectedMinute: number,
    type?: 'start' | 'end',
  ) => number[];

  format?: 'HH:mm:ss' | string;
  timePickerProps?: TimePickerProps | TimeRangePickerProps;
}

const LFormItemTimePicker: FC<LFormItemTimePickerProps> = ({
  rangePicker = false,
  required = false,

  dateValueType = 'string',
  format = 'HH:mm:ss',
  timePickerProps = {},
  placeholder,
  disabledHourBefore,
  disabledHourAfter,
  disabledMinutes = () => [],
  disabledSeconds = () => [],

  disabled,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });

  const currentDisabledTime = (now: Dayjs, type: 'start' | 'end') => {
    return {
      disabledHours: () =>
        customDisabledHours(now.hour(), disabledHourBefore, disabledHourAfter),
      disabledMinutes: (selectedHour: number) =>
        disabledMinutes(selectedHour, type),
      disabledSeconds: (selectedHour: number, selectedMinute: number) =>
        disabledSeconds(selectedHour, selectedMinute, type),

      ...timePickerProps?.disabledTime?.(now, type),
    };
  };

  const showNow = useMemo(
    () =>
      !(
        typeof disabledHourBefore === 'number' ||
        typeof disabledHourAfter === 'number'
      ),
    [disabledHourBefore, disabledHourAfter],
  );

  const dom = (
    <TimePickerWrapper
      placeholder={messageLabel}
      disabledHourBefore={disabledHourBefore}
      disabledHourAfter={disabledHourAfter}
      disabledTime={currentDisabledTime}
      dateValueType={dateValueType}
      rangePicker={rangePicker}
      disabled={disabled ?? formDisabled}
      format={format}
      showNow={showNow}
      {...timePickerProps}
    />
  );

  const rules = [
    {
      validator(rule, value) {
        let errMsg = '';
        if (
          !value ||
          (Array.isArray(value) && !value?.filter(Boolean)?.length)
        ) {
          errMsg = required ? `${messageLabel}!` : '';
        }
        if (errMsg) {
          return Promise.reject(errMsg);
        }
        return Promise.resolve();
      },
    },
  ];

  return (
    <LFormItem required={required} _isSelectType rules={rules} {...restProps}>
      {dom}
    </LFormItem>
  );
};

export default LFormItemTimePicker;
