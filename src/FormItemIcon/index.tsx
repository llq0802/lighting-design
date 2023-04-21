import type { InputProps, ModalProps, TabPaneProps, TabsProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { FC } from 'react';
import { useContext } from 'react';
import IconWrapper from './base/IconWrapper';

interface IconTabsOptions extends Omit<TabPaneProps, 'tab' | 'children'> {
  label: React.ReactNode;
  children?: React.ReactNode | ((list: string[]) => React.ReactNode);
}

export interface FormItemIconOptionsProps<T = IconTabsOptions> {
  Outlined?: T;
  Filled?: T;
  TwoTone?: T;
}

export interface LFormItemIconProps extends LFormItemProps {
  iconProps?: InputProps;
  modalProps?: ModalProps;
  tabsProps?: TabsProps;
  options?: FormItemIconOptionsProps;
}

const LFormItemIcon: FC<LFormItemIconProps> = ({
  required = false,
  disabled,
  options,
  modalProps,
  tabsProps,
  iconProps = {},
  placeholder,
  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
  });
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem
      required={required}
      placeholder={messageLabel}
      validateTrigger="onBlur"
      {...restProps}
    >
      <IconWrapper
        disabled={disabled ?? formDisabled}
        placeholder={messageLabel}
        options={options}
        modalProps={modalProps}
        tabsProps={tabsProps}
        {...iconProps}
      />
    </LFormItem>
  );
};

export default LFormItemIcon;
