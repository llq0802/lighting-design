import ImgCrop from 'antd-img-crop';
import type { FC, ReactNode } from 'react';
import UploadButton from './UploadButton';
import type { UploadWrapperProps } from './UploadWrapper';
import UploadWrapper from './UploadWrapper';

type UploadImageProps = UploadWrapperProps & {
  buttonIcon?: ReactNode;
  buttonText?: string;
  isCrop?: boolean;
  cropProps?: Record<string, any>;
};

const UploadImage: FC<UploadImageProps> = ({
  isCrop,
  cropProps,
  fileList,
  showUploadList = true,
  maxCount,
  buttonIcon,
  buttonText,
  ...restProps
}) => {
  const dom = (
    <UploadWrapper
      fileList={fileList}
      maxCount={maxCount}
      showUploadList={showUploadList}
      listType="picture-card"
      {...restProps}
      accept={restProps?.accept || '.jpg, .jpeg, .png'}
    >
      {maxCount && fileList && fileList.length >= maxCount ? null : (
        <UploadButton buttonIcon={buttonIcon} buttonText={buttonText} />
      )}
    </UploadWrapper>
  );

  return isCrop ? (
    <ImgCrop rotate {...cropProps}>
      {dom}
    </ImgCrop>
  ) : (
    dom
  );
};

export default UploadImage;
