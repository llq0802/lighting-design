import type { InputProps, ModalProps, TabPaneProps, TabsProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { FC } from 'react';
import React, { useContext } from 'react';
import IconWrapper from './base/IconWrapper';

interface IconTabsOptions extends Omit<TabPaneProps, 'tab' | 'children'> {
  label: React.ReactNode;
  children?:
    | React.ReactNode
    | ((list: string[], node: React.ReactNode) => React.ReactNode);
}

export interface FormItemIconTabsExtendOptions
  extends Omit<TabPaneProps, 'tab' | 'children'> {
  label: React.ReactNode;
  key: string;
  data: string[];
  children?:
    | React.ReactNode
    | ((list: string[], node: React.ReactNode) => React.ReactNode);
}

export interface FormItemIconOptions<T = IconTabsOptions> {
  Outlined?: T;
  Filled?: T;
  TwoTone?: T;
}
export interface LFormItemIconProps extends LFormItemProps {
  /** 选择图标后是否展示 (只支持antd内置图标，如果自定义图标请设置inputProps的prefix属性) */
  showIcon?: boolean;
  /** 选择图标后的图标样式 */
  iconStyle?: React.CSSProperties;
  /** input 输入框配置 */
  inputProps?: InputProps;
  /** modal 弹出框配置 */
  modalProps?: ModalProps;
  /** tabs 标签页配置 */
  tabsProps?: TabsProps;
  /** 默认图标配置 */
  options?: FormItemIconOptions;
  /** 自定义图标配置 */
  extendRender?: {
    IconFont: any;
    options: FormItemIconTabsExtendOptions[];
  };
  /** 自定义item渲染 */
  itemRender?: (item: string, node: React.ReactNode) => React.ReactNode;
}

const LFormItemIcon: FC<LFormItemIconProps> = ({
  showIcon = true,
  iconStyle = {},
  required = false,
  disabled,
  options,
  extendRender,
  modalProps,
  tabsProps,
  inputProps = {},
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
        showIcon={showIcon}
        iconStyle={iconStyle}
        disabled={disabled ?? formDisabled}
        placeholder={messageLabel}
        options={options}
        itemRender={itemRender}
        extendRender={extendRender}
        modalProps={modalProps}
        tabsProps={tabsProps}
        {...inputProps}
      />
    </LFormItem>
  );
};

export default LFormItemIcon;