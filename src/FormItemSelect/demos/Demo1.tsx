import { LForm, LFormItemSelect } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      labelWidth={180}
      submitter={{ buttonAlign: 'center' }}
      onFinish={(vals) => {
        console.log('onFinish', vals);
      }}
    >
      <LFormItemSelect
        label="单选"
        name="select1"
        required
        options={[
          { label: 'open', value: 'open' },
          { label: 'closed', value: 'closed' },
          { label: 'processing', value: 'processing' },
        ]}
        all
      />
      <LFormItemSelect
        label="多选"
        name="select2"
        required
        options={[
          { label: 'Unresolved', value: 'Unresolved' },
          { label: 'Resolved', value: 'Resolved' },
          { label: 'Resolving', value: 'Resolving' },
        ]}
        mode="multiple"
      />
      <LFormItemSelect
        label="自定义 options 的键名"
        name="select3"
        required
        options={[
          { name: 'open', id: 0 },
          { name: 'closed', id: 'closed' },
          { name: 'processing', id: 'processing' },
        ]}
        fieldNames={{ label: 'name', value: 'id' }}
      />
    </LForm>
  );
};
export default Demo1;
