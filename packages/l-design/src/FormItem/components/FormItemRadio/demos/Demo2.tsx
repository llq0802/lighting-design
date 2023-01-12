import { LForm, LFormItemRadio } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemSelect" form={form}>
      <LFormItemRadio
        label="单选1"
        name="LFormItemRadio1"
        required
        request={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve([
                { label: 'Unresolved', value: 'open' },
                { label: 'Resolved', value: 'closed' },
                { label: 'Resolving', value: 'processing' },
              ]);
            }, 3000);
          });
        }}
      />
      <LFormItemRadio
        label="单选2"
        name="LFormItemRadio2"
        all
        required
        request={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve([
                { label: 'Unresolved', value: 'open' },
                { label: 'Resolved', value: 'closed' },
                { label: 'Resolving', value: 'processing' },
              ]);
            }, 4000);
          });
        }}
        options={[{ label: 'Unresolved', value: 'open' }]}
      />
    </LForm>
  );
};
export default Demo1;
