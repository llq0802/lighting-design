import type { ModalProps } from 'antd';
import { Modal } from 'antd';
import classNames from 'classnames';
import type { FileViewProps } from './FileView';
import FileView from './FileView';
import './index.less';

export interface LFileViewerProps extends ModalProps, FileViewProps {}

function LFileViewer({ url, fileName, fileType, open, className, ...restProps }: LFileViewerProps) {
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
      className={classNames('lightd-file-viewer', className)}
    >
      <FileView url={url} fileType={fileType} fileName={fileName} />
    </Modal>
  );
}

export default LFileViewer;
