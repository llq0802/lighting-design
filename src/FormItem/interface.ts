import type { ColProps, FormItemProps } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { ReactElement, ReactNode } from 'react';

export interface LFormItemProps extends FormItemProps {
  /**
   *组件大小
   * - 需要配合 children 组件配合
   * - 部分组件支持
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  size?: SizeType;
  /**
   *是否禁用
   * - 需要配合 children 组件配合
   * - 部分组件支持
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  disabled?: boolean;
  /**
   *  子组件的placeholder
   * - 需要配合 children 组件配合
   * - 部分组件支持
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  placeholder?: string | string[];
  /**
   *lable宽度。  
    - 同 labelCol={{ flex: '90px' }}
    - 不要与 `labelCol` 同时设置
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  labelWidth?: number | 'auto' | string;
  /**
   *重新渲染LFormItem的children组件
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  renderField?: (dom: ReactElement, props: LFormItemProps) => ReactElement;
  /**
   * 重新渲染整个 LFormItem 组件
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  renderFormItem?: (dom: ReactElement) => ReactElement;
  /**
   * children组件 (不包含 label ) 与 `contentBefore `或者与 `contentAfter `垂直的对齐方式
   * - 当配置了 contentBefore 或者 contentAfter 时生效
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  contentAlignItems?: 'center' | 'start' | 'end';
  /**
   *当配置了`label`时组件左边的`label`与右边整体的内容区域`( 如果配置了ontentBefore或者contentAfter则包含它们 )`的垂直对齐方式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  wrapperAlignItems?: 'start' | 'center' | 'end';
  /**
   *  组件前面的内容
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  contentBefore?: ReactNode;
  /*
   * 组件后面的内容
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  contentAfter?: ReactNode;
  /**
   * 传给children组件的额外属性
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  contentProps?: Record<string, any>;
  /**
   *  children组件外层的 div 是否不占满父组件的宽度的剩余宽度
   *  - 配置 contentAfter 或者 contentBefore 生效
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  contentInline?: boolean;
  /*
   * 被包裹组件的最外层容器类名 ,
   * - 配置 contentAfter 或者 contentBefore 生效
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  contentClassName?: string;

  /**
   * 只在`LQueryForm`组件中生效，与`antd.Col`组件的配置一样，配置单独这一项占多数份
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  ownColSpans?: ColProps;
  /** 控制是否是选择类型的表单项组件 (一般内部使用) */
  _isSelectType?: boolean;
}
