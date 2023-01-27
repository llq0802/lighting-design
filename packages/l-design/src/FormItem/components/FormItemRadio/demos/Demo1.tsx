import { LForm, LFormItemRadio } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemSelect" form={form}>
      <LFormItemRadio
        label="单选1"
        name="LFormItemRadio1"
        required
        options={[
          { label: 'Unresolved', value: 'open' },
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
