import Mock from 'better-mock';
import { LForm, LFormItemAddress } from 'lighting-design';
import './styles.less';

const opts1 = Mock.mock({ 'list|10': [{ label: '@cname', value: '@id' }] }).list;

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemAddress
        label="Select单选"
        required
        name="a1"
        options={opts1}
        leftProps={{ isSelect: true }}
        rightProps={{ isInputNumber: true, max: 99999 }}
      />
      <LFormItemAddress
        label="Select多选"
        required
        name="a2"
        options={opts1}
        leftProps={{ isSelect: true, mode: 'multiple' }}
        rightProps={{ isInputNumber: true, min: 0 }}
      />
    </LForm>
  );
};
export default Demo1;
