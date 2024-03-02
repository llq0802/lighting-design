import type { PopoverProps, SelectProps } from 'antd';
import type { ReactNode } from 'react';

export type LTriggerMode = 'checkboxTag' | 'radioTag' | 'checkbox' | 'radio' | 'tag' | 'default';

export type LTriggerProps = {
  /**
   * 是否把传入子组件 `value` 的值 从 `value.value` 变为 `{ value: xxx, label: xxx }` 的格式
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  labelInValue?: boolean;
  /**
   * open 改变的回调
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  onOpenChange?: (b: boolean) => void;
  /**
   * 选择回显的模式
   * - 子组件`children`会接受到此值
   * - 子组件用于判断回显方式 (调用 onChange 参数方式 )
   * - 为`radio`时,子组件 onChange 调用方式为` onChange({ label: string, value: string|number }) `
   * - 为`checkbox`时,子组件 onChange 调用方式为` onChange({ label: string, value: (string|number)[] }) `
   *    - 建议 label 的值用 `'-'`或`'/'`或`','`分隔
   * - 为`radioTag`时,子组件 onChange 调用方式为` onChange({ label: [string], value: [string|number] }) `
   *    - 有值情况下label与value 的数组长度均为 **1**
   * - 为`checkboxTag`时,子组件 onChange 调用方式为` onChange({ label: string[], value:(string|number)[] }) `
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  mode?: LTriggerMode;
  /**
   * mode 为 `checkbox` 回显分割的字符
   * - 建议使用 `' / '` 或者 `' - '` 或者 `' , '`
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  split?: string;
  /**
   * 是否打开
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  open?: boolean;
  /**
   * 默认是否打开
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  defaultOpen?: boolean;
  /**
   * 组件宽度
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   *  */
  width?: number | string;
  /**
   * 弹出层的类名
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  overlayClassName?: string;
  /**
   * 弹出层样式
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  overlayStyle?: PopoverProps['overlayStyle'];
  /**
   * 弹出层内容区样式
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  overlayInnerStyle?: PopoverProps['overlayInnerStyle'];
  /**
   * 弹出层方向
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  placement?: PopoverProps['placement'];
  /**
   * 自定义弹出层的挂载
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  getPopupContainer?: PopoverProps['getPopupContainer'];
  /**
   * 弹出层关闭时是否销毁 children 组件
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  destroyOnHide?: PopoverProps['destroyTooltipOnHide'];
  /**
   * 修改弹出层的箭头的显示状态以及修改箭头是否指向目标元素中心
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  overlayArrow?: PopoverProps['arrow'];
  /**
   * 在`mode='tag'`时自定义标签
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  tagRender?: (
    props: Record<string, any>,
  ) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /**
   * children 组件
   * - 会接受到 open，setOpen，value，onChange
   * - 必须在 children 组件中绑定 value，onChange 才会收集到数据
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  // children: ReactElement<any, string | JSXElementConstructor<any>>;
  children: ReactNode;
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
