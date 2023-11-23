import { useUnmount } from 'ahooks';
import { Typography } from 'antd';
import classnames from 'classnames';
import type { FunctionComponent } from 'react';
import MediaViewer from './MediaViewer';

const { Link } = Typography;

const isIE = window.ActiveXObject || 'ActiveXObject' in window;
const isPC = () => window.innerWidth > 768;

export interface FileViewProps {
  /** 文件名 */
  fileName?: string;
  url: string;
  /**
   *  'image' | 'audio' | 'video' | 'pdf' | 'excel' | 'word'
   */
  fileType: string;
  contentProps?: Record<string, any>;
}

const FileView: FunctionComponent<FileViewProps> = ({ contentProps, fileName, url, fileType }) => {
  if (fileType === 'audio') {
    return <MediaViewer url={url} mediaType="audio" contentProps={contentProps} />;
  }
  if (fileType === 'video') {
    return <MediaViewer url={url} mediaType="video" contentProps={contentProps} />;
  }
  if (fileType === 'pdf') {
    // ref: https://caniuse.com/?search=createObjectURL
    // Created blob url can't be used as object or iframe src
    if (!isIE && isPC()) {
      return (
        <iframe
          src={url}
          {...contentProps}
          ref={contentProps?.ref}
          style={{
            border: 'none',
            width: '100%',
            height: '80vh',
            ...contentProps?.style,
          }}
          className={classnames('lightd-file-viewer-iframe', contentProps?.className)}
        />
      );
    }
  }
  useUnmount(() => {
    if (url.startsWith('blob:')) {
      URL.revokeObjectURL(url);
    }
  });

  return (
    <div className="lightd-file-viewer-download">
      <span className="lightd-file-viewer-download-desc">该文件不支持预览，你可尝试</span>
      <Link href={url} title={fileName} download={fileName} {...contentProps}>
        <b>点击下载</b>
      </Link>
    </div>
  );
};

export default FileView;
