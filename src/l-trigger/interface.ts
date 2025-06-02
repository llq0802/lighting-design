import type { PopoverProps, SelectProps } from 'antd';
import type { LValueType } from 'lighting-design/interface';
import type { ReactNode } from 'react';

// 触发器模式类型
export type LTriggerMode = 'checkboxTag' | 'radioTag' | 'checkbox' | 'radio';

// 触发器值类型
export type LTriggerValue<T = LValueType> = {
  label: T;
  value: T;
};

// 子组件Props类型
export type LTriggerChildrenProps<T = LValueType> = {
  value: T;
  onChange: (v: LTriggerValue<T>) => void;
  open: boolean;
  setOpen: (b: boolean) => void;
  labelInValue: boolean;
  mode: LTriggerMode;
};

// 主组件Props类型
export type LTriggerProps<T = LValueType> = {
  value?: LTriggerValue<T>;
  defaultValue?: LTriggerValue<T>;
  onChange?: (value: LTriggerValue<T>) => void;
  /**
   * 是否将传入子组件的value值转换为{ value: xxx, label: xxx }格式
   * @default false
   */
  labelInValue?: boolean;

  /**
   * 弹出层开关状态变化回调
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * 选择回显的模式
   *
   * @description
   * - radio: 单选模式，onChange({ label: string, value: string|number })
   * - checkbox: 多选模式，onChange({ label: string, value: (string|number)[] })
   * - radioTag: 单选标签模式，onChange({ label: string, value: string|number })
   * - checkboxTag: 多选标签模式，onChange({ label: string[], value: (string|number)[] })
   * @default 'radio'
   */
  mode?: LTriggerMode;

  /**
   * checkbox模式下的分隔符
   * @default ' / '
   */
  split?: string;

  /**
   * 受控打开状态
   */
  open?: boolean;

  /**
   * 默认打开状态
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * 触发器宽度
   * @default 250
   */
  width?: number | string;

  /**
   * 弹出层方向
   * @default 'bottomLeft'
   */
  placement?: PopoverProps['placement'];

  /**
   * 自定义弹出层的挂载节点
   */
  getPopupContainer?: PopoverProps['getPopupContainer'];

  /**
   * 关闭时是否销毁弹出层内容
   * @description 会影响children组件中的请求副作用
   * @default false
   */
  destroyTooltipOnHide?: PopoverProps['destroyTooltipOnHide'];

  /**
   * 是否显示弹出层箭头
   * @default false
   */
  popupArrow?: PopoverProps['arrow'];

  /**
   * 弹出层 popover 的额外属性
   */
  popoverProps?: PopoverProps;

  /**
   * 子组件
   */
  children: ReactNode | ((props: LTriggerChildrenProps<T>) => React.ReactElement);
} & Omit<SelectProps, 'mode' | 'value ' | 'defaultValue' | 'onChange' | 'children' | 'getPopupContainer'>;
