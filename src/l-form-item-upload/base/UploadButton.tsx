import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { FC } from 'react';
import { useMemo } from 'react';

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const UploadImageButton: FC<Record<string, any>> = ({
  uploading = false,
  buttonIcon = <PlusOutlined />,
  buttonText = '点击上传',
}) => {
  const text = useMemo(() => {
    return uploading ? '上传中...' : buttonText;
  }, [buttonText, uploading]);

  return (
    <div style={style}>
      {uploading ? <LoadingOutlined /> : buttonIcon}
      <div className="lightd-upload-wrapper-button-text" style={{ marginTop: 4 }}>
        {text}
      </div>
    </div>
  );
};

export default UploadImageButton;
