import { LForm, LFormItemSelect } from 'lighting-design';
import LFormItemMentions from '..';

const Demo1 = () => {
  const [form] = LForm.useForm();
  const select1Val = LForm.useWatch('select1', form);

  return (
    <LForm
      form={form}
      onFinish={(res) => {
        console.log('res', res);
      }}
    >
      <LFormItemSelect
        label="select1"
        name="select1"
        required
        options={[
          { label: 'open', value: 'open' },
          { label: 'closed', value: 'closed' },
          { label: 'processing', value: 'processing' },
        ]}
      />
      <LFormItemSelect
        label="select2"
        name="select2"
        required
        options={[
          { label: 'open2', value: 'open' },
          { label: 'closed2', value: 'closed' },
          { label: 'processing2', value: 'processing' },
        ]}
      />

      <LFormItemMentions
        required
        label="标签1"
        name="mentions-1"
        dependencies={['select1']}
        refreshDeps={[select1Val]}
        request={async (value) => {
          console.log('value', value);
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve([
                { value: 'afc163', label: 'afc163', key: 'afc163' },
                { value: 'zombieJ', label: 'zombieJ', key: 'zombieJ' },
                { value: 'yesmeck', label: 'yesmeck', key: 'yesmeck' },
              ]);
            }, 2000);
          });
        }}
        // options={[
        //   { value: 'afc163', label: 'afc163' },
        //   { value: 'zombieJ', label: 'zombieJ' },
        //   { value: 'yesmeck', label: 'yesmeck' },
        // ]}
      />
    </LForm>
  );
};
export default Demo1;
