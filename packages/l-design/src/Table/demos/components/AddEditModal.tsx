import { Button } from 'antd';
import { LForm, LFormItemInput, LFormItemRadio, LModalForm } from 'lighting-design';

export default function MyModal() {
  const [form] = LForm.useForm();

  return (
    <>
      <LModalForm
        forceRender
        isDraggable
        form={form}
        title="新增"
        onFinish={(values) => {
          console.log('onFinish-values ', values);
          // message.success('提交成功');
          return true;
        }}
        trigger={<Button type="primary">打开弹窗</Button>}
      >
        <LFormItemInput name="input" required label="输入框" />
        <LFormItemRadio
          label="单选2"
          name="LFormItemRadio2"
          all
          required
          options={[
            { label: 'Unresolved', value: 'open' },
            { label: 'Resolved', value: 'closed' },
            { label: 'Resolving', value: 'processing' },
          ]}
        />
      </LModalForm>
    </>
  );
}
