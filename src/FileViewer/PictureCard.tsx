import { Upload } from 'antd';
import type { UploadProps } from 'antd/lib/upload';
import classnames from 'classnames';
import type { FC } from 'react';
import { useMemo, useState } from 'react';
import type { LFileViewerProps } from '.';
import LFileViewer from '.';
import IconAudio from './images/icon-audio.png';
import IconExcel from './images/icon-excel.png';
import IconFile from './images/icon-file.png';
import IconPdf from './images/icon-pdf.png';
import IconPpt from './images/icon-ppt.png';
import IconVideo from './images/icon-video.png';
import IconWord from './images/icon-word.png';
import IconZip from './images/icon-zip.png';

function getFileThumbUrl(file: Record<string, any>): string {
  const { fileType } = file;

  if (fileType === 'image') {
    return file.url || IconFile;
  }
  if (fileType === 'audio') {
    return IconAudio;
  }
  if (fileType === 'video') {
    return IconVideo;
  }
  if (fileType === 'pdf') {
    return IconPdf;
  }
  if (fileType === 'zip') {
    return IconZip;
  }
  if (fileType === 'ppt') {
    return IconPpt;
  }
  if (fileType === 'docx' || fileType === 'doc') {
    return IconWord;
  }
  if (fileType === 'xls' || fileType === 'xlsx') {
    return IconExcel;
  }
  return IconFile;
}

type PictureItem = {
  url: string;
  fileName: string;
  fileType: string;
  thumbUrl?: string;
};

export type PictureCardProps = {
  fileList: PictureItem[];
  showThumbImage?: boolean;
  uploadProps?: UploadProps;
} & Omit<LFileViewerProps, 'url' | 'fileType'>;

const FileViewerPictureCard: FC<PictureCardProps> = ({
  fileList,
  showThumbImage = true,
  uploadProps,
  className,
  ...restProps
}) => {
  const [fileInfo, setFileInfo] = useState<{
    thumbUrl?: string | false;
    name: string;
    uid: string;
    url: string;
    fileName: string;
    fileType: string;
  }>({
    url: '',
    thumbUrl: '',
    name: '',
    uid: '',
    fileName: '',
    fileType: 'img',
  });
  const [open, setOpen] = useState(false);

  const innerFileList = useMemo(() => {
    return fileList.map((item, index: number) => ({
      ...item,
      thumbUrl: item?.thumbUrl || (showThumbImage && getFileThumbUrl(item)),
      name: item.fileName,
      uid: `${index}-lightd-uid`,
    }));
  }, [fileList]);

  return (
    <>
      <Upload
        // @ts-ignore
        fileList={innerFileList}
        listType="picture-card"
        showUploadList={{ showRemoveIcon: false }}
        {...uploadProps}
        className={classnames('lightd-file-viewer-picture-card', className)}
        onPreview={(file) => {
          // @ts-ignore
          setFileInfo({ ...file });
          setOpen(true);
          uploadProps?.onPreview?.(file);
        }}
      />
      <LFileViewer
        open={open}
        onOpenChange={setOpen}
        onCancel={() => setOpen(false)}
        {...restProps}
        {...fileInfo}
        url={fileInfo.fileType === 'image' ? [fileInfo.url] : fileInfo.url}
      />
    </>
  );
};

export default FileViewerPictureCard;
