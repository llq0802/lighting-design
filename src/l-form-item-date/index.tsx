import type { RangePickerProps } from 'antd/lib/date-picker';
import { emptyObject } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import { createDisabledDate, getDateFormat } from 'lighting-design/utils/date';
import type { FC } from 'react';
import { BaseDate, BaseDateRange } from './base-date';
import type { LFormItemDatePickerProps } from './interface';

type RangePickerWrapperProps = any & RangePickerProps;

const LFormItemDatePicker: FC<LFormItemDatePickerProps> = ({
  disabled,
  placeholder,
  size,
  variant,
  picker = 'date',
  showTime,
  format,
  //
  rangePicker = false,
  dateValueType = 'string',
  disabledDateBefore,
  disabledDateAfter,

  pickerProps = emptyObject,
  ...restProps
}) => {
  const baseProps = {
    size,
    variant,
    showTime,
    placeholder,
    disabled,
    format,
    picker,

    dateValueType,

    ...pickerProps,
  };

  const innerFormat = getDateFormat(baseProps.format, baseProps.picker, baseProps.showTime || showTime);
  const innerDisabledDate = createDisabledDate(baseProps.picker, {
    disabledDateBefore,
    disabledDateAfter,
  });

  const dom = !rangePicker ? <BaseDate {...baseProps} /> : <BaseDateRange {...baseProps} />;

  return (
    <LFormItem
      getValueFromEvent={(v) => {
        return v;
      }}
      {...restProps}
    >
      {dom}
    </LFormItem>
  );
};

export default LFormItemDatePicker;
export * from './interface';
