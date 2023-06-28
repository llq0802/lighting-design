import { LForm, LFormItemRadio } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      name="LFormItemRadio"
      form={form}
      onFinish={(fields) => {
        console.log('fields', fields);
      }}
    >
      <LFormItemRadio
        label="单选11"
        name="LFormItemRadio1"
        required
        options={[
          { label: 'Unresolved-0', value: 0 },
          { label: 'Resolved', value: 'closed' },
          { label: 'Resolving', value: 'processing' },
        ]}
      />
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
    </LForm>
  );
};
export default Demo1;
