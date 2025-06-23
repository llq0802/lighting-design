import { useMemoizedFn } from 'ahooks';
import { ConfigProvider, Upload, type UploadProps } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import type { RcFile } from 'antd/lib/upload';
import type { FC } from 'react';
import { useMemo, useRef } from 'react';
import { checkFileSize, checkFileType } from '../../utils/upload';
import './styles.less';

// 定义 BaseUpload 的 Props 类型
type BaseUploadProps = {
  uploadFieldName?: string;
  // 是否启用拖拽上传
  dragger?: boolean;
  // 文件最大大小，默认为50MB
  maxSize?: number;
  // 自定义上传函数
  onUpload?: (file: RcFile) => any;
  // 是否串行上传
  isSerial?: boolean;
  // 超出最大数量回调
  onExceedMaxCount?: () => void;
  // 超出文件大小限制回调
  onExceedFileSize?: () => void;
  // 不支持的文件类型回调
  onNoSupportFileType?: () => void;
  // 上传失败回调
  onError?: UploadProps['onChange'];
  // 上传成功回调
  onSuccess?: UploadProps['onChange'];
  // 正在上传回调
  onUploading?: UploadProps['onChange'];
  // 最大上传数量
  maxCount?: number;
} & UploadProps;

const BaseUpload: FC<BaseUploadProps> = (props) => {
  const {
    dragger = false,
    maxSize = 1024 * 1024 * 50,
    uploadFieldName,
    isSerial,
    onExceedMaxCount,
    onExceedFileSize,
    onNoSupportFileType,
    onError,
    onSuccess,
    onUploading,
    onUpload,
    //
    maxCount,
    accept,
    action,
    beforeUpload,
    customRequest,
    onChange,
    ...restProps
  } = props;

  // 标识正在上传
  const uploadingRef = useRef(false);

  // 上传前验证
  const innerBeforeUpload = (file: RcFile, fileList: RcFile[]) => {
    if (beforeUpload) {
      return beforeUpload(file, fileList);
    }

    if (maxCount > fileList?.length) {
      onExceedMaxCount?.();
      return Upload.LIST_IGNORE;
    }
    // 检查是否支持文件类型
    const isSupportFileType = checkFileType(file, accept);
    if (!isSupportFileType) {
      onNoSupportFileType?.();
      return Upload.LIST_IGNORE;
    }

    // 检查是否超过文件大小
    const isMoreThanFileSize = checkFileSize(file, maxSize);
    if (isMoreThanFileSize) {
      onExceedFileSize?.();
      return Upload.LIST_IGNORE;
    }
    // 若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，
    // 可以返回 Upload.LIST_IGNORE， 此时列表中将不展示此文件。
    // action没有传地址则停止上传(不会生产status,percent ,response等)
    return !!action || !!onUpload || !!customRequest;
  };

  // 自定义上传
  const innerCustomRequest = useMemoizedFn((obj: any) => {
    if (customRequest) {
      return customRequest(obj);
    }
    if (isSerial) {
      let timer: any = null;
      // 队列串行上传
      function queueUpload() {
        if (!uploadingRef.current) {
          uploadingRef.current = true;
          clearTimeout(timer);
          setTimeout(() => {
            obj.onProgress?.({ percent: 99 });
            const uploadRet = onUpload?.(obj.file);
            if (uploadRet instanceof Promise) {
              uploadRet
                .then(obj.onSuccess)
                .catch(obj.onError)
                .finally(() => {
                  uploadingRef.current = false;
                });
            } else {
              obj.onSuccess(uploadRet);
              uploadingRef.current = false;
            }
          });
        } else {
          timer = setTimeout(queueUpload, 100);
        }
      }
      queueUpload();
    } else {
      // 并行上传
      obj.onProgress?.({ percent: 99 });
      const uploadRet = onUpload?.(obj.file);
      if (uploadRet instanceof Promise) {
        uploadRet
          .then(obj.onSuccess)
          .catch(obj.onError)
          .finally(() => {
            uploadingRef.current = false;
          });
      } else {
        obj.onSuccess(uploadRet);
        uploadingRef.current = false;
      }
    }
  });

  const innerChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'error') {
      onError?.(info);
      return;
    }

    if (info.file.status === 'uploading') {
      onUploading?.(info);
      return;
    }

    if (info.file.status === 'done') {
      onChange?.(info);
      onSuccess?.(info);
      return;
    }
    // removed
  };
  const UploadContent = useMemo(() => (dragger ? Upload.Dragger : Upload), [dragger]);

  return (
    <ConfigProvider locale={zhCN}>
      <UploadContent
        customRequest={!action ? innerCustomRequest : void 0}
        accept={accept}
        action={action}
        maxCount={maxCount}
        beforeUpload={innerBeforeUpload}
        onChange={innerChange}
        name={uploadFieldName}
        {...restProps}
      />
    </ConfigProvider>
  );
};

export default BaseUpload;
