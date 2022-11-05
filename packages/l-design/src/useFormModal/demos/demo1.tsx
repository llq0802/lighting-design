import type { FormInstance } from 'antd';
import { Button, Space } from 'antd';
import { useFormModal } from 'lighting-design';
import { useState } from 'react';
import ChildForm from './ChildForm';

const Demo1 = () => {
  const [values, setValues] = useState<Record<string, any>>({});

  const { onOpen, FormModal, onClose } = useFormModal(ChildForm, {
    title: values?.id ? '编辑' : '新增',
    isDraggable: true,
  });

  const submit = async (fields: Record<string, any>, form: FormInstance) => {
    console.log(fields, form);
    // 数据发送至服务器
    onClose();
  };

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            onOpen();
            setValues({});
          }}
        >
          新增
        </Button>
        <Button
          type="primary"
          onClick={() => {
            onOpen();
            setValues({ id: '1', age: '25', name: '李岚清', sex: 'nan', desc: '看见另一种可能' });
          }}
        >
          编辑
        </Button>
      </Space>
      <FormModal submit={submit} formValues={values} />
    </>
  );
};

export default Demo1;
