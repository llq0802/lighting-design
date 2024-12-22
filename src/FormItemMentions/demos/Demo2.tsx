import Mock from 'better-mock';
import { LForm, LFormItemMentions, LFormItemSelect } from 'lighting-design';
const opts = Mock.mock({ 'list|6': [{ label: '@cname', value: '@cname' }] }).list;

const Demo1 = () => {
  const [form] = LForm.useForm();
  const select1Val = LForm.useWatch('select-1', form);

  return (
    <LForm
      form={form}
      isAntdReset={false}
      onFinish={(res) => {
        console.log('res', res);
      }}
    >
      <LFormItemSelect label="select-1" name="select-1" required options={opts} />

      <LFormItemMentions
        required
        disabled={!select1Val}
        mentionsProps={{ readOnly: !select1Val }}
        label="标签-1"
        name="mentions-1"
        refreshDeps={[select1Val]}
        request={async () => {
          if (!select1Val) return [];
          return new Promise((resolve) => {
            setTimeout(() => {
              const opts1 = Mock.mock({ 'list|6': [{ label: '@cname', value: '@cname' }] }).list;
              resolve(opts1);
            }, 1000);
          });
        }}
      />
    </LForm>
  );
};
export default Demo1;
