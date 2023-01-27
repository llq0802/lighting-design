import { Button } from 'antd';
import { LForm, LFormItemInput, LFormItemRadio, LModalForm } from 'lighting-design';

export default function MyModal() {
  const [form] = LForm.useForm();

  return (
    <LModalForm
      isDraggable
      form={form}
      title="弹窗"
      onFinish={(values) => {
        console.log('onFinish-values ', values);
        return true;
      }}
      trigger={<Button type="primary">打开弹窗</Button>}
    >
      <LFormItemInput name="input" required label="输入框" />
      <LFormItemRadio
        label="单选"
        name="LFormItemRadio1"
        required
        options={[
          { label: 'Unresolved', value: 'open' },
          { label: 'Resolved', value: 'closed' },
          { label: 'Resolving', value: 'processing' },
        ]}
      />
    </LModalForm>
  );
}
