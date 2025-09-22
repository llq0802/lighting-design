import { Form, Switch, type SwitchProps } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import type { FC } from 'react';
import { useLayoutEffect } from 'react';
import type { LFormItemSwitchProps } from './interface';

const BaseSwitch = (
  props: {
    switchProps: SwitchProps;
    [key: string]: any;
  } & Pick<LFormItemSwitchProps, 'checkedBg' | 'unCheckedBg'>,
) => {
  const { value, unCheckedBg, checkedBg, switchProps, ...restProps } = props;
  const innerSwitchProps = {
    value,
    ...restProps,
    ...switchProps,
    style: {
      background: value ? checkedBg : unCheckedBg,
      ...switchProps?.style,
    },
    onChange: (...args: any[]) => {
      restProps?.onChange?.(...args);
      //@ts-ignore
      switchProps?.onChange?.(...args);
    },
  };

  return <Switch {...innerSwitchProps} />;
};

const LFormItemSwitch: FC<LFormItemSwitchProps> = ({
  size,
  disabled,

  checkedValue = true,
  unCheckedValue = false,
  checkedBg,
  unCheckedBg,

  checkedChildren,
  unCheckedChildren,
  switchProps = emptyObject,

  ...formItemProps
}) => {
  const { name } = formItemProps;
  const baseProps = {
    size,
    disabled,
    checkedBg,
    checkedChildren,
    unCheckedChildren,
    unCheckedBg,
    switchProps,
  };

  const form = Form.useFormInstance();
  useLayoutEffect(() => {
    if (!name) return;
    const v = form?.getFieldValue(name);
    if (v === void 0 || v === null) {
      form?.setFieldValue(name, unCheckedValue);
    }
  }, []);

  return (
    <LFormItem
      getValueFromEvent={(val) => {
        // 设置如何将 event 的值转换成字段值, 只在用户操作有效
        // console.log('===getValueFromEvent-1===>', val);
        if (val) {
          return checkedValue;
        }
        return unCheckedValue;
      }}
      // normalize={(v, pv, s) => {
      //   // 组件获取值后进行转换，再放入 Form 中。不支持异步, 只在用户操作有效
      //   console.log('===normalize-2===>', v);
      //   return v;
      // }}
      getValueProps={(val) => {
        //为子元素添加额外的属性, 每次初始化或者重新渲染都有效
        const value = val === checkedValue;
        return { value };
      }}
      {...formItemProps}
      valuePropName="checked"
    >
      <BaseSwitch {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemSwitch;
export * from './interface';
