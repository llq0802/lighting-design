import { Switch, type SwitchProps } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import type { FC } from 'react';
import { useMemo } from 'react';
import type { LFormItemSwitchProps } from './interface';

const BaseSwitch = (props: SwitchProps & Pick<LFormItemSwitchProps, 'checkedBg' | 'unCheckedBg'>) => {
  const { checked, unCheckedBg, checkedBg, style, ...switchProps } = props;

  const innerStyle = useMemo(() => {
    return checked ? { backgroundColor: checkedBg, ...style } : { backgroundColor: unCheckedBg, ...style };
  }, [checked, checkedBg, style, unCheckedBg]);

  return <Switch {...switchProps} style={innerStyle} checked={checked} />;
};

const LFormItemSwitch: FC<LFormItemSwitchProps> = ({
  size,
  disabled,

  checkedValue,
  uncheckedValue,
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

  return (
    <LFormItem
      valuePropName="checked"
      {...restProps}
      getValueFromEvent={(e) => {
        // 设置如何将 event 的值转换成字段值, 只在用户操作有效
        console.log('===getValueFromEvent-1===>', e);
        return e;
      }}
      normalize={(v, pv, s) => {
        // 组件获取值后进行转换，再放入 Form 中。不支持异步, 只在用户操作有效
        console.log('===normalize-2===>', v);
        return v;
      }}
      getValueProps={(value) => {
        //为子元素添加额外的属性, 每次初始化或者重新渲染都有效
        console.log('===getValueProps-3===>', value);
        return { value };
      }}
    >
      <BaseSwitch {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemSwitch;
export * from './interface';
