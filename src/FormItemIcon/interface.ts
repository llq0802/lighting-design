import type { InputProps, ModalProps, TabsProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';

export interface LFormItemIconProps extends LFormItemProps {
  /**
   *选择图标后是否展示 (只支持antd内置图标，如果自定义图标请设置inputProps的prefix属性)
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemIconProps
   */
  showIcon?: boolean;
  /**
   *弹窗里面所有图标样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemIconProps
   */
  iconStyle?: React.CSSProperties;
  /**
   *选择图标后的图标样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemIconProps
   */
  activeIconStyle?: React.CSSProperties;
  /**
   *Input 输入框配置
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemIconProps
   */
  inputProps?: InputProps;
  /**
   *Modal 弹出框配置
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemIconProps
   */
  modalProps?: ModalProps;
  /**
   *Tabs 组件配置
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemIconProps
   */
  tabsProps?: TabsProps;
  /**
   *默认图标配置
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemIconProps
   */
  options?: FormItemIconOptions;
  /**
   *自定义图标配置
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemIconProps
   */
  extendRender?: {
    IconFont: any;
    options: FormItemIconTabsExtendOptions[];
  };
  /**
   *自定义item渲染
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemIconProps
   */
  itemRender?: (item: string, node: React.ReactNode) => React.ReactNode;
}
