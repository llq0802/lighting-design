import { InboxOutlined } from '@ant-design/icons';
import type { FC } from 'react';
import BaseUpload from './base-upload';

const DraggerUpload: FC<Record<string, any>> = ({
  buttonIcon = <InboxOutlined />,
  buttonText = '单击或拖动文件到此区域进行上传',
  ...restProps
}) => {
  const dom = (
    <BaseUpload {...restProps} dragger>
      <p className="ant-upload-drag-icon">{buttonIcon}</p>
      <p className="ant-upload-text" style={{ marginBottom: 8 }}>
        {buttonText}
      </p>
    </BaseUpload>
  );

  return dom;
};

export default DraggerUpload;
