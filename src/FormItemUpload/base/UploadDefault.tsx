import { UploadOutlined } from '@ant-design/icons';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import ImgCrop from 'antd-img-crop';
import classNames from 'classnames';
import { IMAGE_TYPES } from 'lighting-design/constants';
import type { FC, ReactNode } from 'react';
import { useMemo } from 'react';
import type { UploadWrapperProps } from './UploadWrapper';
import UploadWrapper, { lightdUploadWrapper } from './UploadWrapper';

const prefixCls = `${lightdUploadWrapper}-default`;

const defaultShowUploadList = {
  showPreviewIcon: false,
};

type UploadDefaultProps = UploadWrapperProps & {
  buttonProps?: ButtonProps;
  buttonIcon?: ReactNode;
  buttonText?: string;
  isCrop?: boolean;
};

const UploadDefault: FC<UploadDefaultProps> = ({
  isCrop,
  cropProps,
  className,
  showUploadList,
  buttonIcon = <UploadOutlined />,
  buttonText = '点击上传',
  buttonProps,
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
      accept={accept}
      showUploadList={currentShowUploadList}
    >
      <Button icon={buttonIcon} disabled={restProps.disabled} {...buttonProps}>
        {buttonText}
      </Button>
    </UploadWrapper>
  );

  return isCrop ? (
    <ImgCrop
      modalWidth={600}
      rotationSlider
      aspectSlider
      showReset
      {...cropProps}
    >
      {dom}
    </ImgCrop>
  ) : (
    dom
  );
};

export default UploadDefault;
