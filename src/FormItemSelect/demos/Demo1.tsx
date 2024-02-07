import { LForm, LFormItemSelect } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form} labelWidth={180} submitter={{ buttonAlign: 'center' }}>
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
        all
        options={[
          { label: 'Unresolved', value: 'Unresolved' },
          { label: 'Resolved', value: 'Resolved' },
          { label: 'Resolving', value: 'Resolving' },
        ]}
        selectProps={{ mode: 'multiple' }}
      />
      <LFormItemSelect
        label="自定义 options 的键名"
        name="select3"
        required
        all
        allValue=""
        options={[
          { name: 'open', id: 0 },
          { name: 'closed', id: 'closed' },
          { name: 'processing', id: 'processing' },
        ]}
        selectProps={{ fieldNames: { label: 'name', value: 'id' } }}
      />
    </LForm>
  );
};
export default Demo1;
