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
  uploadType,
  uploadFieldName,
  onUpload,
  autoUpload,
  uploadProps,
  renderUploadChildren,
  renderUploadAvatar,

  ...restProps
}) => {
  const baseProps = {
    disabled,
    action,
    onUpload,
    autoUpload,
    uploadFieldName,
    ...uploadProps,
  };

  const renderUploadDom = () => {
    if (!uploadType || uploadType === 'default') {
      return <DefaultUpload {...baseProps} renderChildren={renderUploadChildren} />;
    }
    if (uploadType === 'dragger') {
      return <DraggerUpload {...baseProps} renderChildren={renderUploadChildren} />;
    }
    if (uploadType === 'image') {
      return <ImageUpload {...baseProps} renderChildren={renderUploadChildren} />;
    }
    return <AvatarUpload {...baseProps} renderAvatar={renderUploadAvatar} />;
  };

  return (
    <LFormItem
      valuePropName="fileList"
      getValueFromEvent={(value: any) => {
        if (Array.isArray(value)) return value;
        return value?.fileList ?? [];
      }}
      normalize={(value: any) => {
        const values = Array.isArray(value) ? value : value?.fileList || [];
        return values?.filter(Boolean).filter((v: any) => v?.status !== 'error');
      }}
      {...restProps}
    >
      {renderUploadDom()}
    </LFormItem>
  );
};

export default LFormItemUpload;
export * from './interface';
