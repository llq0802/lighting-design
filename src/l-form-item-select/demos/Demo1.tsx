import Mock from 'better-mock';
import { LForm, LFormItemSelect } from 'lighting-design';

const opts1 = Mock.mock({ 'list|10': [{ label: '@cname', value: '@id' }] }).list;
const opts2 = Mock.mock({ 'list|20': [{ code: '@id', city: '@city' }] }).list;

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      labelWidth={180}
      submitter={{ buttonAlign: 'center' }}
      onFinish={(vals) => {
        console.log('onFinish', vals);
      }}
    >
      <LFormItemSelect label="单选" name="select1" required options={opts1} />
      <LFormItemSelect
        label="单选/全部"
        name="select11"
        required
        options={[
          { label: 'open', value: 'open' },
          { label: 'closed', value: 'closed' },
          { label: 'processing', value: 'processing' },
        ]}
        all
      />
      <LFormItemSelect label="可搜索" name="select1111" required options={opts1} showSearch />
      <LFormItemSelect label="多选" name="select2" mode="multiple" required options={opts1} />
      <LFormItemSelect
        label="变形"
        name="select22"
        required
        mode="multiple"
        variant="filled"
        options={opts1}
      />
      <LFormItemSelect
        label="自定义 options 的键名"
        name="select3"
        required
        options={opts2}
        fieldNames={{ label: 'city', value: 'code' }}
      />
    </LForm>
  );
};
export default Demo1;
