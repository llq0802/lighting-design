import { UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState, type FC } from 'react';
import BaseUpload from './base-upload';

const DefaultUpload: FC<Record<string, any>> = ({ renderUploadChildren, ...props }) => {
  const { fileList, onUploading, onSuccess, onError } = props;
  const [loading, setLoading] = useState(false);

  const buttonDom = (
    <Button type="primary" icon={<UploadOutlined />}>
      上传
    </Button>
  );

  const innerDom = renderUploadChildren ? renderUploadChildren({ loading, fileList, buttonDom }) : buttonDom;

  const dom = (
    <BaseUpload
      children={innerDom}
      {...props}
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

export default DefaultUpload;
