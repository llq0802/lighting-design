import { InboxOutlined } from '@ant-design/icons';
import { useState, type FC } from 'react';
import BaseUpload from './base-upload';

const DraggerUpload: FC<Record<string, any>> = ({ renderUploadChildren, ...props }) => {
  const { fileList, onUploading, onSuccess, onError } = props;
  const [loading, setLoading] = useState(false);

  const draggerDom = (
    <>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text" style={{ margin: `16px 0` }}>
        单击或拖动文件到此区域进行上传
      </p>
    </>
  );
  const innerDom = renderUploadChildren ? renderUploadChildren({ loading, fileList, draggerDom }) : draggerDom;

  const dom = (
    <BaseUpload
      children={innerDom}
      {...props}
      dragger
      onUploading={(info) => {
        setLoading(true);
        onUploading?.(info);
      }}
      onSuccess={(info) => {
        setLoading(false);
        onSuccess?.(info);
      }}
      onError={(info) => {
        setLoading(false);
        onError?.(info);
      }}
    />
  );

  return dom;
};

export default DraggerUpload;
