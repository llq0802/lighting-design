import { CloseOutlined, ReloadOutlined } from '@ant-design/icons';
import { Modal, Space } from 'antd';
import classnames from 'classnames';
import { useImperativeHandle, useRef, useState } from 'react';
import Captcha, { prefixCls } from './Captcha';
import './index.less';

const LTianaiCaptcha = ({
  actionRef,
  successRefreshTime = 1000,
  successColse = true,
  showAction = true,
  onSuccess,
  modalProps,
  ...restProps
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const innerActionRef = useRef();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useImperativeHandle(actionRef, () => ({
    open: showModal,
    close: handleCancel,
    refresh: () => {
      innerActionRef.current?.refresh?.();
    },
  }));

  return (
    <Modal
      title={
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {modalProps?.title || ' 拖动滑块完成拼图'}

          {showAction && (
            <Space size={12}>
              <ReloadOutlined title="刷新" onClick={() => innerActionRef.current?.refresh?.()} />
              <CloseOutlined onClick={handleCancel} title="关闭" />
            </Space>
          )}
        </div>
      }
      closable={!showAction}
      centered
      footer={null}
      {...modalProps}
      className={classnames(`${prefixCls}-modal`, modalProps?.className)}
      keyboard={false}
      maskClosable={false}
      width="fit-content"
      open={isModalOpen}
      onCancel={handleCancel}
      destroyOnClose
    >
      <Captcha
        {...restProps}
        actionRef={innerActionRef}
        onSuccess={() => {
          setTimeout(() => {
            onSuccess?.();
            if (successColse) {
              handleCancel();
            }
          }, successRefreshTime);
        }}
      />
    </Modal>
  );
};

LTianaiCaptcha.Captcha = Captcha;
export default LTianaiCaptcha;
