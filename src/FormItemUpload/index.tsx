import type { ButtonProps, UploadProps } from 'antd';
import type { ImgCropProps } from 'antd-img-crop';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { FC, ReactNode } from 'react';
import { useContext, useMemo } from 'react';
import UploadAvatar from './base/UploadAvatar';
import UploadDefault from './base/UploadDefault';
import UploadDragger from './base/UploadDragger';
import UploadImage from './base/UploadImage';
import type { UploadWrapperProps } from './base/UploadWrapper';

const normFile = (value: any): any[] => {
  if (Array.isArray(value)) return value;
  return value?.fileList ?? [];
};

export type LFormItemUploadProps = LFormItemProps &
  Pick<
    UploadWrapperProps,
    | 'accept'
    | 'action'
    | 'onUpload'
    | 'disabled'
    | 'multiple'
    | 'fileTypeMessage'
    | 'fileSizeMessage'
    | 'maxSize'
    | 'maxCount'
    | 'onGetPreviewUrl'
    | 'previewModalProps'
    // | 'buttonProps'
  > & {
    /**
     *上传组件内置类型
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.10
     *@memberof LFormItemUploadProps
     */
    uploadType?: 'image' | 'default' | 'avatar' | 'dragger';
    /**
     *antd 上传组件的 Props
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.10
     *@memberof LFormItemUploadProps
     */
    uploadProps?: UploadProps;

    /**
     *Button 的 Props 在uploadType为'default'时生效
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.10
     *@memberof LFormItemUploadProps
     */
    buttonProps?: ButtonProps;

    /**
     *按钮图标，不同内建类型有不一样的默认值。
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.10
     *@memberof LFormItemUploadProps
     */
    buttonIcon?: ReactNode;

    /**
     *按钮文本 在uploadType为'default'或'dragger'时生效
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.10
     *@memberof LFormItemUploadProps
     */
    buttonText?: ReactNode;

    /**
     *是否需要裁剪  在uploadType为'default'或'dragger'时只能上传图片
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.10
     *@memberof LFormItemUploadProps
     */
    isCrop?: boolean;
    /**
     *额外的裁剪属性
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.10
     *@memberof LFormItemUploadProps
     *@see 参考 https://github.com/nanxiaobei/antd-img-crop#props
     */
    cropProps?: Omit<ImgCropProps, 'children'>;
    /**
     *是否是串行上传。  true 为串行  false 为并行
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.10
     *@memberof LFormItemUploadProps
     */
    isSerial?: boolean;
  };

const LFormItemUpload: FC<LFormItemUploadProps> = ({
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
  disabled,
  multiple = false,
  action,
  accept,
  uploadProps,
  previewModalProps,
  name, // formItem 字段
  required,
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
      name={name}
      required={required}
      valuePropName="fileList"
      getValueFromEvent={normFile}
      {...restProps}
    >
      <UploadComp
        isSerial={isSerial}
        isCrop={isCrop}
        cropProps={cropProps}
        buttonIcon={buttonIcon}
        buttonText={buttonText}
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
        disabled={disabled ?? formDisabled}
        multiple={multiple}
        {...uploadProps}
      />
    </LFormItem>
  );
};

export default LFormItemUpload;
