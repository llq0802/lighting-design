import { Cascader, Input, Space } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem';
import { getFormItemLabel } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import type { LFormItemAddressProps } from './interface';

const AddressWrapper: FC<any> = ({
  size,
  disabled,
  variant,
  block,
  placeholder,
  inputProps,
  cascaderProps,
  options,
  value = [],
  onChange,
  id,
  ...restProps
}) => {
  const pubilcProps = {
    disabled,
    size,
    variant,
  };

  const hanleChange = (index: number, val: any) => {
    const innerValue = [...value];
    innerValue[index] = val;
    onChange(innerValue);
  };

  return (
    <Space.Compact block={block}>
      <Cascader
        {...restProps}
        id={id ? `${id}-start` : void 0}
        {...pubilcProps}
        options={options}
        placeholder={`${placeholder[0]}`}
        {...cascaderProps}
        style={{ width: '40%', ...cascaderProps?.style }}
        onChange={(val) => {
          hanleChange(0, val);
          cascaderProps?.onChange?.(val);
        }}
      />
      <Input
        {...restProps}
        id={id ? `${id}-end` : void 0}
        {...pubilcProps}
        placeholder={`${placeholder[1]}`}
        allowClear
        autoComplete="off"
        {...inputProps}
        style={{ flex: 1, ...inputProps?.style }}
        onChange={(e) => {
          hanleChange(1, e.target.value);
          inputProps?.onChange?.(e);
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
  variant,
  options = emptyArray,
  cascaderProps = emptyObject,
  inputProps = emptyObject,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  const rules = [
    {
      validator(rule, value: any) {
        let errMsg = '';
        if (!value || value?.length <= 0) {
          errMsg = required ? `${getFormItemLabel(restProps)}不能为空!` : '';
        } else if (!value[0]) {
          errMsg = required ? `${placeholder[0]}` : '';
        } else if (!value[1]) {
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
        placeholder={placeholder}
        inputProps={inputProps}
        cascaderProps={cascaderProps}
        options={options}
      />
    </LFormItem>
  );
};

export default LFormItemAddress;
export * from './interface';
