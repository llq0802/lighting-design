import { LForm, LFormItemSelect } from 'lighting-design';
import { awaitTime } from '../../_test';

const Index = () => {
  const [form] = LForm.useForm();
  const select1Val = LForm.useWatch('select1', form);

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
        disabled={!select1Val}
        refreshDeps={[select1Val]}
        placeholder="请先选择 select1"
        label="select2"
        name="select2"
        request={async () => {
          console.log('select1Val ', select1Val);
          form.setFieldValue('select2', void 0);
          if (!select1Val) return [];
          let data: Record<string, any>[] = [];
          if (select1Val === 'a') data = [{ label: 'A', value: 'a' }];
          if (select1Val === 'b') data = [{ label: 'B', value: 'b' }];
          if (select1Val === 'c') data = [{ label: 'C', value: 'c' }];
          const result = await awaitTime(data, 500);
          return result.data;
        }}
      />
    </LForm>
  );
};
export default Index;
