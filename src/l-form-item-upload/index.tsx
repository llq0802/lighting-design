import LFormItem from 'lighting-design/l-form-item';
import type { FC } from 'react';
import { useMemo } from 'react';
import AvatarUpload from './components/avatar-upload';
import type { LFormItemUploadProps } from './interface';

const LFormItemUpload: FC<LFormItemUploadProps> = ({
  size,
  disabled,
  uploadType = 'avatar',
  uploadProps,
  ...restProps
}) => {
  const UploadComp = useMemo(() => {
    // if (uploadType === 'image') {
    //   return UploadImage;
    // }
    // if (uploadType === 'avatar') {
    //   return AvatarUpload;
    // }
    // if (uploadType === 'dragger') {
    //   return UploadDragger;
    // }
    // return UploadDefault;
    return AvatarUpload;
  }, [uploadType]);

  const baseProps = {
    size,
    disabled,
    ...uploadProps,
  };

  return (
    <LFormItem
      valuePropName="fileList"
      getValueFromEvent={(value: any) => {
        if (Array.isArray(value)) return value;
        return value?.fileList ?? [];
      }}
      {...restProps}
    >
      <UploadComp {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemUpload;
export * from './interface';
