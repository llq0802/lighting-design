import type { TimePickerProps } from 'antd';
import { TimePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import type { Moment } from 'moment';
import 'moment/locale/zh-cn';
import type { FC } from 'react';
import { useMemo } from 'react';
import { usePlaceholder } from '../../../utils';
import { timePickerMomentString, timePickerMomentVlaue } from '../../../utils/date';
import type { LFormItemProps } from '../../base/BaseFromItem';
import LFormItem from '../../base/BaseFromItem';

const TimePickerWrapper: FC<TimePickerProps | any> = ({
  style,
  value,
  rangePicker,
  format,
  onChange,
  disabled,
  ...restProps
}) => {
  const newValue = useMemo(() => timePickerMomentVlaue(value, format), [format, value]);
  const handleChange = (values: Moment | string, formatString: string | [string, string]) => {
    onChange(formatString, values);
  };
  return !rangePicker ? (
    <TimePicker
      // style={{ width: 169, ...style }}
      style={{ width: '100%', ...style }}
      locale={locale}
      disabled={disabled}
      {...restProps}
      format={format}
      value={newValue}
      onChange={handleChange}
    />
  ) : (
    <TimePicker.RangePicker
      style={{ width: '100%', ...style }}
      locale={locale}
      disabled={disabled}
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
  placeholder,
  required = false,
  disabled = false,
  ...restProps
}) => {
  useMemo(
    () => (restProps.initialValue = timePickerMomentString(restProps.initialValue, format)),
    [format, restProps],
  );

  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
  });

  return (
    <LFormItem
      required={required}
      isSelectType
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!value || (Array.isArray(value) && !value?.filter(Boolean)?.length)) {
              errMsg = required ? `${messageLabel}!` : '';
            }
            if (errMsg) {
              return Promise.reject(errMsg);
            }
            return Promise.resolve();
          },
        },
      ]}
      {...restProps}
    >
      <TimePickerWrapper
        disabled={disabled}
        format={format}
        showTime={showTime}
        rangePicker={rangePicker}
        {...timePickerProps}
      />
    </LFormItem>
  );
};

export default LFormItemTimePicker;
