import type { DrawerProps } from 'antd';
import type { LFormProps } from 'lighting-design/l-form';
import type { LModalFormProps } from 'lighting-design/l-modal-form';

export interface LDrawerFormProps<T>
  extends Omit<LFormProps<T>, 'title' | 'onFinish'>,
    Pick<LModalFormProps, 'trigger' | 'onFinish' | 'onOpenChange' | 'isResetFields'>,
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
}
