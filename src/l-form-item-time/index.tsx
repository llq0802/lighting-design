import { useMemoizedFn } from 'ahooks';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { emptyObject } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import { customDisabledHours, transform2Dayjs } from 'lighting-design/utils';
import type { FC } from 'react';
import BaseTime from './base-time';
import type { LFormItemTimeProps } from './interface';

const LFormItemTime: FC<LFormItemTimeProps> = ({
  size,
  disabled,
  placeholder,
  variant,
  format = 'HH:mm:ss',
  hideDisabledOptions,
  use12Hours,
  //
  rangePicker = false,
  timeValueType = 'string',
  //
  disabledHourBefore,
  disabledHourAfter,
  disabledMinutes = () => [],
  disabledSeconds = () => [],
  timePickerProps = emptyObject,

  ...formItemProps
}) => {
  const innerDisabledTime = useMemoizedFn((now: Dayjs, type: 'start' | 'end') => {
    return {
      disabledHours: () => customDisabledHours(dayjs().hour(), disabledHourBefore, disabledHourAfter),
      disabledMinutes: (selectedHour: number) => disabledMinutes(selectedHour, type),
      disabledSeconds: (selectedHour: number, selectedMinute: number) =>
        disabledSeconds(selectedHour, selectedMinute, type),
      ...timePickerProps?.disabledTime?.(now, type),
    };
  });

  const showNow = typeof disabledHourBefore !== 'number' && typeof disabledHourAfter !== 'number';

  const baseProps = {
    size,
    disabled,
    placeholder,
    showNow,
    format,
    hideDisabledOptions,
    use12Hours,

    rangePicker,

    ...timePickerProps,
    disabledTime: innerDisabledTime,
  };

  return (
    <LFormItem
      getValueFromEvent={(dayVal, strVal) => {
        // 设置如何将 event 的值转换成字段值, 只在用户操作有效
        if (timeValueType === 'dayjs') {
          return dayVal;
        }
        return strVal;
      }}
      // normalize={(v, pv, s) => {
      //   // 组件获取值后进行转换，再放入 Form 中。不支持异步, 只在用户操作有效
      //   console.log('===normalize-2===>', v);
      //   return v;
      // }}
      getValueProps={(value) => {
        //为子元素添加额外的属性, 每次初始化或者重新渲染都有效
        return { value: transform2Dayjs(value, format) };
      }}
      {...formItemProps}
    >
      {/* @ts-ignore */}
      <BaseTime {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemTime;
export * from './interface';
