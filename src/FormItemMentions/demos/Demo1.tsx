import Mock from 'better-mock';
import { LForm, LFormItemMentions } from 'lighting-design';
const opts1 = Mock.mock({ 'list|5': [{ label: '@cname', value: '@cname' }] }).list;

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      onFinish={(res) => {
        console.log('res', res);
      }}
    >
      <LFormItemMentions required label="标签1" name="mentions-1" options={opts1} />
      <LFormItemMentions
        required
        label="标签2"
        name="mentions-2"
        options={opts1}
        variant="filled"
        mentionsProps={{
          onChange(val) {
            console.log('onChange', val);
          },
        }}
      />
    </LForm>
  );
};
export default Demo1;
