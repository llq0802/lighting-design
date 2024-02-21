import type { ColProps, FormItemProps } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { ReactElement, ReactNode } from 'react';

export interface LFormItemProps extends FormItemProps {
  size?: SizeType;
  /**
   *是否禁用 需要配合 children 组件配合
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  disabled?: boolean;
  /**
   *lable宽度。  同 labelCol={{ flex: '90px' }}
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  labelWidth?: number | 'auto' | string;
  /**
   * 重新渲染LFormItem的children组件
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  renderField?: (dom: ReactElement, props: LFormItemProps) => ReactElement;
  /**
   * 重新渲染整个LFormItem组件
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  renderFormItem?: (dom: ReactElement) => ReactElement;
  /**
   *当配置了contentBefore或者contentAfter时组件原本子项内容(label的右边)与contentBefore或者contentAfter与垂直的对齐方式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  contentAlignItems?: 'center' | 'start' | 'end';
  /**
   *当配置了 label 时组件左边的 label 与右边整体的内容区域 ( 如果配置了ontentBefore或者contentAfter则包含它们 ) 的垂直对齐方式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  wrapperAlignItems?: 'start' | 'center' | 'end';
  /**
   *  组件前面的内容
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  contentBefore?: ReactNode;
  /*
   * 组件后面的内容
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  contentAfter?: ReactNode;
  /**
   * 传给children的额外属性
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  contentProps?: Record<string, any>;
  /**
   *  children 外层的 div 是否为inline
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  contentInline?: boolean;
  /*
   * 被包裹组件的最外层容器类名 , 配置 contentAfter 或者 contentBefore 生效
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  contentClassName?: string;
  /**
   *  组件的placeholder
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  placeholder?: string | string[];
  /**
   * 只在`LQueryForm`组件中生效，与`antd.Col`组件的配置一样，配置单独这一项占多数份
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemProps
   */
  ownColSpans?: ColProps;
  /** 控制是否是选择类型的表单项组件 (一般内部使用) */
  _isSelectType?: boolean;
}
