import { Button, message } from 'antd';
import { LDrawerForm, LForm, LFormItemInput } from 'lighting-design';
import { useEffect, useState } from 'react';
import { awaitTime } from '../../_test';

const Demo3 = () => {
  const [form] = LForm.useForm();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      form.setFieldsValue({ name: '法外狂徒' });
    }
  }, [form, open]);

  return (
    <div
      style={{
        position: 'relative',
        height: '600px',
        padding: '24px',
        overflow: 'hidden',
        background: '#fafafa',
        border: '1px solid #ebedf0',
      }}
    >
      <Button type="primary" onClick={() => setOpen(true)}>
        打开
      </Button>

      <LDrawerForm
        open={open}
        onOpenChange={setOpen}
        form={form}
        title="抽屉"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await awaitTime();
          message.success('提交成功');
          return true;
        }}
        drawerProps={{
          getContainer: false,
        }}
      >
        <LFormItemInput name="name" required label="姓名" />
      </LDrawerForm>
    </div>
  );
};

export default Demo3;
