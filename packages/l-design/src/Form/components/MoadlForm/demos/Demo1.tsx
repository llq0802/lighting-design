import { Button, message } from 'antd';
import { LForm, LFormItemColor, LFormItemInput, LModalForm } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();
  // const [open, setOpen] = useState(false);

  return (
    <>
      <LModalForm
        isDraggable
        form={form}
        title="弹窗"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          message.success('提交成功');
          return true;
        }}
        trigger={<Button type="primary">打开弹窗</Button>}
      >
        <LFormItemColor colorType="chrome" label="颜色选择" name="color" required />
        <LFormItemInput name="input" required label="输入框" />
      </LModalForm>
      {/* <Button type="primary" onClick={() => setOpen(true)}>
        打开弹窗
      </Button> */}
    </>
  );
};

export default Demo1;
