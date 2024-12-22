import { InboxOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import classNames from 'classnames';
import { IMAGE_TYPES } from 'lighting-design/constants';
import type { FC } from 'react';
import { useMemo } from 'react';
import UploadWrapper, { lightdUploadWrapper } from './UploadWrapper';

const defaultShowUploadList = {
  showPreviewIcon: false,
};

const prefixCls = `${lightdUploadWrapper}-dragger`;

const UploadDragger: FC<Record<string, any>> = ({
  isCrop,
  cropProps,
  className,
  showUploadList,
  buttonIcon = <InboxOutlined />,
  buttonText = '单击或拖动文件到此区域进行上传',
  ...restProps
}) => {
  const currentShowUploadList = useMemo(() => {
    if (typeof showUploadList === 'boolean' && showUploadList === false) {
      return false;
    }
    if (typeof showUploadList === 'object') {
      return {
        ...defaultShowUploadList,
        ...showUploadList,
      };
    }
    // 为 true 或 undefined 时
    return defaultShowUploadList;
  }, [showUploadList]);

  const accept = isCrop ? IMAGE_TYPES : restProps?.accept;

  const dom = (
    <UploadWrapper
      {...restProps}
      className={classNames(prefixCls, className)}
      dragger
      accept={accept}
      showUploadList={currentShowUploadList}
    >
      <p className="ant-upload-drag-icon">{buttonIcon}</p>
      <p className="ant-upload-text" style={{ marginBottom: 8 }}>
        {buttonText}
      </p>
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

export default UploadDragger;
