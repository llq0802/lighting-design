import { LForm, LFormItemSelect } from 'lighting-design';
import LFormItemMentions from '..';

const Demo1 = () => {
  const [form] = LForm.useForm();
  const select1Val = LForm.useWatch('select1', form);
  // console.log('select1Val');

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
          { label: 'Unresolved', value: 'open' },
          { label: 'Resolved', value: 'closed' },
          { label: 'Resolving', value: 'processing' },
        ]}
      />

      <LFormItemMentions
        required
        label="标签1"
        name="mentions-1"
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
