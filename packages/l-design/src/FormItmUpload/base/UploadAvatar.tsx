import { PictureOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd';
import type { RcFile } from 'antd/lib/upload';
import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getBase64 } from '../../utils/upload';
import UploadButton from './UploadButton';
import type { UploadWrapperProps } from './UploadWrapper';
import UploadWrapper, { lightdUploadWrapper } from './UploadWrapper';
const prefixCls = `${lightdUploadWrapper}-avatar`;

const AvatarContent: FC<{
  fileList?: UploadFile[];
  title?: ReactNode;
  icon?: ReactNode;
}> = ({ fileList, icon, title }) => {
  const [imgUrl, setImgUrl] = useState('');

  const currentFile = useMemo(
    () => (Array.isArray(fileList) && fileList.length > 0 ? fileList[0] : null),
    [fileList],
  );
  const uploading = currentFile?.status === 'uploading';
  const isError = currentFile?.status === 'error';
  // const isDone = currentFile?.status === 'done';

  console.log('AvatarContent- currentFile', currentFile);

  const getUrl = useCallback(async () => {
    if (currentFile && currentFile instanceof File) {
      const base64Url = await getBase64(currentFile.originFileObj as RcFile);
      setImgUrl(base64Url);
    } else if (currentFile?.url) {
      setImgUrl(currentFile?.url);
    } else if (currentFile?.thumbUrl) {
      setImgUrl(currentFile?.thumbUrl);
    }
  }, [currentFile]);

  useEffect(() => {
    getUrl();
  }, [getUrl]);

  let viewConent = null;
  if (isError) {
    viewConent = (
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
    viewConent = <UploadButton uploading={uploading} />;
  } else {
    viewConent = <img src={imgUrl} alt={currentFile?.name || 'avatar'} />;
  }

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

const UploadAvatar: FC<UploadWrapperProps> = ({ fileList, className, ...restProps }) => {
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
      <AvatarContent fileList={fileList} />
    </UploadWrapper>
  );
};

export default UploadAvatar;
