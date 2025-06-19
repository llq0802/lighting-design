import { Space } from 'antd';
import LFormItem from 'lighting-design/l-form-item';
import { cloneElement, type FC } from 'react';
import type { LFormItemCompositionProps } from './interface';

const BaseComposition: FC<Record<string, any>> = ({
  size,
  disabled,
  variant,
  leftComponent,
  rightComponent,
  transformLeftOnChangeParams,
  transformRightOnChangeParams,
  //
  value = [],
  onChange,
  id,
}) => {
  const pubilcProps = {
    disabled,
    size,
    variant,
  };

  const hanleChange = (index: number, val: any) => {
    const innerValue = [...value];
    innerValue[index] = val;
    onChange?.(innerValue);
  };

  const leftDom = cloneElement(leftComponent, {
    ...pubilcProps,
    id: `${id}-left`,
    value: value[0],
    onChange: (val: any, ...args: any) => {
      const v = transformLeftOnChangeParams ? transformLeftOnChangeParams(val, ...args) : val;
      hanleChange(0, v);
      leftComponent?.props?.onChange?.(val, ...args);
    },
  });

  const rightDom = cloneElement(rightComponent, {
    ...pubilcProps,
    id: `${id}-right`,
    value: value[1],
    onChange: (val: any, ...args: any[]) => {
      const v = transformRightOnChangeParams ? transformRightOnChangeParams(val) : val;
      hanleChange(1, v);
      rightComponent?.props?.onChange?.(val, ...args);
    },
  });

  return (
    <Space.Compact block>
      {leftDom}
      {rightDom}
    </Space.Compact>
  );
};

const LFormItemComposition: FC<LFormItemCompositionProps> = ({
  size,
  disabled,
  variant,

  leftComponent,
  rightComponent,
  transformLeftOnChangeParams,
  transformRightOnChangeParams,

  ...restProps
}) => {
  const baseProps = {
    size,
    disabled,
    variant,
    leftComponent,
    rightComponent,
  };
  return (
    <LFormItem {...restProps}>
      <BaseComposition {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemComposition;
export * from './interface';
