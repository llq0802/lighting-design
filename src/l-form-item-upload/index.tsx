import LFormItem from 'lighting-design/l-form-item';
import type { FC } from 'react';
import AvatarUpload from './components/avatar-upload';
import DefaultUpload from './components/default-upload';
import DraggerUpload from './components/dragger-upload';
import ImageUpload from './components/image-upload';
import type { LFormItemUploadProps } from './interface';

const LFormItemUpload: FC<LFormItemUploadProps> = ({
  disabled,
  action,
  maxCount,
  maxSize,
  isSerial,
  onUploading,
  onError,
  onSuccess,
  onNoSupportFileType,
  onExceedFileSize,
  onExceedMaxCount,
  uploadType,
  uploadFieldName,
  onUpload,
  autoUpload,
  renderUploadChildren,
  uploadProps,

  ...restProps
}) => {
  const baseProps = {
    disabled,
    action,
    maxCount,
    maxSize,
    isSerial,
    onUploading,
    onError,
    onSuccess,
    onNoSupportFileType,
    onExceedFileSize,
    onExceedMaxCount,
    uploadType,
    uploadFieldName,
    onUpload,
    autoUpload,
    uploadProps,
    renderUploadChildren,
    ...uploadProps,
  };

  const renderUploadDom = () => {
    if (!uploadType || uploadType === 'default') {
      return <DefaultUpload {...baseProps} />;
    }
    if (uploadType === 'dragger') {
      return <DraggerUpload {...baseProps} />;
    }
    if (uploadType === 'image') {
      return <ImageUpload {...baseProps} />;
    }
    return <AvatarUpload {...baseProps} />;
  };

  return (
    <LFormItem
      getValueFromEvent={(value: any) => {
        if (Array.isArray(value)) return value;
        return value?.fileList ?? [];
      }}
      normalize={(value: any) => {
        const values = Array.isArray(value) ? value : value?.fileList || [];
        return values?.filter(Boolean).filter((v: any) => v?.status !== 'error');
      }}
      {...restProps}
      valuePropName="fileList"
    >
      {renderUploadDom()}
    </LFormItem>
  );
};

export default LFormItemUpload;
export * from './interface';
