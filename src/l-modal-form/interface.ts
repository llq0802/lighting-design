import type { ModalProps } from 'antd';
import type { BaseFormProps } from 'lighting-design/Form/interface';
import type { ReactElement, ReactNode } from 'react';

export interface LModalFormProps
  extends Omit<BaseFormProps, 'title' | 'onFinish' | 'isEnterSubmit'>,
    Pick<ModalProps, 'open' | 'centered'> {
  /**
   *  标题
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  title?: ReactNode;
  /**
   * 预渲染`Modal`内容
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  forceRender?: boolean;
  /**
   * 是否在关闭后重置表单到初始值
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  isResetFields?: boolean;
  /**
   * 关闭时是否销毁`Modal`的子元素
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  destroyOnClose?: boolean;
  /**
   * 是否允许拖动弹窗组件
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  isDraggable?: boolean;
  /**
   * `Moadl` 的宽
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  width?: ModalProps['width'];
  /**
   * 打开的按钮
   * - 必须是能接受到`onClick`的组件或元素
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  trigger?: ReactElement;
  /**
   * Moadl 的其他配置属性, 某些属性已被重写
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   *@see https://ant.design/components/modal-cn#api
   */
  modalProps?: Omit<ModalProps, 'open' | 'onOk'>;
  /**
   * 弹窗打开关闭的回调
   * - 如果设置了`open`需要受控设置`onOpenChange`
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * 表单提交
   * - 返回 `true` 或 `Promise.resolve(true)` 时会关闭弹窗并且会自动管理`loading`
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  onFinish?: (values: Record<string, any>) => void | true | Promise<any>;
  /**
   * 弹窗距离顶部的距离
   * - 不要与 centered 同时配置
   */
  modalTop?: string | number;

  onCancel?: (values: Record<string, any>) => void | true | Promise<any>;
}
