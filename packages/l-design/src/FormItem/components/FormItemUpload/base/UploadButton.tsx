import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { FC, ReactNode } from 'react';
import { useMemo } from 'react';

const UploadImageButton: FC<{
  uploading?: boolean;
  buttonIcon?: ReactNode;
  buttonText?: ReactNode;
}> = ({ uploading = false, buttonIcon = <PlusOutlined />, buttonText = '点击上传' }) => {
  const text = useMemo(() => {
    return uploading ? '上传中...' : buttonText;
  }, [buttonText, uploading]);

  return (
    <div>
      {uploading ? <LoadingOutlined /> : buttonIcon}
      <div className="lightd-upload-wrapper-button-text" style={{ marginTop: 8 }}>
        {text}
      </div>
    </div>
  );
};

export default UploadImageButton;
