import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { GetProp, UploadProps } from 'antd';
import { createFileUrl } from 'lighting-design/utils';
import React, { useState } from 'react';
import BaseUpload from './base-upload';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const AvatarUpload: React.FC = ({ ...props }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>('');

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <BaseUpload
      {...props}
      listType="picture-card"
      showUploadList={false}
      maxCount={1}
      onUploading={() => {
        setLoading(true);
      }}
      onSuccess={(info) => {
        const url = createFileUrl(info.file.uid, info.file.uid, info.file?.originFileObj!);
        setImageUrl(url);
        setLoading(false);
      }}
      onError={() => {
        setLoading(false);
      }}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
    </BaseUpload>
  );
};

export default AvatarUpload;
