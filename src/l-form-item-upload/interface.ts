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
    | 'accept'
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
    renderUploadChildren?: (opts: {
      fileList: RcFile[];
      loading: boolean;
      avatarUrl?: string;
      avatarDom?: React.ReactNode;
      buttonDom?: React.ReactNode;
      draggerDom?: React.ReactNode;
    }) => React.ReactNode;
    /**
     *antd 上传组件的 Props
     */
    uploadProps?: UploadProps;
    multiple?: UploadProps['multiple'];
    headers?: UploadProps['headers'];
  } & Pick<LFormProps, 'disabled'>;
