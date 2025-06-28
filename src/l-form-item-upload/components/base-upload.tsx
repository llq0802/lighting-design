import { ConfigProvider, Upload, type UploadProps } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import type { RcFile } from 'antd/es/upload';
import type { FC } from 'react';
import { useMemo, useRef } from 'react';
import { checkFileSize, checkFileType } from '../../utils/upload';

export type LUploadProps = {
  dragger?: boolean;
  /**发到后台的文件参数名 */
  uploadFieldName?: string;
  /** 选择文件后是否自动上传 */
  autoUpload?: boolean;
  /**最大文件大小，默认为 100MB，值为 0 时不限制大小 */
  maxSize?: number;
  /**自定义上传函数 */
  onUpload?: (opts: Parameters<UploadProps['customRequest'] & {}>[0]) => any;
  // 是否串行上传
  isSerial?: boolean;
  /**超出最大数量回调 */
  onExceedMaxCount?: (file: RcFile, fileList: RcFile[]) => void;
  /**超出文件大小限制回调 */
  onExceedFileSize?: (file: RcFile, fileList: RcFile[]) => void;
  /** 不支持的文件类型回调 */
  onNoSupportFileType?: (file: RcFile, fileList: RcFile[]) => void;
  /**上传失败回调 */
  onError?: UploadProps['onChange'];
  /**上传成功回调 */
  onSuccess?: UploadProps['onChange'];
  /**正在上传回调 */
  onUploading?: UploadProps['onChange'];
  /**最大上传数量 */
  maxCount?: number;
} & UploadProps;

const BaseUpload: FC<LUploadProps> = (props) => {
  const {
    dragger = false,
    maxSize = 1024 * 1024 * 100,
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
    autoUpload = true,
    customRequest,
    onChange,
    ...restProps
  } = props;
  // 标识当前是否正在上传
  const uploadingRef = useRef(false);
  const uploadQueueRef = useRef<any[]>([]);

  // 上传前验证
  const innerBeforeUpload: UploadProps['beforeUpload'] = (file, fileList) => {
    if (beforeUpload) {
      return beforeUpload(file, fileList);
    }

    if (maxCount && fileList?.length > maxCount) {
      console.log('===isSupportFileType==>');
      onExceedMaxCount?.(file, fileList);
      return Upload.LIST_IGNORE;
    }
    // 检查是否支持文件类型
    const isSupportFileType = checkFileType(file, accept);
    if (!isSupportFileType) {
      onNoSupportFileType?.(file, fileList);
      return Upload.LIST_IGNORE;
    }

    // 检查是否超过文件大小
    const isMoreThanFileSize = checkFileSize(file, maxSize);
    if (maxSize >= 0 && isMoreThanFileSize) {
      onExceedFileSize?.(file, fileList);
      return Upload.LIST_IGNORE;
    }

    // 若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，
    // 可以返回 Upload.LIST_IGNORE， 此时列表中将不展示此文件。
    // action没有传地址则停止上传(不会生产status,percent ,response等)
    return autoUpload;
  };

  const innerCustomRequest: UploadProps['customRequest'] = (opts) => {
    if (customRequest) {
      return customRequest(opts);
    }

    if (isSerial) {
      const queueUpload = () => {
        if (uploadingRef.current || uploadQueueRef.current.length === 0) return;
        uploadingRef.current = true;
        performUpload(uploadQueueRef.current.shift());
      };

      const performUpload = (currentOpts: any) => {
        const handleUploadSuccess = (result: any) => {
          currentOpts.onSuccess?.(result);
          uploadingRef.current = false;
          queueUpload();
        };

        const handleUploadError = (error: any) => {
          currentOpts.onError?.(error);
          uploadingRef.current = false;
          queueUpload();
        };

        const uploadRet = onUpload?.(currentOpts);
        currentOpts.onProgress?.({ percent: 99 });

        if (uploadRet instanceof Promise) {
          uploadRet.then(handleUploadSuccess).catch(handleUploadError);
        } else {
          handleUploadSuccess(uploadRet);
        }
      };

      // 加入上传队列
      uploadQueueRef.current.push(opts);

      // 启动队列
      if (!uploadingRef.current) {
        queueUpload();
      }
      return;
    }

    // 并行上传
    const uploadRet = onUpload?.(opts);
    opts.onProgress?.({ percent: 99 });

    if (uploadRet instanceof Promise) {
      uploadRet
        .then(opts.onSuccess)
        .catch(opts.onError)
        .finally(() => {
          uploadingRef.current = false;
        });
    } else {
      opts.onSuccess?.(uploadRet);
      uploadingRef.current = false;
    }
  };

  const innerChange: UploadProps['onChange'] = (info) => {
    onChange?.(info);
    if (info.file.status === 'error') {
      onError?.(info);
      return;
    }

    if (info.file.status === 'uploading') {
      onUploading?.(info);
      return;
    }

    if (info.file.status === 'done') {
      onSuccess?.(info);
      return;
    }
    // removed todo...
  };
  const UploadContent = useMemo(() => (dragger ? Upload.Dragger : Upload), [dragger]);
  return (
    <ConfigProvider locale={zhCN}>
      <UploadContent
        withCredentials
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
