import { useControllableValue } from 'ahooks';
import type { ModalProps } from 'antd';
import { Image, Modal } from 'antd';
import classnames from 'classnames';
import type { ReactNode } from 'react';
import type { FileViewProps } from './FileView';
import FileView from './FileView';
import './index.less';

export interface LFileViewerProps extends ModalProps, Omit<FileViewProps, 'url'> {
  onOpenChange?: (open: boolean) => void;
  imagePreview?: LImagePreviewProps;
  url: string[] | string;
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

function LFileViewer({
  url,
  fileName,
  fileType,
  className,
  imagePreview,
  ...restProps
}: LFileViewerProps) {
  const [open, setOpen] = useControllableValue<boolean>(restProps, {
    defaultValuePropName: 'defaultOpen',
    defaultValue: false,
    valuePropName: 'open',
    trigger: 'onOpenChange',
  });
  if (fileType === 'image') {
    return (
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup
          preview={{
            visible: open,
            onVisibleChange: (v) => setOpen(v),
            ...imagePreview,
          }}
        >
          {(url as string[])?.map((itemUrl, i) => {
            // eslint-disable-next-line react/no-array-index-key
            return <Image src={itemUrl} key={i} />;
          })}
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
      width={fileType === 'pdf' ? '90%' : undefined}
      footer={null}
      {...restProps}
      style={{ maxWidth: '90%', ...restProps.style }}
      className={classnames('lightd-file-viewer', className)}
    >
      <FileView url={url as string} fileType={fileType} fileName={fileName} />
    </Modal>
  );
}

export default LFileViewer;
