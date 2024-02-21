import type { ModalProps } from 'antd';
import type { ReactNode } from 'react';
import type { FileViewProps } from './FileView';

export interface LFileViewerProps extends ModalProps, Omit<FileViewProps, 'url'> {
  /**
   * image 类型的配置
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   */
  imagePreview?: LImagePreviewProps;
  /**
   * 文件地址
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@example url={['地址1','地址2']}
   */
  url: string[] | string;
  /**
   * 是否打开(受控)
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   * @type {?boolean}
   * @see 官网 https://llq0802.github.io/lighting-design/latest LFileViewerProps
   */
  open?: boolean;
  /**
   *默认是否打开
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@type {?boolean}
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFileViewerProps
   */
  defaultOpen?: boolean;
  /**
   * 默认是否打开
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@type { (open: boolean) => void }
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFileViewerProps
   */
  onOpenChange?: (open: boolean) => void;
}

export type LImagePreviewProps = {
  visible?: boolean;
  onVisibleChange?: (visible, prevVisible) => void;
  getContainer?: string | HTMLElement | (() => HTMLElement); // v4.8.0
  src?: string; // v4.10.0
  mask?: ReactNode; // v4.9.0
  maskClassName?: string; // v4.11.0
  current?: number; // v4.12.0 仅支持 PreviewGroup
  countRender?: (current: number, total: number) => string; // v4.20.0 仅支持 PreviewGroup
  scaleStep?: number;
  forceRender?: boolean;
};
