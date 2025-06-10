import { Input, InputNumber, Space } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import type { LValueType } from 'lighting-design/interface';
import LFormItem from 'lighting-design/l-form-item';
import type { FC } from 'react';
import type { LFormItemNumberRangeProps } from './interface';

const prefixCls = 'lightd-number-range';

function NumberRange({
  value: valuePair,
  onChange,
  separator = '~',
  separatorWidth = 30,
  separatorStyle = emptyObject,
  placeholder,
  disabled,
  leftNumberProps,
  rightNumberProps,
  ...restProps
}: Record<string, any>) {
  const handleOnBlur = () => {
    if (Array.isArray(valuePair)) {
      //   仅在两个值均为数字时才做比较并转换
      const [value0, value1] = valuePair;
      if (typeof value0 === 'number' && typeof value1 === 'number' && value0 > value1) {
        onChange?.([value1, value0]);
      } else if (value0 === void 0 && value1 === void 0) {
        onChange?.(void 0);
      }
    }
  };
  const handleChange = (index: number, changedValue: LValueType | null) => {
    const newValuePair = [...(valuePair || [])];
    newValuePair[index] = changedValue === null ? void 0 : changedValue;
    onChange?.(newValuePair);
  };

  const InputNumberWidth = `calc((100% - ${
    typeof separatorWidth === 'string' ? separatorWidth : `${separatorWidth}px`
  }) / 2)`;

  const dom = (
    <Space.Compact onBlur={handleOnBlur} block className={prefixCls}>
      <InputNumber
        {...restProps}
        id={restProps?.id ? `${restProps?.id}-start` : void 0}
        placeholder={Array.isArray(placeholder) ? placeholder[0] : placeholder}
        {...leftNumberProps}
        value={valuePair?.[0]}
        onChange={(changedValue) => {
          handleChange(0, changedValue);
          leftNumberProps?.onChange?.(changedValue);
        }}
        style={{ width: InputNumberWidth }}
      />
      <Input
        readOnly
        variant={restProps?.variant}
        size={restProps?.size}
        placeholder={separator}
        style={{
          width: separatorWidth,
          textAlign: 'center',
          pointerEvents: 'none',
          backgroundColor: restProps?.disabled ? '#f5f5f5' : void 0,
          ...separatorStyle,
        }}
      />
      <InputNumber
        {...restProps}
        id={restProps?.id ? `${restProps?.id}-end` : void 0}
        placeholder={Array.isArray(placeholder) ? placeholder[1] : placeholder}
        {...rightNumberProps}
        value={valuePair?.[1]}
        onChange={(changedValue) => {
          handleChange(1, changedValue);
          rightNumberProps?.onChange?.(changedValue);
        }}
        style={{ width: InputNumberWidth }}
      />
    </Space.Compact>
  );

  return dom;
}

const LFormItemNumberRange: FC<LFormItemNumberRangeProps> = ({
  disabled,
  size,
  variant,
  placeholder = ['请输入', '请输入'],
  //
  separatorWidth = 30,
  separator,
  separatorStyle = emptyObject,
  leftNumberProps = emptyObject,
  rightNumberProps = emptyObject,
  //
  ...formItemProps
}) => {
  const { required, messageVariables } = formItemProps;

  const rules = [
    {
      async validator(_: any, value: number[] | undefined) {
        let errMsg = '';
        const newValue = Array.isArray(value) ? value.filter((item) => item || item === 0) : [];
        if (newValue?.length !== 2) {
          errMsg = required ? `${messageVariables?.label || '请输入'}!` : '';
        }
        if (errMsg) {
          return Promise.reject(errMsg);
        }
        return Promise.resolve();
      },
    },
  ];

  const baseProps = {
    size,
    disabled,
    variant,
    //
    placeholder,
    separator,
    separatorWidth,
    separatorStyle,
    leftNumberProps,
    rightNumberProps,
  };

  return (
    <LFormItem rules={rules} {...formItemProps}>
      <NumberRange {...baseProps} />
    </LFormItem>
  );
};
export default LFormItemNumberRange;
export * from './interface';
