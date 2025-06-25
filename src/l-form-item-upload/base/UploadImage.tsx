import ImgCrop from 'antd-img-crop';
import classNames from 'classnames';
import { IMAGE_TYPES } from 'lighting-design/constants';
import type { FC } from 'react';
import UploadWrapper, { lightdUploadWrapper } from './UploadWrapper';

const prefixCls = `${lightdUploadWrapper}-image`;

const UploadImage: FC<Record<string, any>> = ({
  className,
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
      className={classNames(prefixCls, className)}
      accept={restProps?.accept || IMAGE_TYPES}
    >
      {maxCount && fileList && fileList.length >= maxCount ? null : (
        <Button buttonIcon={buttonIcon} buttonText={buttonText} />
      )}
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

export default UploadImage;
