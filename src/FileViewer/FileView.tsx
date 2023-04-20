import type { FunctionComponent } from 'react';
import MediaViewer from './MediaViewer';

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
}

const FileView: FunctionComponent<FileViewProps> = ({
  fileName,
  url,
  fileType,
}) => {
  if (fileType === 'audio') {
    return <MediaViewer url={url} mediaType="audio" />;
  }
  if (fileType === 'video') {
    return <MediaViewer url={url} mediaType="video" />;
  }
  if (fileType === 'pdf') {
    // ref: https://caniuse.com/?search=createObjectURL
    // Created blob url can't be used as object or iframe src
    if ((!isIE || url.indexOf('blob:') !== 0) && isPC()) {
      return (
        <iframe
          src={url}
          style={{ border: '0 none', width: '100%', height: '80vh' }}
          className="lightd-file-viewer-iframe"
        />
      );
    }
  }

  return (
    <div
      className="lightd-file-viewer-download"
      style={{ textAlign: 'center' }}
    >
      <span style={{ marginRight: 8 }}>该文件不支持预览，你可尝试</span>
      <a href={url} download={fileName}>
        点击下载
      </a>
    </div>
  );
};

export default FileView;
