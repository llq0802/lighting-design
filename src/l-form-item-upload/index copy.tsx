import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { FC } from 'react';
import { useContext, useMemo } from 'react';
import UploadAvatar from './base/UploadAvatar';
import UploadDefault from './base/UploadDefault';
import UploadDragger from './base/UploadDragger';
import UploadImage from './base/UploadImage';
import type { LFormItemUploadProps } from './interface';

const LFormItemUpload: FC<LFormItemUploadProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size,
  disabled = false,

  uploadType = 'default',
  isCrop = false,
  isSerial = false,
  cropProps = {
    children: null,
    modalOk: '确定',
    modalCancel: '取消',
  },
  onUpload,
  fileTypeMessage,
  fileSizeMessage,
  buttonIcon,
  buttonText,
  buttonProps,
  onGetPreviewUrl,
  maxSize,
  maxCount,
  multiple = false,
  action,
  accept,
  uploadProps,
  previewModalProps,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  const UploadComp = useMemo(() => {
    if (uploadType === 'image') {
      return UploadImage;
    }
    if (uploadType === 'avatar') {
      return UploadAvatar;
    }
    if (uploadType === 'dragger') {
      return UploadDragger;
    }
    return UploadDefault;
  }, [uploadType]);

  return (
    <LFormItem
      valuePropName="fileList"
      getValueFromEvent={(value: any) => {
        if (Array.isArray(value)) return value;
        return value?.fileList ?? [];
      }}
      {...restProps}
    >
      <UploadComp
        disabled={disabled || formDisabled}
        isSerial={isSerial}
        isCrop={isCrop}
        cropProps={cropProps}
        buttonText={buttonText}
        buttonIcon={buttonIcon}
        buttonProps={buttonProps}
        action={action}
        accept={accept}
        onUpload={onUpload}
        fileTypeMessage={fileTypeMessage}
        fileSizeMessage={fileSizeMessage}
        previewModalProps={previewModalProps}
        onGetPreviewUrl={onGetPreviewUrl}
        maxSize={maxSize}
        maxCount={maxCount}
        multiple={multiple}
        {...uploadProps}
      />
    </LFormItem>
  );
};

export default LFormItemUpload;
export * from './interface';
