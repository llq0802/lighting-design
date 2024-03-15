import type { DrawerProps } from 'antd';
import type { BaseFormProps } from 'lighting-design/Form/interface';
import type { LModalFormProps } from 'lighting-design/ModalForm/interface';

export interface LDrawerFormProps
  extends Omit<BaseFormProps, 'title' | 'onFinish'>,
    Pick<DrawerProps, 'open'>,
    Pick<
      LModalFormProps,
      | 'trigger'
      | 'onFinish'
      | 'onOpenChange'
      | 'forceRender'
      | 'destroyOnClose'
      | 'isResetFields'
      | 'width'
      | 'title'
    > {
  /**
   * 抽屉的方向
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDrawerFormProps
   */
  placement?: DrawerProps['placement'];
  /**
   *是否全屏抽屉
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDrawerFormProps
   */
  isFullscreen?: boolean;
  /**
   * 抽屉默认操作栏位置 (只生效默认操作栏)
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDrawerFormProps
   */
  actionBarDir?: 'footer' | 'extra';
  /**
   * 抽屉`props`,具体详见`antd Drawer`
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDrawerFormProps
   *@see https://ant.design/components/drawer-cn#api
   */
  drawerProps?: Omit<DrawerProps, 'open'>;
  onCancel?: DrawerProps['onClose'];
}
