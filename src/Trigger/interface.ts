import type { PopoverProps, SelectProps } from 'antd';
import type { JSXElementConstructor, ReactElement } from 'react';

export type LTriggerProps = {
  /**
   * 是否把传入子组件 value 的值 从 value.value 变为 { value: xxx, label: xxx } 的格式
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  labelInValue?: boolean;
  /**
   * 显示的模式
   * @author 李岚清 <https://github.com/llq0802>
   * @type { 'default' | 'tag' }
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  onOpenChange?: (b: boolean) => void;
  /**
   * 显示的模式
   * @author 李岚清 <https://github.com/llq0802>
   * @type { 'default' | 'tag' }
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  mode?: 'default' | 'tag';
  /**
   * 是否打开
   * @author 李岚清 <https://github.com/llq0802>
   * @type { boolean }
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   *
   */
  open?: boolean;
  /**
   * 是否打开
   * @author 李岚清 <https://github.com/llq0802>
   * @type { boolean }
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   *
   */
  defaultOpen?: boolean;
  /**
   *  组件宽度
   * @author 李岚清 <https://github.com/llq0802>
   * @type { number | string }
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   *  */
  width?: number | string;
  /**
   * 弹出层的类名
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  overlayClassName?: string;
  /**
   * 弹出层方向
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  placement?: PopoverProps['placement'];
  /**
   * 弹出层样式
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  overlayStyle?: PopoverProps['overlayStyle'];
  /**
   * 自定义弹出层的挂载
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  getPopupContainer?: PopoverProps['getPopupContainer'];
  /**
   * 弹出层关闭时是否销毁 children 组件
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  destroyOnHide?: PopoverProps['destroyTooltipOnHide'];
  /**
   * 修改弹出层的箭头的显示状态以及修改箭头是否指向目标元素中心
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  overlayArrow?: PopoverProps['arrow'];
  /**
   * 在mode='tag'时自定义标签
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  tagRender?: (
    props: Record<string, any>,
  ) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /**
   * children 组件会接受到 open，setOpen，value，onChange 必须在 children 组件中绑定 value，onChange 才会收集到数据
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.29
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  selectProps?: SelectProps;
  popoverProps?: PopoverProps;
} & Pick<
  SelectProps,
  | 'allowClear'
  | 'disabled'
  | 'placeholder'
  | 'style'
  | 'size'
  | 'suffixIcon'
  | 'variant'
  | 'className'
  | 'style'
  | 'fieldNames'
  | 'value'
  | 'onChange'
  | 'defaultValue'
>;
