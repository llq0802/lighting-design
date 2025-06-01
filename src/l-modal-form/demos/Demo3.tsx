import { Button, message } from 'antd';
import { LForm, LFormItemInput, LModalForm } from 'lighting-design';
import { useEffect, useState } from 'react';
import { awaitTime } from '../../test';

const Demo3 = () => {
  const [form] = LForm.useForm();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      form.setFieldsValue({ name: '法外狂徒' });
    }
  }, [form, open]);

  return (
    <div>
      <Button type="primary" onClick={() => setOpen(true)}>
        编辑
      </Button>

      <LModalForm
        submitter={false}
        open={open}
        onOpenChange={setOpen}
        form={form}
        title="新增"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await awaitTime();
          message.success('提交成功');
          return true;
        }}
      >
        <LFormItemInput name="name" required label="姓名" />
      </LModalForm>
    </div>
  );
};

export default Demo3;
