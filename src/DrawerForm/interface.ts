import type { DrawerProps } from 'antd';
import type { BaseFormProps } from 'lighting-design/Form/interface';
import type { ReactElement, ReactNode } from 'react';

export interface LDrawerFormProps
  extends Omit<BaseFormProps, 'title' | 'onFinish'>,
    Pick<DrawerProps, 'open'> {
  /**
   * 标题
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDrawerFormProps
   */
  title?: ReactNode;
  /**
   * 抽屉的宽度
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDrawerFormProps
   */
  width?: DrawerProps['width'];
  /**
   * 抽屉的方向
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDrawerFormProps
   */
  placement?: DrawerProps['placement'];
  /**
   * 自定义触发抽屉打开的按钮
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDrawerFormProps
   */
  trigger?: ReactElement;
  /**
   * 提交按钮加载状态
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDrawerFormProps
   */
  loading?: boolean;
  /**
   * 抽屉默认操作栏位置 (只生效默认操作栏)
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDrawerFormProps
   */
  actionBarDir?: 'footer' | 'extra' | undefined;
  /**
   * 抽屉`props`,具体详见`antd Drawer`
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDrawerFormProps
   *@see https://ant.design/components/drawer-cn#api
   */
  drawerProps?: Omit<DrawerProps, 'open'>;
  /**
   *  关闭抽屉时是否重置表单到初始值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDrawerFormProps
   */
  isResetFields?: boolean;
  /**
   * 关闭时是否销毁Drawer的子元素
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  destroyOnClose?: boolean;
  /**
   *  是否预渲染`LDrawerForm`的内容
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDrawerFormProps
   */
  forceRender?: boolean;
  /**
   * 抽屉开关回调
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDrawerFormProps
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * 确定回调
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LDrawerFormProps
   */
  onFinish?: (values: Record<string, any>) => void | undefined | true | Promise<any>;
}
