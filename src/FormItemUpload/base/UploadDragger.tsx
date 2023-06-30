import { InboxOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import type { FC, ReactNode } from 'react';
import { useMemo } from 'react';
import type { UploadWrapperProps } from './UploadWrapper';
import UploadWrapper from './UploadWrapper';

const defaultShowUploadList = {
  showPreviewIcon: false,
};

type UploadDraggerrProps = Omit<UploadWrapperProps, 'dragger'> & {
  buttonIcon?: ReactNode;
  buttonText?: string;
  isCrop?: boolean;
};

const UploadDragger: FC<UploadDraggerrProps> = ({
  isCrop,
  cropProps,

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

  const accept = isCrop ? '.jpg, .jpeg, .png' : restProps?.accept;

  const dom = (
    <UploadWrapper
      {...restProps}
      dragger
      accept={accept}
      showUploadList={currentShowUploadList}
    >
      <p className="ant-upload-drag-icon">{buttonIcon}</p>
      <p className="ant-upload-text" style={{ marginBottom: 8 }}>
        {buttonText}
      </p>
      {/* <p className="ant-upload-hint">{buttonText}</p> */}
    </UploadWrapper>
  );

  return isCrop ? (
    <ImgCrop rotationSlider {...cropProps}>
      {dom}
    </ImgCrop>
  ) : (
    dom
  );
};

export default UploadDragger;
