import { Button, message } from 'antd';
import { LForm, LFormItemInput, LModalForm } from 'lighting-design';
import { useState } from 'react';
import { sleep } from '../../test';

const Demo3 = () => {
  const [form] = LForm.useForm();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Button type="primary" onClick={() => setOpen(true)}>
        编辑
      </Button>
      <LModalForm
        open={open}
        onOpenChange={setOpen}
        form={form}
        title="新增"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('提交成功');
          return true;
        }}
        afterOpen={() => {
          form.setFieldsValue({ name: '法外狂徒' });
        }}
        afterClose={() => {
          console.log('afterClose');
        }}
      >
        <LFormItemInput name="name" required label="姓名" />
      </LModalForm>
    </div>
  );
};

export default Demo3;
