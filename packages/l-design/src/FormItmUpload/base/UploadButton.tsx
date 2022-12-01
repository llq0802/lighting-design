import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { FC, ReactNode } from 'react';
import { useMemo } from 'react';

const UploadImageButton: FC<{
  loading?: boolean;
  uploading?: boolean;
  buttonIcon?: ReactNode;
  buttonText?: ReactNode;
}> = ({
  loading = false,
  uploading = false,
  buttonIcon = <PlusOutlined />,
  buttonText = '点击上传',
}) => {
  const text = useMemo(() => {
    return loading ? '加载中...' : uploading ? '上传中...' : buttonText;
  }, [loading, buttonText, uploading]);

  return (
    <div>
      {loading || uploading ? <LoadingOutlined /> : buttonIcon}
      <div style={{ marginTop: 8 }}>{text}</div>
    </div>
  );
};

export default UploadImageButton;
