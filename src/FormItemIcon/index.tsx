import type { TabPaneProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import React, { useContext } from 'react';
import IconWrapper from './base/IconWrapper';
import type { LFormItemIconProps } from './interface';

interface IconTabsOptions extends Omit<TabPaneProps, 'tab' | 'children'> {
  label: React.ReactNode;
  children?: React.ReactNode | ((list: string[], node: React.ReactNode) => React.ReactNode);
}

export interface FormItemIconTabsExtendOptions extends Omit<TabPaneProps, 'tab' | 'children'> {
  label: React.ReactNode;
  key: string;
  data: string[];
  children?: React.ReactNode | ((list: string[], node: React.ReactNode) => React.ReactNode);
}

export interface FormItemIconOptions<T = IconTabsOptions> {
  Outlined?: T;
  Filled?: T;
  TwoTone?: T;
}

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
    <LFormItem
      _isSelectType
      required={required}
      placeholder={messageLabel}
      validateTrigger="onBlur"
      {...restProps}
    >
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
