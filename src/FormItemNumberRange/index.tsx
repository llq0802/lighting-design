import type { InputNumberProps } from 'antd';
import { Input, InputNumber, Space } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem';
import LFormItem from 'lighting-design/FormItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { FC } from 'react';
import { useContext } from 'react';

const prefixCls = 'lightd-number-range';

function NumberRange({
  value: valuePair,
  onChange,
  separator = '~',
  separatorWidth = 30,
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
      if (
        typeof value0 === 'number' &&
        typeof value1 === 'number' &&
        value0 > value1
      ) {
        onChange([value1, value0]);
      } else if (value0 === void 0 && value1 === void 0) {
        onChange(void 0);
      }
    }
  };
  const handleChange = (index: number, changedValue: ValueType | null) => {
    const newValuePair = [...(valuePair || [])];
    newValuePair[index] = changedValue === null ? void 0 : changedValue;
    onChange(newValuePair);
  };

  const dom = (
    <Space.Compact onBlur={handleOnBlur} block className={prefixCls}>
      <InputNumber
        {...restProps}
        id={restProps?.id ? `${restProps?.id}-0` : void 0}
        disabled={disabled}
        placeholder={Array.isArray(placeholder) ? placeholder[0] : placeholder}
        {...leftNumberProps}
        value={valuePair?.[0]}
        onChange={(changedValue) => {
          handleChange(0, changedValue);
          leftNumberProps?.onChange?.(changedValue);
        }}
        style={{ width: `calc((100% - ${separatorWidth}px) / 2)` }}
      />
      <Input
        disabled
        placeholder={separator}
        style={{
          width: separatorWidth,
          textAlign: 'center',
          pointerEvents: 'none',
          backgroundColor: disabled ? '#f5f5f5' : '#fff',
        }}
      />
      <InputNumber
        {...restProps}
        id={restProps?.id ? `${restProps?.id}-1` : void 0}
        disabled={disabled}
        placeholder={Array.isArray(placeholder) ? placeholder[1] : placeholder}
        {...rightNumberProps}
        value={valuePair?.[1]}
        onChange={(changedValue) => {
          handleChange(1, changedValue);
          rightNumberProps?.onChange?.(changedValue);
        }}
        style={{ width: `calc((100% - ${separatorWidth}px) / 2)` }}
      />
    </Space.Compact>
  );

  return dom;
}

export type LFormItemNumberRangeProps = {
  /**
   * 中间连接符号
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.8
   *@memberof LFormItemNumberRangeProps
   */
  separator?: string;
  /**
   * 中间连接符号的宽度
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.8
   *@memberof LFormItemNumberRangeProps
   */

  separatorWidth?: number;

  /**
   * 左边 InputNumber 的属性
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.8
   *@memberof LFormItemNumberRangeProps
   *@see https://ant.design/components/input-number-cn/#api
   */
  leftNumberProps?: InputNumberProps;

  /**
   * 右边 InputNumber 的属性
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.8
   *@memberof LFormItemNumberRangeProps
   *@see https://ant.design/components/input-number-cn/#api
   */
  rightNumberProps?: InputNumberProps;
} & LFormItemProps;

const LFormItemNumberRange: FC<LFormItemNumberRangeProps> = ({
  required,
  placeholder,
  separatorWidth = 30,
  separator,
  disabled,
  leftNumberProps = {},
  rightNumberProps = {},
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
  });

  const rules = [
    {
      validator(_, value: number[] | undefined) {
        let errMsg = '';
        const newValue = Array.isArray(value)
          ? value.filter((item) => item || item === 0)
          : [];
        if (newValue?.length !== 2) {
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
    <LFormItem required={required} rules={rules} {...restProps}>
      <NumberRange
        disabled={disabled ?? formDisabled}
        separator={separator}
        separatorWidth={separatorWidth}
        placeholder={messageLabel}
        leftNumberProps={leftNumberProps}
        rightNumberProps={rightNumberProps}
      />
    </LFormItem>
  );
};
export default LFormItemNumberRange;
