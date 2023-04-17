import type { SwitchProps } from 'antd';
import { Switch } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { FC } from 'react';
import { useCallback, useContext, useMemo } from 'react';

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
    ...switchProps
  } = props;

  const styles = useMemo(() => {
    return checked
      ? { backgroundColor: checkedBg, ...style }
      : { backgroundColor: unCheckedBg, ...style };
  }, [checked, checkedBg, style, unCheckedBg]);

  const handleChange = useCallback(
    (bool: boolean) => {
      if (switchProps?.onChange) {
        switchProps?.onChange(bool);
      }
      onChange(bool);
    },
    [onChange, switchProps],
  );
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <Switch
      disabled={disabled ?? formDisabled}
      {...switchProps}
      style={styles}
      checked={checked}
      onChange={handleChange}
    />
  );
};

export interface LFormItemSwitchProps extends LFormItemProps {
  switchProps?: SwitchProps;
  checkedBg?: string;
  unCheckedBg?: string;
}

const LFormItemSwitch: FC<LFormItemSwitchProps> = ({
  checkedBg,
  unCheckedBg,
  switchProps = {},

  required,
  disabled,
  ...restProps
}) => {
  return (
    <LFormItem
      _isSelectType
      valuePropName="checked"
      required={required}
      {...restProps}
    >
      <SwitchWrapper
        checkedBg={checkedBg}
        unCheckedBg={unCheckedBg}
        disabled={disabled}
        {...switchProps}
      />
    </LFormItem>
  );
};

export default LFormItemSwitch;