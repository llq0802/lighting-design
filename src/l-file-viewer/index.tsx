import { useControllableValue } from 'ahooks';
import { Image, Modal } from 'antd';
import classnames from 'classnames';
import { emptyObject } from 'lighting-design/constants';
import FileView from './FileView';
import FileViewerPictureCard from './PictureCard';
import './index.less';
import type { LFileViewerProps } from './interface';

const noneStyle = { display: 'none' };

function LFileViewer(props: LFileViewerProps) {
  const {
    url,
    fileName,
    fileType,
    className,
    imagePreview,
    contentProps = emptyObject,
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
      destroyOnClose
      open={outOpen}
      title={fileName}
      centered
      maskClosable={false}
      width={fileType === 'pdf' ? '70vw' : void 0}
      footer={false}
      {...restProps}
      className={classnames('lightd-file-viewer', className)}
    >
      <FileView
        contentProps={contentProps}
        url={url as string}
        fileType={fileType}
        fileName={fileName}
      />
    </Modal>
  );
}
LFileViewer.PictureCard = FileViewerPictureCard;
export default LFileViewer;
export * from './interface';
