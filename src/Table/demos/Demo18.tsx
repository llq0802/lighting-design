import { Button, Modal, type FormInstance } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import React, { useRef, useState } from 'react';

const originData: any[] = [];

for (let index = 0; index < 12; index++) {
  originData.push({
    key: `${index}`,
    name: `JohnBrown-${index + 0}`,
    age: 10 + index,
  });
}

const columns: ColumnsType<any> = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    className: 'my-columns-className-small',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
];

const formItems = [<LFormItemInput key="0" name="input4" label="输入框" />];

const MyLTable: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  return (
    <LTable
      tableCardProps={{
        style: { borderRadius: 0 },
        bodyStyle: { paddingTop: 0 },
      }}
      formCardProps={{ style: { marginBottom: 0, borderRadius: 0 } }}
      showToolbar={false}
      size="small"
      columns={columns}
      tableRef={tableRef}
      formRef={formRef}
      queryFormProps={{ isSpace: true }}
      formItems={formItems}
      pagination={{
        showSizeChanger: false,
        showQuickJumper: false,
      }}
      request={async (params, requestType) => {
        return {
          success: true,
          data: originData,
          total: originData.length,
        };
      }}
    />
  );
};

const Demo18: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        footer={false}
        title="小型表格"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <MyLTable />
      </Modal>
    </div>
  );
};

export default Demo18;
