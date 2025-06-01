import { LForm, LFormItemRadio } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      onFinish={(fields) => {
        console.log('fields', fields);
      }}
    >
      <LFormItemRadio
        label="基础单选"
        name="LFormItemRadio1"
        required
        options={[
          { label: 'Unresolved-0', value: 0 },
          { label: 'Resolved', value: 'closed' },
          { label: 'Resolving', value: 'processing' },
        ]}
      />
      <LFormItemRadio
        all
        required
        label="自定义字段名"
        name="LFormItemRadio2"
        options={[
          { name: 'Unresolved', id: 'open' },
          { name: 'Resolved', id: 'closed' },
          { name: 'Resolving', id: 'processing' },
        ]}
        fieldNames={{ label: 'name', value: 'id' }}
      />
      <LFormItemRadio
        required
        optionType="button"
        buttonStyle="solid"
        label="按钮形态"
        name="LFormItemRadio3"
        options={[
          { label: 'Unresolved', value: 'Unresolved' },
          { label: 'Resolved', value: 'Resolved' },
          { label: 'Resolving', value: 'Resolving' },
        ]}
      />
    </LForm>
  );
};
export default Demo1;
