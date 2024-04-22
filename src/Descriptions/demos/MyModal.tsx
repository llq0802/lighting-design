import { Card, Modal } from 'antd';
import { LDescriptions } from 'lighting-design';
import type { UseShowInstanceRef } from 'rc-use-hooks';
import { useShow } from 'rc-use-hooks';
import { useState } from 'react';

const MyModal = ({ modalRef }: { modalRef: UseShowInstanceRef }) => {
  const [loading, setLoading] = useState(false);
  const { showRecord, open } = useShow(modalRef, {
    onShow(data) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 600);
    },
  });

  const handleCancel = () => {
    modalRef.current?.onHide();
  };

  return (
    <>
      <Modal title="详情信息" width="50%" open={open} onOk={handleCancel} onCancel={handleCancel}>
        <Card>
          <LDescriptions
            titleWidth={100}
            loading={loading}
            colon={false}
            column={2}
            columns={[
              { title: <h4>编码:</h4>, dataIndex: 'guid', emptyNode: '---' },
              { title: <h4>姓名:</h4>, dataIndex: 'name' },
              { title: <h4>性别:</h4>, dataIndex: 'sex' },
              { title: <h4>年龄:</h4>, dataIndex: 'age' },
              { title: <h4>出生日期:</h4>, dataIndex: 'date' },
              { title: <h4>地址:</h4>, dataIndex: 'address' },
              { title: <h4>IP:</h4>, dataIndex: 'ip', emptyNode: '127.0.0.1' },
              { title: <h4>手机号:</h4>, dataIndex: 'phone' },
              { title: <h4>邮箱:</h4>, dataIndex: 'email' },
              { title: <h4>版本:</h4>, dataIndex: 'version', emptyNode: '0.0.0' },
            ]}
            record={showRecord}
          />
        </Card>
      </Modal>
    </>
  );
};

export default MyModal;
