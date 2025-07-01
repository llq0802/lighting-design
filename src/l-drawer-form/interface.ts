import type { DrawerProps } from 'antd';
import type { LFormProps } from 'lighting-design/l-form';
import type { LModalFormProps } from 'lighting-design/l-modal-form';

export interface LDrawerFormProps
  extends Omit<LFormProps, 'title' | 'onFinish' | 'isEnterSubmit'>,
    Pick<DrawerProps, 'open'>,
    Pick<
      LModalFormProps,
      'trigger' | 'onFinish' | 'onOpenChange' | 'forceRender' | 'destroyOnClose' | 'isResetFields' | 'width' | 'title'
    > {
  /**
   * 抽屉的方向
   */
  placement?: DrawerProps['placement'];
  /**
   *是否全屏抽屉
   */
  isFullscreen?: boolean;
  /**
   * 抽屉默认操作栏位置 (只生效默认操作栏)
   */
  actionBarDir?: 'footer' | 'extra';
  /**
   * 抽屉`props`,具体详见`antd Drawer`
   */
  drawerProps?: Omit<DrawerProps, 'open'>;
  onCancel?: DrawerProps['onClose'];
}
