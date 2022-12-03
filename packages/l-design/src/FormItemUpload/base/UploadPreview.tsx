import type { ModalProps } from 'antd';
import { Modal } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';

export interface PreviewProps extends ModalProps {
  imgUrl: string;
}

const Preview: FC<PreviewProps> = ({ imgUrl = '', title = '预览', style = {}, ...restProps }) => {
  return (
    <Modal
      title={title}
      footer={null}
      centered
      style={{ maxWidth: '80%', ...style }}
      {...restProps}
    >
      <img alt="预览" style={{ width: '100%' }} src={imgUrl} />
    </Modal>
  );
};

export default memo(Preview);
