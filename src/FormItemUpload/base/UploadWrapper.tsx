import { useMemoizedFn, useUnmount } from 'ahooks';
import type { ButtonProps, ModalProps, UploadProps } from 'antd';
import { ConfigProvider, message, Upload } from 'antd';
import type { ImgCropProps } from 'antd-img-crop';
import zhCN from 'antd/es/locale/zh_CN';
import type { RcFile, UploadFile } from 'antd/lib/upload';
import classNames from 'classnames';
import { uniqueId } from 'lighting-design/_utils';
import type { FC } from 'react';
import { useMemo, useRef, useState } from 'react';
import {
  checkFileSize,
  checkFileType,
  createFileUrl,
  removeFileUrl,
} from '../../_utils/upload';
import './styles.less';
import UploadPreview from './UploadPreview';

export const lightdUploadWrapper = 'lightd-upload-wrapper';

export interface UploadWrapperProps extends UploadProps {
  fileTypeMessage?: string | false; // 文件类型错误提示
  fileSizeMessage?: string | false; // 文件超过最大尺寸提示
  onUpload?: (file: File) => Promise<Record<string, any>>; // 自定义文件上传
  maxSize?: number; // 单个文件最大尺寸，用于校验
  dragger?: boolean; // 支持拖拽
  // 内置预览modal props
  previewModalProps?: ModalProps;
  onGetPreviewUrl?: (file: File) => Promise<string>; // 点击预览获取大图URL
  buttonProps?: ButtonProps;
  cropProps?: ImgCropProps;
  isSerial?: boolean;
}

const UploadWrapper: FC<UploadWrapperProps> = (props) => {
  const {
    fileTypeMessage = '只支持上传x文件',
    fileSizeMessage = '文件必须小于x',
    dragger = false,
    maxSize = 1024 * 1024 * 5,
    onUpload,
    previewModalProps = {},
    cropProps,
    buttonProps,

    onGetPreviewUrl,

    isSerial,

    // onChange,
    maxCount,
    accept = '*',
    className,
    disabled,
    action,
    beforeUpload,
    customRequest,
    ...restProps
  } = props;

  // 标识正在上传
  const uploadingRef = useRef(false);
  // 当前组件唯一标识，用于缓存和释放 URL.createObjectURL
  const uniqueKey = useMemo(() => uniqueId(lightdUploadWrapper), []);

  const [previewProps, setPreviewProps] = useState({
    open: false,
    title: '预览',
    imgUrl: '',
  });

  // 上传前验证
  const handleBeforeUpload = useMemoizedFn(
    (file: RcFile, fileList: RcFile[]) => {
      // 检查是否支持文件类型
      const isSupportFileType = checkFileType(file, accept);
      if (!isSupportFileType && fileTypeMessage) {
        message.error(fileTypeMessage.replace(/x/gi, accept));
        return Upload.LIST_IGNORE;
      }
      // 检查是否超过文件大小
      const isLessThanFileSize = checkFileSize(file, maxSize);
      if (!isLessThanFileSize && fileSizeMessage) {
        message.error(
          fileSizeMessage.replace(/x/gi, `${maxSize / 1024 / 1024}M`),
        );
        return Upload.LIST_IGNORE;
      }
      // 若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，
      // 可以返回 Upload.LIST_IGNORE， 此时列表中将不展示此文件。
      // action没有传地址则停止上传(不会生产status,percent ,response等)
      return beforeUpload
        ? beforeUpload(file, fileList)
        : !!action || !!onUpload || !!customRequest;
    },
  );

  // 自定义上传
  const internalCustomRequest = useMemoizedFn((obj: any) => {
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

  // 是否支持预览
  const isShowPreview = useMemo(() => {
    if (
      restProps?.showUploadList &&
      typeof restProps.showUploadList === 'object' &&
      restProps.showUploadList?.showPreviewIcon === false
    ) {
      return false;
    }
    return true;
  }, [restProps?.showUploadList]);

  // 关闭预览
  const handlePreviewCancel = useMemoizedFn(() => {
    setPreviewProps({
      ...previewProps,
      open: false,
    });
  });

  // 打开预览
  const handlePreview = useMemoizedFn(async (file: UploadFile) => {
    if (!isShowPreview) return;

    if (!file?.url && !file?.thumbUrl && !file?.preview) {
      message.error('当前文件不支持预览!');
      return;
    }
    if (onGetPreviewUrl) {
      file.preview = await onGetPreviewUrl(
        (file?.originFileObj || file) as File,
      );
    } else if (file?.originFileObj instanceof File) {
      // base64 路径太大，可能导致卡顿问题
      file.preview = createFileUrl(
        uniqueKey,
        file.uid,
        (file?.originFileObj || file) as File,
      );
    } else {
      file.preview = file.url || file.thumbUrl || file.preview;
    }

    const previewUlr = file.preview || '';
    const previewTitle =
      file.name || previewUlr.substring(previewUlr.lastIndexOf('/') + 1);
    setPreviewProps({
      open: true,
      imgUrl: previewUlr,
      title: previewTitle,
    });
  });

  const UploadContent = useMemo(
    () => (dragger ? Upload.Dragger : Upload),
    [dragger],
  );

  // 组件卸载时 清除url内存
  useUnmount(() => {
    removeFileUrl(uniqueKey);
  });

  return (
    <ConfigProvider locale={zhCN}>
      <UploadContent
        customRequest={!action ? internalCustomRequest : void 0}
        className={classNames(lightdUploadWrapper, className)}
        accept={accept}
        action={action}
        beforeUpload={handleBeforeUpload}
        onPreview={handlePreview}
        disabled={disabled}
        maxCount={maxCount}
        // progress={{
        //   status: 'active',
        //   showInfo: false,
        //   // size: 2,
        //   // strokeWidth: 2,
        //   // strokeColor: {
        //   //   '0%': '#108ee9',
        //   //   '100%': '#87d068',
        //   // },
        // }}
        {...restProps}
      />
      {isShowPreview && !restProps.onPreview && (
        <UploadPreview
          {...previewProps}
          {...previewModalProps}
          onCancel={handlePreviewCancel}
        />
      )}
    </ConfigProvider>
  );
};

export default UploadWrapper;
