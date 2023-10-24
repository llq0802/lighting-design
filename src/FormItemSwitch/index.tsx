import { useMemoizedFn } from 'ahooks';
import type { SwitchProps } from 'antd';
import { Switch } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { FC } from 'react';
import { useContext, useMemo } from 'react';

const SwitchWrapper = (
  props: Pick<
    LFormItemSwitchProps,
    'checkedBg' | 'unCheckedBg' | 'switchProps'
  > &
    Record<string, any>,
) => {
  const {
    checked,
    onChange,
    unCheckedBg,
    checkedBg,
    disabled,
    style,
    size,
    ...switchProps
  } = props;

  const styles = useMemo(() => {
    return checked
      ? { backgroundColor: checkedBg, ...style }
      : { backgroundColor: unCheckedBg, ...style };
  }, [checked, checkedBg, style, unCheckedBg]);

  const handleChange = useMemoizedFn((bool: boolean) => {
    if (switchProps?.onChange) {
      switchProps?.onChange(bool);
    }
    onChange?.(bool);
  });
  const { disabled: formDisabled } = useContext(LFormContext);
  return (
    <Switch
      size={size === 'small' ? 'small' : 'default'}
      disabled={disabled ?? formDisabled}
      {...switchProps}
      style={styles}
      checked={checked}
      onChange={handleChange}
    />
  );
};

export interface LFormItemSwitchProps extends LFormItemProps {
  /**
   *antd Swicth的 props
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.23
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSwitchProps
   */
  switchProps?: SwitchProps;
  /**
   *打开时的背景颜色
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.23
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSwitchProps
   */
  checkedBg?: string;
  /**
   *关闭时的背景颜色
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.23
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSwitchProps
   */
  unCheckedBg?: string;
}

const LFormItemSwitch: FC<LFormItemSwitchProps> = ({
  checkedBg,
  unCheckedBg,
  switchProps = emptyObject,

  required,
  size,
  disabled,
  ...restProps
}) => {
  const { size: formSize } = useContext(LFormContext);

  return (
    <LFormItem
      _isSelectType
      valuePropName="checked"
      required={required}
      {...restProps}
    >
      <SwitchWrapper
        size={size ?? formSize}
        checkedBg={checkedBg}
        unCheckedBg={unCheckedBg}
        disabled={disabled}
        {...switchProps}
      />
    </LFormItem>
  );
};

export default LFormItemSwitch;
