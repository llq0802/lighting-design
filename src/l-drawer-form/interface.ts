import type { DrawerProps } from 'antd';
import type { LFormProps } from 'lighting-design/l-form';
import type { LModalFormProps } from 'lighting-design/l-modal-form';

export interface LDrawerFormProps<T>
  extends Omit<LFormProps<T>, 'title' | 'onFinish'>,
    Pick<LModalFormProps, 'trigger' | 'onFinish' | 'onOpenChange' | 'isResetFields' | 'afterClose'>,
    Pick<DrawerProps, 'placement' | 'destroyOnHidden' | 'forceRender' | 'title' | 'width' | 'height' | 'open'> {
  /**
   *是否全屏抽屉
   */
  isFullscreen?: boolean;
  onCancel?: DrawerProps['onClose'];
  /**
   * 抽屉`props`,具体详见`antd Drawer`
   */
  drawerProps?: Omit<DrawerProps, 'open'>;
  /**
   * open 为 true 后的回调
   * - Drawer 完全渲染完成
   * - 一般在此设置 form 表单的回填值
   */
  afterOpen?: () => void;
}
