import { LForm, LFormItemSelect } from 'lighting-design';

const Index = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      name="LFormItemSelect1"
      form={form}
      labelWidth={90}
      submitter={{ buttonAlign: 'center' }}
    >
      <LFormItemSelect
        label="select1"
        name="select1"
        required
        options={[
          { label: 'Unresolved', value: 'open' },
          { label: 'Resolved', value: 'closed' },
          { label: 'Resolving', value: 'processing' },
        ]}
      />
      <LFormItemSelect
        label="select2"
        name="select2"
        required
        all
        options={[
          { label: 'Unresolved', value: 'open' },
          { label: 'Resolved', value: 'closed' },
          { label: 'Resolving', value: 'processing' },
        ]}
      />
    </LForm>
  );
};
export default Index;
