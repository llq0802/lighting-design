import type { DrawerProps } from 'antd';
import type { LFormProps } from 'lighting-design/l-form';
import type { LModalFormProps } from 'lighting-design/l-modal-form';

/**
 * 抽屉表单组件属性接口
 * 继承自 LFormProps（排除 title 和 onFinish 属性）、LModalFormProps 的部分属性以及 DrawerProps 的部分属性
 * @template T 表单数据类型
 */
export interface LDrawerFormProps<T>
  extends Omit<LFormProps<T>, 'title' | 'onFinish'>,
    Pick<LModalFormProps, 'trigger' | 'onFinish' | 'onOpenChange' | 'isResetFields' | 'afterClose'>,
    Pick<DrawerProps, 'placement' | 'destroyOnHidden' | 'forceRender' | 'title' | 'width' | 'height' | 'open'> {
  /**
   * 是否全屏抽屉
   * - 设置为 true 时，抽屉将占据整个屏幕
   * @default false
   */
  isFullscreen?: boolean;

  /**
   * 抽屉关闭时的回调函数
   * - 对应 antd Drawer 组件的 onClose 属性
   */
  onCancel?: DrawerProps['onClose'];

  /**
   * 抽屉的其他属性配置
   * - 具体详见 antd Drawer 组件文档
   * - 不能包含 open 属性，因为该属性已被组件内部使用
   */
  drawerProps?: Omit<DrawerProps, 'open'>;

  /**
   * open 为 true 后的回调
   * - Drawer 完全渲染完成
   * - 一般在此设置 form 表单的回填值
   * - 与 onOpenChange 的区别是，此回调在 Drawer 完全渲染后执行
   */
  afterOpen?: () => void;
}
