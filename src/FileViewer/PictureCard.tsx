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

function getFileThumbUrl(file): string {
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
  const [fileInfo, setFileInfo] = useState<any>({});
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
        className={classnames('lightd-file-viewer-picture-card', className)}
        fileList={innerFileList}
        listType="picture-card"
        onPreview={(file) => {
          setFileInfo(file);
          setOpen(true);
        }}
        showUploadList={{ showRemoveIcon: false }}
        // previewFile={async (file) => {
        //   return getFileThumbUrl(file);
        // }}
        {...uploadProps}
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
