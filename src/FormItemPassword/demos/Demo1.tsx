import { LForm } from 'lighting-design';
import MyPasswords from './MyPasswords';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      submitter={{ buttonAlign: 'center' }}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <MyPasswords />
    </LForm>
  );
};
export default Demo1;
