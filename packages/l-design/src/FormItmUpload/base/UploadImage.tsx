import type { FC, ReactNode } from 'react';
import UploadButton from './UploadButton';
import type { UploadWrapperProps } from './UploadWrapper';
import UploadWrapper from './UploadWrapper';

type UploadImageProps = UploadWrapperProps & {
  buttonIcon: ReactNode;
  buttonText: string;
};

const UploadImage: FC<UploadImageProps> = ({
  fileList,
  showUploadList = true,
  maxCount,
  buttonIcon,
  buttonText,
  ...restProps
}) => {
  return (
    <>
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
    </>
  );
};

export default UploadImage;
