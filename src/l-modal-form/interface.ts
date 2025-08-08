import type { ModalProps } from 'antd';
import type { LFormProps } from 'lighting-design/l-form';
import type { ReactElement } from 'react';
import type { DraggableProps } from 'react-draggable';

export interface LModalFormProps<T = any>
  extends Omit<LFormProps, 'title' | 'onFinish'>,
    Pick<ModalProps, 'open' | 'centered' | 'forceRender' | 'title' | 'destroyOnHidden' | 'width'> {
  /**
   * 是否在关闭后重置表单到初始值
   */
  isResetFields?: boolean;
  /**
   * 是否允许拖动弹窗组件
   */
  draggableProps?: boolean | DraggableProps;

  /**
   * 打开的按钮
   * - 必须是能接受到`onClick`的组件或元素
   */
  trigger?: ReactElement;
  /**
   * Moadl 的其他配置属性, 某些属性已被重写
   */
  modalProps?: Omit<ModalProps, 'open' | 'onOk'>;
  /**
   * 弹窗打开关闭的回调
   * - 如果设置了`open`需要受控设置`onOpenChange`
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * 表单提交
   * - 返回 `true` 或 `Promise.resolve(true)` 时会关闭弹窗并且会自动管理`loading`
   */
  onFinish?: (values: T) => any | Promise<any>;
  /**
   * 弹窗距离顶部的距离
   * - 不要与 centered 同时配置
   */
  modalTop?: string | number;

  onCancel?: (e: any) => void;
  onOpen?: () => void;
}
