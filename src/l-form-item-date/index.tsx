import { emptyObject } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import { createDisabledDate, getDateFormat, PickerEnum, transform2Dayjs } from 'lighting-design/utils/date';
import { type FC } from 'react';
import { BaseDate, BaseDateRange } from './base-date';
import type { LFormItemDateProps } from './interface';

const LFormItemDate: FC<LFormItemDateProps> = ({
  disabled,
  placeholder,
  size,
  variant,
  picker,
  showTime,
  format,
  //
  rangePicker = false,
  dateValueType = 'string',
  disabledDateBefore,
  disabledDateAfter,
  datePickerProps = emptyObject,
  ...restProps
}) => {
  const dateProps = {
    size,
    variant,
    showTime,
    placeholder,
    disabled,
    format,
    picker,
    //
    ...datePickerProps,
  };

  const innerFormat = getDateFormat(dateProps.format as string, dateProps.picker as PickerEnum, dateProps.showTime);

  const innerDisabledDate = createDisabledDate((dateProps as any)?.disabledDate, dateProps.picker as PickerEnum, {
    disabledDateBefore,
    disabledDateAfter,
  });

  const baseProps = {
    ...dateProps,
    format: innerFormat,
    disabledDate: innerDisabledDate,
  };
  //@ts-ignore
  const dom = !rangePicker ? <BaseDate {...baseProps} /> : <BaseDateRange {...baseProps} />;

  return (
    <LFormItem
      getValueFromEvent={(v1, v2) => {
        if (dateValueType === 'string') {
          return v2;
        }
        if (dateValueType === 'timestamp') {
          return v1.valueOf();
        }
        return v1;
      }}
      // normalize={(v1, v2) => {}}
      getValueProps={(value) => {
        //为子元素添加额外的属性, 每次初始化或者重新渲染都有效
        return {
          value: transform2Dayjs(value, innerFormat, baseProps.picker as PickerEnum),
        };
      }}
      {...restProps}
    >
      {dom}
    </LFormItem>
  );
};

export default LFormItemDate;
export * from './interface';
