import { CloseOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button, Flex, Modal, Space } from 'antd';
import { LTianaiCaptcha, type LTianaiCaptchaActionRef } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import { useRef, useState } from 'react';
import bg1 from '../imgs/bg1.webp';
import bg2 from '../imgs/bg2.webp';

// http://169.254.4.160:8800/shiyi/gen/

const requestCaptcha = async () => {
  await sleep(500);
  return {
    code: '0',
    success: true,
    msg: 'success',
    data: {
      id: `${Date.now()}`,
      captcha: {
        backgroundImage: bg1,
        backgroundImageHeight: 350,
        backgroundImageWidth: 600,
        templateImage: bg2,
        templateImageHeight: 350,
        templateImageWidth: 110,
      },
    },
  };
};
const validCaptcha = async () => {
  await sleep();
  return {
    code: 200,
    success: true,
    msg: 'success',
    data: null,
  };
};

export default function Demo1() {
  const actionRef = useRef<LTianaiCaptchaActionRef>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disbaled, setDisbaled] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button
        onClick={() => {
          showModal();
        }}
      >
        打开图形验证码
      </Button>
      <Modal
        title={
          <Flex justify="space-between">
            <span>拖动滑块完成拼图</span>
            <Space size={12}>
              <ReloadOutlined
                title="刷新"
                onClick={() => {
                  if (disbaled) {
                    return;
                  }
                  setDisbaled(true);
                  actionRef.current?.refresh?.();
                  setTimeout(() => {
                    setDisbaled(false);
                  }, 400);
                }}
                style={{ cursor: disbaled ? 'not-allowed' : 'pointer' }}
              />
              <CloseOutlined onClick={handleCancel} title="关闭" />
            </Space>
          </Flex>
        }
        centered
        destroyOnHidden
        closable={false}
        footer={false}
        keyboard={false}
        maskClosable={false}
        width="fit-content"
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <LTianaiCaptcha
          actionRef={actionRef}
          requestImg={async () => {
            await sleep(1000);
            return {
              id: '1',
              backgroundImage: bg1,
              backgroundImageHeight: 350,
              backgroundImageWidth: 600,
              templateImage: bg2,
              templateImageHeight: 350,
              templateImageWidth: 110,
            };
          }}
          requestCheck={async (params) => {
            console.log('===params==>', params);
            await sleep(1000);
            return { data: null, msg: '', success: true, code: Math.random() > 0.5 ? 4001 : 200 };
          }}
          onSuccess={(data) => {
            setTimeout(() => {
              handleCancel();
              actionRef.current?.reset();
            }, 1200);
          }}
        />
      </Modal>
    </div>
  );
}
