import type { FormInstance } from 'antd';
import { Button, Space } from 'antd';
import { useFormDrawer } from 'lighting-design';
import { useState } from 'react';
import ChildForm from './Form';

const Demo1 = () => {
  const [values, setValues] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState<boolean>(false);

  const { onOpen, FormDrawer, onClose } = useFormDrawer(ChildForm, {
    title: values?.id ? '编辑' : '新增',
    submitProps: {
      loading,
      onSubmit: async (fields: Record<string, any>, form: FormInstance) => {
        console.log(fields, form);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          onClose();
        }, 2000);
      },
    },
  });

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
            setValues({ id: '1', age: '20', name: '张三', sex: '1', state: 'string' });
          }}
        >
          编辑
        </Button>
      </Space>
      <FormDrawer formValues={values} />
    </>
  );
};

export default Demo1;
