import { LoadingOutlined } from '@ant-design/icons';
import { LForm, LFormItemCascader } from 'lighting-design';
import { awaitTime } from '../../_test';

const Index = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      labelCol={{ flex: '80px' }}
      submitter={{
        buttonAlign: 80,
      }}
    >
      <LFormItemCascader
        label="select2"
        name="select2"
        required
        spin={{
          indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />,
        }}
        request={async (select1) => {
          // console.log('select1 ', select1);

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
          const result = await awaitTime(data);
          if (result.success) return result.data;
        }}
      />
    </LForm>
  );
};
export default Index;
