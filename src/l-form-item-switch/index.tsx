import { Form, Switch, type SwitchProps } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import type { FC } from 'react';
import { useLayoutEffect, useMemo } from 'react';
import type { LFormItemSwitchProps } from './interface';

const BaseSwitch = (props: SwitchProps & Pick<LFormItemSwitchProps, 'checkedBg' | 'unCheckedBg'>) => {
  const { checked, unCheckedBg, checkedBg, style, ...restProps } = props;

  const innerStyle = useMemo(
    () => ({ backgroundColor: checked ? checkedBg : unCheckedBg, ...style }),
    [checked, checkedBg, style, unCheckedBg],
  );

  return <Switch {...restProps} style={innerStyle} checked={checked} />;
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

  ...restProps
}) => {
  const baseProps = {
    size,
    disabled,
    checkedBg,
    checkedChildren,
    unCheckedChildren,
    unCheckedBg,
    ...switchProps,
  };
  const form = Form.useFormInstance();
  useLayoutEffect(() => {
    if (!restProps?.name) return;
    const v = form?.getFieldValue(restProps.name);
    if (v === void 0 || v === null) {
      form?.setFieldValue(restProps.name, unCheckedValue);
    }
  }, []);
  return (
    <LFormItem
      // initialValue={unCheckedValue}
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
      {...restProps}
      valuePropName="checked"
    >
      <BaseSwitch {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemSwitch;
export * from './interface';
