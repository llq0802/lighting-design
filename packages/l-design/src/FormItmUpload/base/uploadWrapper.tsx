import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import type { RcFile, UploadChangeParam, UploadFile } from 'antd/lib/upload';
import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import { useCallback, useMemo } from 'react';
import { checkFileSize, checkFileType } from '../../utils/upload';
import './styles.less';

const prefixCls = 'lightd-form-upload-wrapper';

export interface UploadWrapperProps extends UploadProps {
  fileTypeMessage?: string | false; // 文件类型错误提示
  fileSizeMessage?: string | false; // 文件超过最大尺寸提示
  maxCountMessage?: string | false; // 上传文件超过限制数量时提示

  onUpload?: (file: File) => Promise<object | undefined>; // 自定义文件上传

  maxSize?: number; // 单个文件最大尺寸，用于校验

  dragger?: boolean; // 支持拖拽

  // icon和title配置图标和文本内容
  icon?: ReactNode;
  title?: ReactNode;
}

const UploadWrapper: FC<UploadWrapperProps> = ({
  fileTypeMessage = '只支持上传x文件',
  fileSizeMessage = '文件必须小于x',
  dragger = false,
  icon,
  title,
  maxSize = 1024 * 1024 * 5,
  onUpload,
  onChange,

  maxCount,
  accept = 'image/*',
  className,
  disabled,
  action,
  beforeUpload,
  ...restProps
}) => {
  // 上传前验证
  const handleBeforeUpload = useCallback(
    (file: RcFile, fileList: RcFile[]) => {
      // 检查是否支持文件类型
      const isSupportFileType = checkFileType(file, accept);
      console.log(' isSupportFileType', isSupportFileType, fileTypeMessage);
      if (!isSupportFileType && fileTypeMessage) {
        message.error(fileTypeMessage.replace(/x/g, accept));
        return Upload.LIST_IGNORE;
      }
      // 检查是否超过文件大小
      const isLessThanFileSize = checkFileSize(file, maxSize);
      if (!isLessThanFileSize && fileSizeMessage) {
        message.error(fileSizeMessage.replace(/x/g, maxSize / 1024 / 1024 + 'M'));
        return Upload.LIST_IGNORE;
      }
      // 若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，
      // 可以返回 Upload.LIST_IGNORE， 此时列表中将不展示此文件。
      return beforeUpload ? beforeUpload(file, fileList) : !!action; // action没有传地址则停止上传(不会生产status, response等)
    },
    [accept, maxSize, beforeUpload, action, fileTypeMessage, fileSizeMessage],
  );

  // 处理自定义上传
  const handleUpload = useCallback(
    (file: UploadFile, fileList: UploadFile[]) => {
      const { uid } = file;
      const uploadRet = onUpload?.((file?.originFileObj || file) as File);
      if (uploadRet instanceof Promise) {
        uploadRet
          .then((res) => {
            const cloneFileList = fileList
              .filter((itemF) => itemF?.status !== 'removed')
              .map((item) => {
                if (item.uid === uid) {
                  item.status = 'done';
                  item.percent = 100;
                  item.response = res; // 将响应数据挂载到 response 上
                }
                return item;
              });
            onChange?.({
              file,
              fileList: cloneFileList,
            });
          })
          .catch((err) => {
            const cloneFileList = fileList
              .filter((item) => item.status !== 'removed')
              .map((item) => {
                if (item.uid === uid) {
                  const error = typeof err !== 'object' ? { message: err || '上传错误' } : err;
                  item.status = 'error';
                  item.percent = 100;
                  item.error = error;
                }
                return item;
              });
            onChange?.({
              file,
              fileList: cloneFileList,
            });
          });
      } else {
        const cloneFileList = fileList.map((fileItem) => {
          if (fileItem.uid === uid) {
            fileItem.percent = 100;
            fileItem.status = 'done';
          }
          return fileItem;
        });
        onChange?.({
          file,
          fileList: cloneFileList,
        });
      }
    },
    [onChange, onUpload],
  );

  // 处理change事件
  const handleChange = useCallback(
    ({ file, fileList }: UploadChangeParam) => {
      console.log(' handleChange', file, fileList);
      let cloneFileList = fileList.slice();
      if (!action && typeof onUpload === 'function') {
        cloneFileList = cloneFileList.map((fileItem) => {
          if (fileItem.uid === file.uid) {
            fileItem.status = 'uploading';
            fileItem.percent = 99.9;
          }
          return fileItem;
        });
        handleUpload(file, cloneFileList);
      }

      onChange?.({
        file,
        fileList: cloneFileList,
      });
    },
    [onChange, action, onUpload, handleUpload],
  );

  // 组件卸载时
  // useUnmount(() => {});

  const handlePreview = (file: UploadFile) => {
    console.log(' handlePreview', file);
  };

  const UploadContent = useMemo(() => (dragger ? Upload.Dragger : Upload), [dragger]);
  return (
    <>
      <UploadContent
        accept={accept}
        action={action}
        beforeUpload={handleBeforeUpload}
        progress={{
          status: 'active',
          showInfo: false,
          strokeWidth: 4,
        }}
        onChange={handleChange}
        onPreview={handlePreview}
        disabled={disabled}
        maxCount={maxCount}
        className={classNames(prefixCls, className)}
        {...restProps}
      />
    </>
  );
};

export default UploadWrapper;
