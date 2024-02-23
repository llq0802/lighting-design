import { Switch } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext, useMemo } from 'react';
import type { LFormItemSwitchProps } from './interface';

const SwitchWrapper = (
  props: Pick<LFormItemSwitchProps, 'checkedBg' | 'unCheckedBg' | 'switchProps'> &
    Record<string, any>,
) => {
  const { checked, unCheckedBg, checkedBg, style, size, ...switchProps } = props;

  const styles = useMemo(() => {
    return checked
      ? { backgroundColor: checkedBg, ...style }
      : { backgroundColor: unCheckedBg, ...style };
  }, [checked, checkedBg, style, unCheckedBg]);

  return (
    <Switch
      size={size === 'small' ? 'small' : 'default'}
      {...switchProps}
      style={styles}
      checked={checked}
    />
  );
};

const LFormItemSwitch: FC<LFormItemSwitchProps> = ({
  checkedBg,
  checkedChildren,
  unCheckedChildren,
  unCheckedBg,
  switchProps = emptyObject,

  size,
  disabled = false,
  ...restProps
}) => {
  const { size: formSize, disabled: formDisabled } = useContext(LFormContext);
  return (
    <LFormItem _isSelectType valuePropName="checked" {...restProps}>
      <SwitchWrapper
        size={size ?? formSize}
        disabled={disabled || formDisabled}
        checkedBg={checkedBg}
        unCheckedBg={unCheckedBg}
        checkedChildren={checkedChildren}
        unCheckedChildren={unCheckedChildren}
        {...switchProps}
      />
    </LFormItem>
  );
};

export default LFormItemSwitch;
export * from './interface';
