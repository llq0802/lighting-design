import { PictureOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd';
import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import UploadButton from './UploadButton';
import type { UploadWrapperProps } from './UploadWrapper';
import UploadWrapper, { lightdUploadWrapper } from './UploadWrapper';

const prefixCls = `${lightdUploadWrapper}-avatar`;

const AvatarContent: FC<{
  fileList?: UploadFile[];
  buttonText?: ReactNode;
  buttonIcon?: ReactNode;
}> = ({ fileList, buttonText, buttonIcon }) => {
  const [imgUrl, setImgUrl] = useState('');

  const currentFile = useMemo(
    () => (Array.isArray(fileList) && fileList.length > 0 ? fileList[0] : null),
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
    if (currentFile && currentFile?.originFileObj instanceof File) {
      if (!currentFile.thumbUrl && !currentFile.url && !currentFile.preview) {
        currentFile.preview = URL.createObjectURL(
          (currentFile?.originFileObj || currentFile) as File,
        );
      }
      setImgUrl(currentFile.thumbUrl || currentFile.url || currentFile.preview || '');
    } else {
      setImgUrl('');
    }
  }, [currentFile]);

  const viewConent = useMemo(() => {
    if (isError) {
      return (
        <div style={{ width: '100%' }}>
          <PictureOutlined />
          <div
            style={{
              marginTop: 8,
              padding: '0 8px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            title={currentFile.name}
          >
            {currentFile.name}
          </div>
        </div>
      );
    } else if (uploading || !imgUrl) {
      return <UploadButton uploading={uploading} buttonText={buttonText} buttonIcon={buttonIcon} />;
    } else {
      return imgUrl && !uploading && <img src={imgUrl} alt={currentFile?.name || 'avatar'} />;
    }
  }, [buttonIcon, buttonText, currentFile, imgUrl, isError, uploading]);

  const dom = (
    <div
      className={classNames(`${prefixCls}-box`, {
        [`${prefixCls}-box-error`]: isError,
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
};
const UploadAvatar: FC<UploadAvatarProps> = ({
  fileList,
  className,
  buttonIcon,
  buttonText,
  ...restProps
}) => {
  return (
    <UploadWrapper
      {...restProps}
      listType="picture-card"
      accept={restProps?.accept || '.jpg, .jpeg, .png'}
      fileList={fileList}
      showUploadList={false}
      multiple={false}
      maxCount={1}
      className={classNames(prefixCls, className)}
    >
      <AvatarContent fileList={fileList} buttonText={buttonText} buttonIcon={buttonIcon} />
    </UploadWrapper>
  );
};

export default UploadAvatar;
