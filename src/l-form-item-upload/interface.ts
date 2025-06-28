import type { UploadProps } from 'antd';
import type { RcFile } from 'antd/es/upload';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';
import type React from 'react';
import type { LUploadProps } from './components/base-upload';

export type LFormItemUploadProps = LFormItemProps &
  Pick<
    LUploadProps,
    | 'action'
    | 'uploadFieldName'
    | 'autoUpload'
    | 'onUpload'
    | 'maxSize'
    | 'maxCount'
    | 'isSerial'
    | 'onUploading'
    | 'onError'
    | 'onSuccess'
    | 'onNoSupportFileType'
    | 'onExceedFileSize'
    | 'onExceedMaxCount'
  > & {
    /**
     *上传组件内置类型
     */
    uploadType?: 'image' | 'default' | 'avatar' | 'dragger';
    /**
     *antd 上传组件的 Props
     */
    uploadProps?: UploadProps;
    renderUploadChildren?: (opts: {
      fileList: RcFile[];
      loading: boolean;
      maxCount?: number;
      imageUrl?: string;
      buttonDom?: React.ReactNode;
      imageDom?: React.ReactNode;
    }) => React.ReactNode;
  } & Pick<LFormProps, 'disabled'>;
