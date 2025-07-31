import { Space } from 'antd';
import LFormItem from 'lighting-design/l-form-item';
import { cloneElement, type FC } from 'react';
import type { LFormItemCompositionProps } from './interface';

const BaseComposition: FC<Record<string, any>> = ({
  size,
  disabled,
  variant,
  block,
  leftWidth = '100%',
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
    style: { width: leftWidth, ...leftComponent?.props?.style },
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
    style: { width: '100%', ...rightComponent?.props?.style },
    onChange: (val: any, ...args: any[]) => {
      const v = transformRightOnChangeParams ? transformRightOnChangeParams(val) : val;
      hanleChange(1, v);
      rightComponent?.props?.onChange?.(val, ...args);
    },
  });

  return (
    <Space.Compact block={block}>
      {leftDom}
      {rightDom}
    </Space.Compact>
  );
};

const LFormItemComposition: FC<LFormItemCompositionProps> = ({
  size,
  disabled,
  variant,
  block = true,
  leftWidth,
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
    block,
    leftWidth,
    leftComponent,
    rightComponent,
    transformLeftOnChangeParams,
    transformRightOnChangeParams,
  };
  return (
    <LFormItem {...restProps}>
      <BaseComposition {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemComposition;
export * from './interface';
