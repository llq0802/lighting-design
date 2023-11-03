import type { InputProps, ModalProps, TabPaneProps, TabsProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
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
  /**
   *选择图标后是否展示 (只支持antd内置图标，如果自定义图标请设置inputProps的prefix属性)
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemIconProps
   */
  showIcon?: boolean;
  /**
   *弹窗里面所有图标样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemIconProps
   */
  iconStyle?: React.CSSProperties;
  /**
   *选择图标后的图标样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemIconProps
   */
  activeIconStyle?: React.CSSProperties;
  /**
   *Input 输入框配置
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemIconProps
   */
  inputProps?: InputProps;
  /**
   *Modal 弹出框配置
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemIconProps
   */
  modalProps?: ModalProps;
  /**
   *Tabs 组件配置
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemIconProps
   */
  tabsProps?: TabsProps;
  /**
   *默认图标配置
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemIconProps
   */
  options?: FormItemIconOptions;
  /**
   *自定义图标配置
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemIconProps
   */
  extendRender?: {
    IconFont: any;
    options: FormItemIconTabsExtendOptions[];
  };
  /**
   *自定义item渲染
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemIconProps
   */
  itemRender?: (item: string, node: React.ReactNode) => React.ReactNode;
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
