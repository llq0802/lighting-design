import { LForm, LFormItemSelect } from 'lighting-design';
import { useEffect, useState } from 'react';

const Demo1 = () => {
  const [form] = LForm.useForm();

  const [opts1, setOpts1] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setOpts1([
        { label: 'open', value: 'open' },
        { label: 'closed', value: 'closed' },
        { label: 'processing', value: 'processing' },
      ]);
    }, 2000);
  }, []);

  return (
    <LForm
      form={form}
      labelWidth={180}
      submitter={{ buttonAlign: 'center' }}
      onFinish={(vals) => {
        console.log('onFinish', vals);
      }}
    >
      <LFormItemSelect label="单选" name="select1" required options={opts1} all />
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
        dependencies={['select1']}
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
