import { LForm, LFormItemSelect } from 'lighting-design';
import { awaitTime } from '../../_test';

const Index = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      labelCol={{ flex: '80px' }}
      submitter={{ buttonAlign: 80 }}
      onFinish={async (vals) => {
        console.log('==vals====>', vals);
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
      <LFormItemSelect
        placeholder="请先选择 select1"
        dependencies={['select1']}
        label="select2"
        name="select2"
        request={async (select1) => {
          console.log('select1 ', select1);
          let data: Record<string, any>[] = [];
          if (select1 === 'a') {
            data = [{ label: 'A', value: 'a' }];
          }
          if (select1 === 'b') {
            data = [{ label: 'B', value: 'b' }];
          }
          if (select1 === 'c') {
            data = [{ label: 'C', value: 'c' }];
          }
          const result = await awaitTime(data, 500);
          return result.data;
        }}
      />
    </LForm>
  );
};
export default Index;
