import type { ButtonProps, UploadProps } from 'antd';
import type { ImgCropProps } from 'antd-img-crop';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { ReactNode } from 'react';
import type { UploadWrapperProps } from './base/UploadWrapper';

export type LFormItemUploadProps = LFormItemProps &
  Pick<
    UploadWrapperProps,
    | 'accept'
    | 'action'
    | 'onUpload'
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
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemUploadProps
     */
    uploadType?: 'image' | 'default' | 'avatar' | 'dragger';
    /**
     *antd 上传组件的 Props
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemUploadProps
     */
    uploadProps?: UploadProps;

    /**
     *Button 的 Props 在uploadType为'default'时生效
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemUploadProps
     */
    buttonProps?: ButtonProps;

    /**
     *按钮图标，不同内建类型有不一样的默认值。
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemUploadProps
     */
    buttonIcon?: ReactNode;

    /**
     *按钮文本 在uploadType为'default'或'dragger'时生效
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemUploadProps
     */
    buttonText?: ReactNode;

    /**
     *是否需要裁剪  在uploadType为'default'或'dragger'时只能上传图片
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemUploadProps
     */
    isCrop?: boolean;
    /**
     *额外的裁剪属性
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemUploadProps
     *@see 参考 https://github.com/nanxiaobei/antd-img-crop#props
     */
    cropProps?: Omit<ImgCropProps, 'children'>;
    /**
     *是否是串行上传。
     * - true 为串行  false 为并行
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemUploadProps
     */
    isSerial?: boolean;
  };
