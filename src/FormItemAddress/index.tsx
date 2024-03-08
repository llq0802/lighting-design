import { Cascader, Input, InputNumber, Select, Space } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem';
import { getFormItemLabel, isLegalValue } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import type { LFormItemAddressProps } from './interface';

const AddressWrapper: FC<Record<string, any>> = ({
  size,
  disabled,
  variant,
  block,
  leftWidth = '50%',
  placeholder,
  rightProps,
  leftProps,
  options,
  value = [],
  onChange,
  id,
  ...restProps
}) => {
  const { isSelect = false, ...restLeftProps } = leftProps;
  const { isInputNumber = false, ...restRightProps } = rightProps;

  const LeftComPonent = isSelect ? Select : Cascader;
  const RightComPonent = isInputNumber ? InputNumber : Input;

  const pubilcProps = {
    disabled,
    size,
    variant,
  };

  const allowClearProps = isInputNumber ? {} : { allowClear: true };

  const hanleChange = (index: number, val: any) => {
    const innerValue = [...value];
    innerValue[index] = val;
    onChange?.(innerValue);
  };

  return (
    <Space.Compact block={block}>
      {/* @ts-ignore */}
      <LeftComPonent
        {...restProps}
        {...pubilcProps}
        id={id ? `${id}-start` : void 0}
        placeholder={`${placeholder[0]}`}
        autoComplete="off"
        allowClear
        options={options}
        {...restLeftProps}
        style={{ width: leftWidth, ...restLeftProps?.style }}
        onChange={(val) => {
          hanleChange(0, val);
          restLeftProps?.onChange?.(val);
        }}
      />

      <RightComPonent
        {...restProps}
        {...pubilcProps}
        id={id ? `${id}-end` : void 0}
        placeholder={`${placeholder[1]}`}
        autoComplete="off"
        {...allowClearProps}
        {...restRightProps}
        style={{ flex: 1, ...restRightProps?.style }}
        onChange={(e) => {
          const val = isInputNumber ? e : e?.target?.value;
          hanleChange(1, val);
          restRightProps?.onChange?.(val);
        }}
      />
    </Space.Compact>
  );
};

const LFormItemAddress: FC<LFormItemAddressProps> = ({
  placeholder = ['请选择', '请输入'],
  size,
  disabled = false,
  required = false,
  block = true,
  leftWidth = '50%',
  variant,
  options = emptyArray,
  leftProps = emptyObject,
  rightProps = emptyObject,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  const rules = [
    {
      validator(rule, value: any) {
        let errMsg = '';
        if (!value || value?.length <= 0) {
          errMsg = required ? `${getFormItemLabel(restProps)}不能为空!` : '';
        } else if (!isLegalValue(value[0])) {
          errMsg = required ? `${placeholder[0]}` : '';
        } else if (!isLegalValue(value[1])) {
          errMsg = required ? `${placeholder[1]}` : '';
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
      <AddressWrapper
        disabled={disabled || formDisabled}
        size={size}
        variant={variant}
        block={block}
        leftWidth={leftWidth}
        placeholder={placeholder}
        rightProps={rightProps}
        leftProps={leftProps}
        options={options}
      />
    </LFormItem>
  );
};

export default LFormItemAddress;
export * from './interface';
