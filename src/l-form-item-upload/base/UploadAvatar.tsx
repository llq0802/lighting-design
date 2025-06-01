import { PictureOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import classNames from 'classnames';
import { IMAGE_TYPES } from 'lighting-design/constants';
import type { FC, ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import UploadButton from './UploadButton';
import type { UploadWrapperProps } from './UploadWrapper';
import UploadWrapper, { lightdUploadWrapper } from './UploadWrapper';

const prefixCls = `${lightdUploadWrapper}-avatar`;

const nameStyle: React.CSSProperties = {
  marginTop: 8,
  padding: '0 8px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const AvatarContent: FC<Record<string, any>> = ({ fileList, buttonText, buttonIcon, listType }) => {
  const [imgUrl, setImgUrl] = useState<undefined | string>('');

  const currentFile = useMemo(
    () => (Array.isArray(fileList) && fileList.length > 0 ? fileList[0] : void 0),
    [fileList],
  );
  const uploading = currentFile?.status === 'uploading';
  const isError = currentFile?.status === 'error';
  // const getUrl = useCallback(async () => {
  //   if (!currentFile) {
  //     setImgUrl('');
  //     return;
  //   }
  //   if (currentFile?.originFileObj instanceof File) {
  //     const base64Url = await getBase64(currentFile.originFileObj as RcFile);
  //     setImgUrl(base64Url);
  //     currentFile.url = base64Url;
  //   } else if (currentFile?.url) {
  //     setImgUrl(currentFile?.url);
  //   } else if (currentFile?.thumbUrl) {
  //     setImgUrl(currentFile?.thumbUrl);
  //   } else if (currentFile?.preview) {
  //     setImgUrl(currentFile?.preview);
  //   }
  // }, [currentFile]);
  // useEffect(() => {
  //   getUrl();
  // }, [getUrl]);
  useEffect(() => {
    // if (currentFile && currentFile?.originFileObj instanceof File) {
    //   if (!currentFile.thumbUrl && !currentFile.url && !currentFile.preview) {
    //     currentFile.preview = URL.createObjectURL(
    //       (currentFile?.originFileObj || currentFile) as File,
    //     );
    //   }
    //   setImgUrl(currentFile.thumbUrl || currentFile.url || currentFile.preview || '');
    // } else if (currentFile && (currentFile.thumbUrl || currentFile.url || currentFile.preview)) {
    //   setImgUrl(currentFile.thumbUrl || currentFile.url || currentFile.preview || '');
    // } else {
    //   setImgUrl('');
    // }
    if (currentFile) {
      if (!currentFile.thumbUrl && !currentFile.url && !currentFile.preview) {
        currentFile.preview = URL.createObjectURL(
          (currentFile?.originFileObj || currentFile) as File,
        );
      }
      setImgUrl(currentFile.thumbUrl || currentFile.url || currentFile.preview);
    } else {
      setImgUrl('');
    }
  }, [currentFile, fileList]);

  const viewConent = useMemo(() => {
    if (isError) {
      return (
        <div style={{ width: '100%' }}>
          <PictureOutlined />
          <div style={nameStyle} title={currentFile.name}>
            {currentFile.name}
          </div>
        </div>
      );
    } else if (uploading || !imgUrl) {
      return <UploadButton uploading={uploading} buttonText={buttonText} buttonIcon={buttonIcon} />;
    } else {
      return (
        imgUrl &&
        !uploading && (
          <img
            className={`${prefixCls}-box-img`}
            src={imgUrl}
            alt={currentFile?.name || 'avatar'}
          />
        )
      );
    }
  }, [buttonIcon, buttonText, currentFile?.name, imgUrl, isError, uploading]);

  const dom = (
    <div
      className={classNames(`${prefixCls}-box`, {
        [`${prefixCls}-box-error`]: isError,
        [`${prefixCls}-box-circle`]: listType === 'picture-circle',
      })}
    >
      {viewConent}
    </div>
  );

  return dom;
};

type UploadAvatarProps = UploadWrapperProps & {
  buttonIcon?: ReactNode;
  buttonText?: string;
  isCrop?: boolean;
  cropProps?: Record<string, any>;
};
const UploadAvatar: FC<UploadAvatarProps> = ({
  isCrop,
  cropProps,
  fileList,
  className,
  buttonIcon,
  buttonText,

  ...restProps
}) => {
  const dom = (
    <UploadWrapper
      listType="picture-card"
      {...restProps}
      showUploadList={false}
      accept={restProps?.accept || IMAGE_TYPES}
      fileList={fileList}
      multiple={false}
      maxCount={1}
      className={classNames(prefixCls, className)}
    >
      <AvatarContent
        listType={restProps?.listType}
        fileList={fileList}
        buttonText={buttonText}
        buttonIcon={buttonIcon}
      />
    </UploadWrapper>
  );

  return isCrop ? (
    <ImgCrop modalWidth={600} rotationSlider aspectSlider showReset {...cropProps}>
      {dom}
    </ImgCrop>
  ) : (
    dom
  );
};

export default UploadAvatar;
