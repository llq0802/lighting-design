import { LoadingOutlined } from '@ant-design/icons';
import Mock from 'better-mock';
import { LForm, LFormItemCheckbox, LFormItemSelect } from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';

const Demo5 = () => {
  const [form] = LForm.useForm();
  const select1Val = LForm.useWatch('select1', form);

  return (
    <LForm
      form={form}
      labelCol={{ flex: '80px' }}
      submitter={{
        buttonAlign: 80,
      }}
      onFinish={(val) => {
        console.log('==val====>', val);
      }}
    >
      <LFormItemSelect
        label="select1"
        name="select1"
        required
        options={[
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
          { label: 'C', value: 'c' },
        ]}
      />
      <LFormItemCheckbox
        label="select2"
        name="select2"
        required
        refreshDeps={[select1Val]}
        spin={{ indicator: <LoadingOutlined style={{ fontSize: 24 }} spin /> }}
        request={async () => {
          let data: Record<string, any>[] = [];
          if (!select1Val) return data;
          if (select1Val === 'a') {
            data = Mock.mock({ 'list|8': [{ label: '@cname', value: '@id' }] }).list;
          }
          if (select1Val === 'b') {
            data = Mock.mock({ 'list|8': [{ label: '@cname', value: '@id' }] }).list;
          }
          if (select1Val === 'c') {
            data = Mock.mock({ 'list|8': [{ label: '@cname', value: '@id' }] }).list;
          }
          await awaitTime();
          return data;
        }}
        renderField={(dom) => {
          if (!select1Val) return <>请先选择 select1</>;
          return dom;
        }}
      />
    </LForm>
  );
};
export default Demo5;
