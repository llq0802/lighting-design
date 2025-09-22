import { Button, Form } from 'antd';
import { LDrawerForm, LFormItemColor, LFormItemInput } from 'lighting-design';
import { useState } from 'react';
import { sleep } from '../../test';

const Demo1 = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <LDrawerForm
        form={form}
        open={open}
        onOpenChange={(isOpen) => {
          console.log('isOpen ', isOpen);
          setOpen(false);
        }}
        placement="right"
        title="抽屉"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          return true;
        }}
        initialValues={{
          color: '#666',
          input: '寸金乃买寸光阴',
        }}
      >
        <LFormItemColor label="颜色选择" name="color" required />
        <LFormItemInput name="input" required label="输入框" />
      </LDrawerForm>
      <Button type="primary" onClick={() => setOpen(true)}>
        打开抽屉
      </Button>
    </div>
  );
};

export default Demo1;
