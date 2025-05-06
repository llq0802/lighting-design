import type { PopoverProps, SelectProps } from 'antd';
import type { ReactNode } from 'react';

type LTriggerMode = 'checkboxTag' | 'radioTag' | 'checkbox' | 'radio';

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
   * 弹出层内容区样式
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
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
   *  -  会对children 组中的请求副作用有影响
   *
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  destroyOnHide?: PopoverProps['destroyTooltipOnHide'];
  /**
   * 修改弹出层的箭头的显示状态以及修改箭头是否指向目标元素中心
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTriggerProps
   */
  popupArrow?: PopoverProps['arrow'];
  // children: ReactElement<any, string | JSXElementConstructor<any>>;
  children:
    | ReactNode
    | ((
        props: {
          value: any;
          onChange: (v: { label: any; value: any }) => void;
          open: boolean;
          setOpen: (b: boolean) => void;
          labelInValue: boolean;
          fieldNames: SelectProps['fieldNames'];
          mode: LTriggerMode;
        } & Record<string, any>,
      ) => React.ReactElement<unknown, string | React.JSXElementConstructor<any>>);
  popoverProps?: PopoverProps;
} & Omit<SelectProps, 'mode'>;
