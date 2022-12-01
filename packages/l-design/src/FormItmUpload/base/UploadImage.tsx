import type { UploadFile } from 'antd';
import { Modal } from 'antd';
import type { RcFile } from 'antd/lib/upload';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { getBase64 } from '../../utils/upload';
import UploadButton from './UploadButton';
import type { UploadWrapperProps } from './UploadWrapper';
import UploadWrapper from './UploadWrapper';

type UploadImageProps = UploadWrapperProps & {
  buttonIcon: ReactNode;
  buttonText: string;
};

const UploadImage: React.FC<UploadImageProps> = ({
  fileList,
  maxCount,
  buttonIcon,
  buttonText,
  ...restProps
}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const handlePreview = async (file: UploadFile) => {
    console.log('UploadImage- handlePreview', file);
    if (!file.url && !file.preview && !file.thumbUrl) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
    setPreviewImage(file.url || file.thumbUrl || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };
  const handleCancel = () => setPreviewOpen(false);

  return (
    <>
      <UploadWrapper
        onPreview={handlePreview}
        fileList={fileList}
        maxCount={maxCount}
        listType="picture-card"
        {...restProps}
        accept={restProps?.accept || '.jpg, .jpeg, .png'}
      >
        {maxCount && fileList && fileList.length >= maxCount ? null : (
          <UploadButton buttonIcon={buttonIcon} buttonText={buttonText} />
        )}
      </UploadWrapper>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default UploadImage;
