import { PlusOutlined } from '@ant-design/icons';
import { useUnmount } from 'ahooks';
import { Image, type UploadFile } from 'antd';
import { IMAGES_SUFFIX } from 'lighting-design/constants';
import { createFileUrl, removeFileUrl } from 'lighting-design/utils';
import { uniqueId } from 'lodash-es';
import { useMemo, useState, type FC } from 'react';
import { font } from './avatar-upload';
import BaseUpload from './base-upload';
const ImageUpload: FC<Record<string, any>> = ({ renderUploadChildren, ...props }) => {
  const { fileList, onUploading, onSuccess, onError, maxCount, onPreview } = props;
  const [loading, setLoading] = useState(false);

  const buttonButton = <PlusOutlined style={font} />;

  const showButton = () => {
    if (!maxCount || maxCount === 1) {
      return buttonButton;
    }
    if (fileList?.length >= maxCount) {
      return null;
    }
    return buttonButton;
  };

  const innerDom = renderUploadChildren ? renderUploadChildren({ loading, fileList, buttonButton }) : showButton();

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const uniqueKey = useMemo(() => uniqueId(), []);
  const handlePreview = async (file: UploadFile) => {
    const imageUrl = file?.url || file?.thumbUrl;
    if (imageUrl) {
      setPreviewImage(imageUrl);
      setPreviewOpen(true);
      return;
    }
    const ret = createFileUrl(uniqueKey, file.uid || uniqueId(), file?.originFileObj!);
    setPreviewImage(ret);
    setPreviewOpen(true);
  };

  useUnmount(() => {
    removeFileUrl(uniqueKey);
  });

  const dom = (
    <BaseUpload
      accept={IMAGES_SUFFIX}
      children={innerDom}
      listType="picture-card"
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
      onPreview={(file) => {
        handlePreview(file);
        onPreview?.(file);
      }}
    />
  );

  return (
    <>
      {dom}
      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};

export default ImageUpload;
