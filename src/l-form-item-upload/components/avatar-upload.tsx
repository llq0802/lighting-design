import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useUnmount } from 'ahooks';
import { IMAGES_SUFFIX } from 'lighting-design/constants';
import { createFileUrl, removeFileUrl, uniqueId } from 'lighting-design/utils';
import React, { useMemo, useState } from 'react';
import BaseUpload from './base-upload';

const AvatarUpload: React.FC = ({ ...props }) => {
  const uniqueKey = useMemo(() => uniqueId(), []);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>('');

  useUnmount(() => {
    removeFileUrl(uniqueKey);
  });

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const innerDom = imageUrl ? (
    <img src={imageUrl} alt="avatar" data-avatar-upload style={{ width: '100%' }} />
  ) : (
    uploadButton
  );

  return (
    <BaseUpload
      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
      accept={IMAGES_SUFFIX}
      listType="picture-circle"
      {...props}
      showUploadList={false}
      maxCount={1}
      onUploading={() => {
        setImageUrl('');
        setLoading(true);
      }}
      onSuccess={(info) => {
        const url = createFileUrl(uniqueKey, info.file.uid, info.file?.originFileObj!);
        setImageUrl(url);
        setLoading(false);
      }}
      onError={(info) => {
        console.log('===info==>', info);
        setLoading(false);
        const url = createFileUrl(uniqueKey, info.file.uid, info.file?.originFileObj!);
        setImageUrl(url);
      }}
    >
      {innerDom}
    </BaseUpload>
  );
};

export default AvatarUpload;
