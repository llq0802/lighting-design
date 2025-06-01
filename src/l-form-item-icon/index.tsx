import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { emptyObject } from 'lighting-design/constants';
import { usePlaceholder } from 'lighting-design/utils';
import type { FC } from 'react';
import { useContext } from 'react';
import IconWrapper from './base/IconWrapper';
import type { LFormItemIconProps } from './interface';

const LFormItemIcon: FC<LFormItemIconProps> = ({
  showIcon = true,
  size,
  iconStyle = emptyObject,
  activeIconStyle = emptyObject,
  required = false,
  disabled,
  options,
  extendRender,
  modalProps,
  tabsProps = emptyObject,
  inputProps = emptyObject,
  itemRender,
  placeholder,
  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    isSelectType: true,
    placeholder,
    restProps,
  });
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem _isSelectType required={required} placeholder={messageLabel} {...restProps}>
      <IconWrapper
        size={size}
        showIcon={showIcon}
        iconStyle={iconStyle}
        activeIconStyle={activeIconStyle}
        disabled={disabled ?? formDisabled}
        placeholder={messageLabel}
        options={options}
        itemRender={itemRender}
        extendRender={extendRender}
        modalProps={modalProps}
        tabsProps={tabsProps}
        inputProps={inputProps}
      />
    </LFormItem>
  );
};

export default LFormItemIcon;
export * from './interface';
