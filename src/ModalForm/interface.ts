import type { ModalProps } from 'antd';
import type { BaseFormProps } from 'lighting-design/Form/interface';
import type { ReactElement, ReactNode } from 'react';

export interface LModalFormProps
  extends Omit<BaseFormProps, 'title' | 'onFinish'>,
    Pick<ModalProps, 'open'> {
  /**
   *  弹窗标题
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  title?: ReactNode;
  /**
   * 预渲染Modal内容
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  forceRender?: boolean;
  /**
   * 是否在关闭弹窗时重置表单到初始值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  isResetFields?: boolean;
  /**
   * 关闭时是否销毁Modal的子元素
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  destroyOnClose?: boolean;
  /**
   * 是否允许拖动
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  isDraggable?: boolean;
  /**
   * Moadl的宽
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  width?: ModalProps['width'];
  /**
   * 打开弹窗的按钮
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  trigger?: ReactElement;
  /**
   * Moadl的其他配置属性 某些属性已被重写
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   *@see https://ant.design/components/modal-cn#api
   */
  modalProps?: Omit<ModalProps, 'open' | 'onOk'>;
  /**
   * 弹窗打开关闭的回调
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  onOpenChange?: (open: boolean) => void;
  /**
   *  表单提交 只有返回true时才关闭弹窗
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LModalFormProps
   */
  onFinish?: (values: Record<string, any>) => void | undefined | true | Promise<any>;
}
