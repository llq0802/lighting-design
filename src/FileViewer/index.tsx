import { useControllableValue } from 'ahooks';
import type { ModalProps } from 'antd';
import { Image, Modal } from 'antd';
import classnames from 'classnames';
import type { ReactNode } from 'react';
import type { FileViewProps } from './FileView';
import FileView from './FileView';
import './index.less';
import FileViewerPictureCard from './PictureCard';

export interface LFileViewerProps
  extends ModalProps,
    Omit<FileViewProps, 'url'> {
  /**
   * image 类型的配置
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
   */
  imagePreview?: LImagePreviewProps;
  /**
   * 文件地址
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
   *@type {string[]}
   *@example url={['地址1','地址2']}
   */
  url: string[] | string;
  /**
   * 是否打开(受控)
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
   * @type {?boolean}
   * @memberof LFileViewerProps
   */
  open?: boolean;
  /**
   *默认是否打开
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
   *@type {?boolean}
   *@memberof LFileViewerProps
   */
  defaultOpen?: boolean;
  /**
   * 默认是否打开
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.18
   *@type { (open: boolean) => void }
   *@memberof LFileViewerProps
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

const noneStyle = { display: 'none' };

function LFileViewer(props: LFileViewerProps) {
  const {
    url,
    fileName,
    fileType,
    className,
    imagePreview,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    open: outOpen,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onOpenChange: outOnOpenChange,
    ...restProps
  } = props;

  const [open, setOpen] = useControllableValue<boolean>(props, {
    defaultValuePropName: 'defaultOpen',
    defaultValue: false,
    valuePropName: 'open',
    trigger: 'onOpenChange',
  });
  if (fileType === 'image') {
    return (
      <div style={noneStyle}>
        <Image.PreviewGroup
          preview={{
            visible: open,
            onVisibleChange: (v) => setOpen(v),
            ...imagePreview,
          }}
        >
          {(url as string[])?.map((itemUrl, i) => (
            <Image src={itemUrl} key={i} />
          ))}
        </Image.PreviewGroup>
      </div>
    );
  }

  return (
    <Modal
      open={open}
      title={fileName}
      centered
      maskClosable={false}
      width={fileType === 'pdf' ? '90%' : void 0}
      footer={null}
      {...restProps}
      style={{ maxWidth: '90%', ...restProps.style }}
      className={classnames('lightd-file-viewer', className)}
    >
      <FileView url={url as string} fileType={fileType} fileName={fileName} />
    </Modal>
  );
}

LFileViewer.PictureCard = FileViewerPictureCard;

export default LFileViewer;
