import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useUnmount } from 'ahooks';
import { IMAGES_SUFFIX } from 'lighting-design/constants';
import { createFileUrl, removeFileUrl, uniqueId } from 'lighting-design/utils';
import React, { useMemo, useState } from 'react';
import BaseUpload from './base-upload';

export const font = { fontSize: 30 };

const AvatarUpload: React.FC<any> = ({ renderUploadChildren, ...props }) => {
  const { fileList, onUploading, onSuccess, onError } = props;
  const uniqueKey = useMemo(() => uniqueId(), []);
  const [loading, setLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string>(fileList?.[0]?.url || fileList?.[0]?.thumbUrl || '');
  useUnmount(() => {
    removeFileUrl(uniqueKey);
  });

  const buttonDom = loading ? <LoadingOutlined style={font} /> : <PlusOutlined style={font} />;
  const avatarDom = <img src={avatarUrl} alt="avatar" data-avatar-upload style={{ width: '100%' }} />;

  const innerDom = renderUploadChildren
    ? renderUploadChildren({
        loading,
        fileList,
        avatarUrl,
        avatarDom,
        buttonDom,
      })
    : avatarUrl
    ? avatarDom
    : buttonDom;

  return (
    <BaseUpload
      accept={IMAGES_SUFFIX}
      listType="picture-card"
      children={innerDom}
      {...props}
      showUploadList={false}
      maxCount={1}
      onUploading={(info) => {
        setAvatarUrl('');
        setLoading(true);
        onUploading?.(info);
      }}
      onSuccess={(info) => {
        const url = createFileUrl(uniqueKey, info.file.uid, info.file?.originFileObj!);
        setAvatarUrl(url);
        setLoading(false);
        onSuccess?.(info);
      }}
      onError={(info) => {
        setLoading(false);
        onError?.(info);
      }}
    />
  );
};

export default AvatarUpload;
