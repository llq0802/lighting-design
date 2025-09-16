import { CloseOutlined, ReloadOutlined } from '@ant-design/icons';
import { Modal, Space } from 'antd';
import classnames from 'classnames';
import { useImperativeHandle, useRef, useState, type FC } from 'react';
import Captcha, { prefixCls } from './Captcha';
// import './index.less';
import type { LTianaiCaptchaProps } from './interface';

const titleStyle = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' };

const LTianaiCaptcha: FC<LTianaiCaptchaProps> & {
  Captcha: typeof Captcha;
} = ({
  actionRef,
  successRefreshTime = 1000,
  shouldSuccessColse = true,
  showAction = true,
  onSuccess,
  modalProps,
  ...restProps
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const innerActionRef = useRef<{ refresh: () => void }>();
  const [disbaled, setDisbaled] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useImperativeHandle(actionRef, () => ({
    open: showModal,
    close: handleCancel,
    refresh: () => innerActionRef.current?.refresh?.(),
  }));

  return (
    <Modal
      title={
        <div style={titleStyle}>
          {modalProps?.title || ' 拖动滑块完成拼图'}
          {showAction && (
            <Space size={12}>
              <ReloadOutlined
                title="刷新"
                onClick={() => {
                  if (disbaled) {
                    return;
                  }
                  setDisbaled(true);
                  innerActionRef.current?.refresh?.();
                  setTimeout(() => {
                    setDisbaled(false);
                  }, 400);
                }}
                style={{ cursor: disbaled ? 'not-allowed' : 'pointer' }}
              />
              <CloseOutlined onClick={handleCancel} title="关闭" />
            </Space>
          )}
        </div>
      }
      centered
      closable={!showAction}
      footer={null}
      {...modalProps}
      className={classnames(`${prefixCls}-modal`, modalProps?.className)}
      keyboard={false}
      maskClosable={false}
      width="fit-content"
      open={isModalOpen}
      onCancel={handleCancel}
      destroyOnHidden
    >
      <Captcha
        {...restProps}
        actionRef={innerActionRef}
        onSuccess={() => {
          setTimeout(() => {
            onSuccess?.();
            if (shouldSuccessColse) {
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
export * from './interface';
