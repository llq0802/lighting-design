import type { ModalProps } from 'antd';
import type { LFormProps } from 'lighting-design/l-form';
import type { ReactElement } from 'react';
import type { DraggableProps } from 'react-draggable';

/**
 * 模态框表单组件属性接口
 * 继承自 LFormProps（排除 title 和 onFinish 属性）和 ModalProps 的部分属性
 * @template T 表单数据类型
 */
export interface LModalFormProps<T = any>
  extends Omit<LFormProps, 'title' | 'onFinish'>,
    Pick<ModalProps, 'open' | 'centered' | 'forceRender' | 'title' | 'destroyOnHidden' | 'width' | 'afterClose'> {
  /**
   * 是否在关闭后重置表单到初始值
   * @default true
   */
  isResetFields?: boolean;

  /**
   * 是否允许拖动弹窗组件
   * - 设置为 true 启用默认拖拽行为
   * - 设置 DraggableProps 对象来自定义拖拽行为
   * - 设置为 false 或不设置禁用拖拽
   */
  draggableProps?: boolean | DraggableProps;

  /**
   * 打开的按钮
   * - 必须是能接受到[onClick](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-form-item-captcha\base-captcha-input.tsx#L60-L63)的组件或元素
   * - 点击该元素会打开模态框表单
   */
  trigger?: ReactElement;

  /**
   * Modal 的其他配置属性, 某些属性已被重写
   * - 与`按钮`相关的属性无法使用, 请使用 [submitter](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\Form\interface.ts#L107-L107) 属性进行配置
   * - 不能包含 open 和 onOk 属性，因为它们已被组件内部使用
   */
  modalProps?: Omit<ModalProps, 'open' | 'onOk'>;

  /**
   * open 改变时的回调
   * - 如果设置了[open](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\Trigger\index.tsx#L66-L66)需要受控设置[onOpenChange](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-modal-form\interface.ts#L31-L31)
   * - 注意：Modal 并未完全渲染完成，如需在完全渲染后执行操作，请使用 afterOpen
   * @param open 当前模态框的打开状态
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * 表单提交回调函数
   * - 返回 `true` 或 `Promise.resolve(true)` 时会关闭弹窗并且会自动管理[loading](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\Form\interface.ts#L100-L100)
   * - 如果返回 false 或 Promise.reject()，则不会关闭弹窗
   * @param values 表单数据
   * @returns any | Promise<any> 返回结果决定是否关闭弹窗
   */
  onFinish?: (values: T) => any | Promise<any>;

  /**
   * 弹窗距离顶部的距离
   * - 不要与 centered 同时配置
   * - 可以是数字（像素值）或有效的CSS长度字符串
   */
  modalTop?: string | number;

  /**
   * 点击取消或者关闭图标的回调
   * - 在用户点击取消按钮或关闭图标时触发
   * @param e 事件对象
   */
  onCancel?: (e: any) => void;

  /**
   * open 为 true 后的回调
   * - Modal 完全渲染完成
   * - 一般在此设置 form 表单的回填值
   * - 与 onOpenChange 的区别是，此回调在 Modal 完全渲染后执行
   */
  afterOpen?: () => void;
}
