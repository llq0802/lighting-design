import { Button, Form, message } from 'antd';
import { LDrawerForm, LFormItemColor, LFormItemInput } from 'lighting-design';
import { useState } from 'react';

const Demo1 = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <LDrawerForm
        form={form}
        open={open}
        onOpenChange={(isOpen) => {
          console.log('isOpen ', isOpen);
          setOpen(false);
        }}
        placement="right"
        title="弹窗"
        loading={loading}
        onFinish={async (values) => {
          setLoading(true);
          console.log('onFinish-values ', values);
          setTimeout(() => {
            message.success('提交成功');
            setLoading(false);
            setOpen(false);
          }, 2000);
        }}
        // actionBarDir="extra"
        submitter={{
          submitText: '提交',
        }}
        // drawerProps={{
        //   footer: false,
        // }}
      >
        <LFormItemColor colorType="chrome" initialValue='#666' label="颜色选择" name="color" required />
        <LFormItemInput name="input" initialValue='寸金乃买寸光阴' required label="输入框" />
      </LDrawerForm>
      <Button type="primary" onClick={() => setOpen(true)}>
        打开抽屉
      </Button>
    </>
  );
};

export default Demo1;
