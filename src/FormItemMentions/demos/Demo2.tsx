import { LForm, LFormItemMentions, LFormItemSelect } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();
  const select1Val = LForm.useWatch('select-1', form);

  return (
    <LForm
      form={form}
      onFinish={(res) => {
        console.log('res', res);
      }}
    >
      <LFormItemSelect
        label="select-1"
        name="select-1"
        required
        options={[
          { label: 'open', value: 'open' },
          { label: 'closed', value: 'closed' },
          { label: 'processing', value: 'processing' },
        ]}
      />

      <LFormItemMentions
        required
        label="标签-1"
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
      />
    </LForm>
  );
};
export default Demo1;
